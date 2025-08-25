import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="container-futuristic">
          <h1 className="heading-lg mb-4">
            AI Engineering <span className="gradient-text">Insights</span>
          </h1>
          <p className="body-md text-gray-400 max-w-3xl mx-auto">
            Dive deep into the world of artificial intelligence engineering. From foundational concepts 
            to cutting-edge implementations, discover the knowledge that drives innovation forward.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="mb-12">
        <div className="container-futuristic">
          <div className="grid-auto-fit">
            {/* Post 1: Welcome to AI Engineering */}
            <article className="glass-card p-6 card-hover">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-500">2024-01-15</span>
                <span className="text-sm text-blue-400">AI Engineering</span>
              </div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                <Link href="/blog/welcome-to-ai-engineering" className="hover:text-blue-400 transition-colors">
                  Welcome to AI Engineering: My Journey Begins
                </Link>
              </h2>
              <p className="body-md text-gray-400 mb-4">
                Starting my journey into AI engineering and what I hope to learn and share along the way.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag">ai-engineering</span>
                <span className="tag">career</span>
                <span className="tag">machine-learning</span>
              </div>
              <div className="pt-3 border-t border-gray-700">
                <Link 
                  href="/blog/welcome-to-ai-engineering"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
            </article>

            {/* Post 2: Why I Chose AI Engineering */}
            <article className="glass-card p-6 card-hover">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-500">2024-01-22</span>
                <span className="text-sm text-purple-400">Career Development</span>
              </div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                <Link href="/blog/why-i-chose-ai-engineering" className="hover:text-purple-400 transition-colors">
                  Why I Chose AI Engineering: My Journey and Lessons Learned
                </Link>
              </h2>
              <p className="body-md text-gray-400 mb-4">
                Discovering my passion for AI engineering, the challenges I faced, and the valuable lessons that shaped my career path in this rapidly evolving field.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag">career</span>
                <span className="tag">ai-engineering</span>
                <span className="tag">personal-growth</span>
                <span className="tag">journey</span>
              </div>
              <div className="pt-3 border-t border-gray-700">
                <Link 
                  href="/blog/why-i-chose-ai-engineering"
                  className="text-purple-400 hover:text-purple-300 transition-colors font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
            </article>

            {/* Post 3: Essential Tools */}
            <article className="glass-card p-6 card-hover">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-500">2024-01-29</span>
                <span className="text-sm text-green-400">Tools & Productivity</span>
              </div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                <Link href="/blog/essential-ai-engineering-tools-2024" className="hover:text-green-400 transition-colors">
                  Essential AI Engineering Tools 2024
                </Link>
              </h2>
              <p className="body-md text-gray-400 mb-4">
                A comprehensive guide to the must-have tools, frameworks, and platforms that will supercharge your AI engineering workflow and productivity in 2024.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag">tools</span>
                <span className="tag">productivity</span>
                <span className="tag">best-practices</span>
                <span className="tag">mlops</span>
              </div>
              <div className="pt-3 border-t border-gray-700">
                <Link 
                  href="/blog/essential-ai-engineering-tools-2024"
                  className="text-green-400 hover:text-green-300 transition-colors font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
            </article>

            {/* Post 4: AI Engineering Stack */}
            <article className="glass-card p-6 card-hover">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-500">2024-02-05</span>
                <span className="text-sm text-pink-400">Architecture & Engineering</span>
              </div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                <Link href="/blog/understanding-ai-engineering-stack" className="hover:text-pink-400 transition-colors">
                  Understanding the AI Engineering Stack: From Data to Deployment
                </Link>
              </h2>
              <p className="body-md text-gray-400 mb-4">
                A comprehensive breakdown of the modern AI engineering stack, exploring how data flows through each layer and how to architect scalable AI systems for production.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag">architecture</span>
                <span className="tag">mlops</span>
                <span className="tag">engineering</span>
                <span className="tag">infrastructure</span>
              </div>
              <div className="pt-3 border-t border-gray-700">
                <Link 
                  href="/blog/understanding-ai-engineering-stack"
                  className="text-pink-400 hover:text-pink-300 transition-colors font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mb-12">
        <div className="container-futuristic">
          <div className="glass-card p-8 text-center max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">
              Never Miss an <span className="gradient-text">Update</span>
            </h2>
            <p className="body-md text-gray-400 mb-6 max-w-2xl mx-auto">
              Stay ahead of the curve with our latest insights, tutorials, and industry updates. 
              Join thousands of AI engineers in our community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-12 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap text-sm">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="text-center">
        <div className="container-futuristic">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
