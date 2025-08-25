# Quick Start Guide - AI Engineering Website

## 🚀 Get Started in 30 Minutes

This guide will help you set up your AI engineering website project and start building immediately.

## Prerequisites Check

First, ensure you have the required tools installed:

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check Git
git --version
```

If any are missing, install them from:
- **Node.js**: https://nodejs.org/
- **Git**: https://git-scm.com/

## Step 1: Create the Project (5 minutes)

```bash
# Navigate to your workspace
cd /c/Users/tiago/Projects/tiagorm/ai-tech-blog-experiments

# Create the Next.js project
npx create-next-app@latest ai-engineering-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Navigate into the project
cd ai-engineering-website
```

## Step 2: Install Dependencies (5 minutes)

```bash
# Install core dependencies
npm install @mdx-js/react @mdx-js/loader @next/mdx
npm install gray-matter remark remark-html
npm install lucide-react
npm install @tailwindcss/typography
npm install date-fns
npm install clsx tailwind-merge
npm install @vercel/analytics

# Install dev dependencies
npm install -D @types/node
npm install -D prettier prettier-plugin-tailwindcss
```

## Step 3: Basic Configuration (10 minutes)

### Update `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

### Update `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
```

## Step 4: Create Basic Structure (10 minutes)

### Create directories
```bash
# Create component directories
mkdir -p src/components/ui
mkdir -p src/components/layout
mkdir -p src/components/blog
mkdir -p src/components/home

# Create content directories
mkdir -p src/content/posts/2024/01
mkdir -p src/content/projects

# Create utility directories
mkdir -p src/lib
mkdir -p src/types
mkdir -p src/styles
```

### Create basic types (`src/types/blog.ts`)
```typescript
export interface BlogPostMeta {
  title: string
  date: string
  excerpt: string
  tags: string[]
  coverImage?: string
  published: boolean
}

export interface BlogPost extends BlogPostMeta {
  slug: string
  content: string
}
```

## Step 5: Test Your Setup

```bash
# Start the development server
npm run dev
```

Open http://localhost:3000 in your browser. You should see the default Next.js page.

## 🎯 Next Immediate Actions

### 1. Customize the Homepage
Edit `src/app/page.tsx` to create your hero section:

```typescript
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">
            AI Engineering Blog
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Exploring the intersection of artificial intelligence and software engineering
          </p>
          <div className="mt-10">
            <a
              href="/blog"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
            >
              Read the Blog
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
```

### 2. Create Your First Blog Post
Create `src/content/posts/2024/01/welcome-to-ai-engineering.md`:

```markdown
---
title: "Welcome to AI Engineering: My Journey Begins"
date: "2024-01-15"
excerpt: "Starting my journey into AI engineering and what I hope to learn and share along the way."
tags: ["ai-engineering", "career", "machine-learning"]
published: true
---

# Welcome to AI Engineering

This is my first blog post about AI engineering. Here I'll share my experiences, learnings, and insights as I navigate this exciting field.

## What to Expect

- Technical deep-dives into AI/ML concepts
- Practical tutorials and guides
- Industry insights and trends
- Personal project showcases

Stay tuned for more content!
```

### 3. Set Up Git Repository
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial setup: AI engineering website foundation"

# Create a new repository on GitHub/GitLab and add remote
# git remote add origin https://github.com/yourusername/ai-engineering-website.git
# git push -u origin main
```

## 📚 Learning Resources

### Next.js & React
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### AI/ML Content Ideas
- [Towards Data Science](https://towardsdatascience.com/)
- [Distill](https://distill.pub/)
- [Papers With Code](https://paperswithcode.com/)

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to connect your GitHub repo
```

### Option 2: Netlify (Free)
- Connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `out`

## 📅 Week 1 Goals

- [ ] Complete project setup
- [ ] Create basic homepage
- [ ] Set up navigation structure
- [ ] Write first blog post
- [ ] Deploy to staging environment

## 🆘 Getting Help

### Common Issues
1. **Port 3000 already in use**: Use `npm run dev -- -p 3001`
2. **TypeScript errors**: Check that all dependencies are installed
3. **Tailwind not working**: Ensure `tailwind.config.js` is in the root directory

### Resources
- [Next.js GitHub Issues](https://github.com/vercel/next.js/issues)
- [Tailwind CSS Discord](https://discord.gg/7NF8GNe)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

## 🎉 You're Ready!

You now have a solid foundation for your AI engineering website. The next steps are:

1. **Customize the design** to match your personal brand
2. **Write your first few blog posts** to establish content
3. **Add more features** like search, tags, and comments
4. **Optimize for SEO** and performance
5. **Launch and promote** your site

Remember: Start simple, iterate quickly, and focus on creating valuable content for your audience.

Happy coding! 🚀
