#!/usr/bin/env bash
set -e  # aborta se qualquer comando falhar

SRC_DIR="src"
PROJECT_NAME="blogtech1"
APP_NAME="articles"

echo "Creating virtual environment..."
python3 -m venv venv_blogtech1
source venv_blogtech1/bin/activate

echo "Installing dependencies..."
pip install --upgrade pip
pip install django markdown pygments

echo "Creating src directory..."
mkdir -p "$SRC_DIR"
cd "$SRC_DIR"

echo "Starting Django project..."
django-admin startproject "$PROJECT_NAME" .
python manage.py startapp "$APP_NAME"

echo "Adding 'articles' app to INSTALLED_APPS..."
sed -i "/INSTALLED_APPS = \[/a\    '$APP_NAME'," "$PROJECT_NAME/settings.py"

echo "Creating Article model..."
cat > "$APP_NAME/models.py" << 'EOF'
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
EOF

echo "Registering Article model in admin..."
cat > "$APP_NAME/admin.py" << 'EOF'
from django.contrib import admin
from .models import Article

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    list_display = ("title", "created_at")
    search_fields = ("title", "content")
EOF

echo "Creating views and URLs..."
cat > "$APP_NAME/views.py" << 'EOF'
from django.shortcuts import render, get_object_or_404
from .models import Article
import markdown
from django.utils.safestring import mark_safe

def home(request):
    articles = Article.objects.order_by('-created_at')
    return render(request, "articles/home.html", {"articles": articles})

def article_detail(request, slug):
    article = get_object_or_404(Article, slug=slug)
    html_content = mark_safe(
        markdown.markdown(article.content, extensions=['fenced_code', 'codehilite'])
    )
    return render(
        request,
        "articles/detail.html",
        {"article": article, "html_content": html_content}
    )

def about(request):
    return render(request, "articles/about.html")
EOF

cat > "$APP_NAME/urls.py" << 'EOF'
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("about/", views.about, name="about"),
    path("<slug:slug>/", views.article_detail, name="article_detail"),
]
EOF

echo "Adding app URLs to project..."
sed -i "s/from django.urls import path/from django.urls import path, include/" \
    "$PROJECT_NAME/urls.py"

sed -i "/urlpatterns = \[/a\    path('', include('$APP_NAME.urls'))," \
    "$PROJECT_NAME/urls.py"

echo "Creating templates..."
TEMPLATES_PATH="$APP_NAME/templates/articles"
mkdir -p "$TEMPLATES_PATH"

cat > "$TEMPLATES_PATH/home.html" << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>AI & ML Engineering Blog</title>
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css">
    <style>
        body { font-family: 'Segoe UI', sans-serif; background: #fafbfc; color: #222; }
        .container { max-width: 700px; margin: 40px auto; padding: 20px;
                     background: #fff; border-radius: 8px; }
        nav { margin-bottom: 2em; }
        .article-list { list-style: none; padding: 0; }
        .article-list li { margin-bottom: 1.5em; }
        .date { color: #888; font-size: 0.9em; }
    </style>
</head>
<body>
<div class="container">
    <nav>
        <a href="/">Home</a> | <a href="/about/">About</a>
    </nav>
    <h1>AI & ML Engineering Blog</h1>
    <ul class="article-list">
        {% for article in articles %}
            <li>
                <a href="/{{ article.slug }}/"><strong>{{ article.title }}</strong></a>
                <div class="date">{{ article.created_at|date:"F j, Y" }}</div>
            </li>
        {% empty %}
            <li>No articles yet.</li>
        {% endfor %}
    </ul>
</div>
</body>
</html>
EOF

cat > "$TEMPLATES_PATH/detail.html" << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>{{ article.title }}</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background: #fafbfc; }
        .container { max-width: 700px; margin: 40px auto; padding: 20px;
                     background: #fff; border-radius: 8px; }
        nav { margin-bottom: 2em; }
        pre { background: #f6f8fa; padding: 1em; border-radius: 5px; }
    </style>
</head>
<body>
<div class="container">
    <nav>
        <a href="/">Home</a> | <a href="/about/">About</a>
    </nav>
    <h1>{{ article.title }}</h1>
    <div class="date">{{ article.created_at|date:"F j, Y" }}</div>
    {{ html_content|safe }}
</div>
</body>
</html>
EOF

cat > "$TEMPLATES_PATH/about.html" << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>About</title>
</head>
<body>
<div class="container">
    <nav>
        <a href="/">Home</a> | <a href="/about/">About</a>
    </nav>
    <h1>About</h1>
    <p>
        This blog shares insights and tutorials about AI & ML engineering.
    </p>
</div>
</body>
</html>
EOF

echo "Running migrations..."
python manage.py makemigrations
python manage.py migrate

echo "Creating superuser..."
python manage.py createsuperuser

echo
echo "✅ Bootstrap complete!"
echo "Run the server with:"
echo "source venv_blogtech1/bin/activate && cd src && python manage.py runserver"
