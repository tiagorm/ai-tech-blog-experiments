import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-futuristic relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="heading-lg mb-6">
              Welcome to the Future of{" "}
              <span className="gradient-text">AI Engineering</span>
            </h1>
            
            {/* Subtitle */}
            <p className="body-md mb-10 text-gray-300 max-w-3xl mx-auto">
              Exploring the intersection of artificial intelligence and software engineering. 
              Discover cutting-edge insights, practical tutorials, and the latest trends 
              that are shaping the future of technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/blog" className="btn-primary text-base px-6 py-3">
                Explore Articles
              </Link>
              <button className="px-6 py-3 border border-gray-600 rounded-12 text-gray-300 hover:text-white hover:border-gray-400 transition-all duration-300 text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-futuristic">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Why Choose <span className="gradient-text">AI Engineering</span>?
            </h2>
            <p className="body-md text-gray-400 max-w-2xl mx-auto">
              Our platform provides comprehensive insights into the world of AI engineering, 
              from fundamental concepts to advanced production systems.
            </p>
          </div>

          <div className="grid-auto-fit">
            {/* Feature Card 1 */}
            <div className="glass-card p-6 card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation First</h3>
              <p className="body-md text-gray-400">
                Stay ahead of the curve with cutting-edge AI technologies and methodologies 
                that are reshaping industries worldwide.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="glass-card p-6 card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Practical Knowledge</h3>
              <p className="body-md text-gray-400">
                Learn from real-world examples and hands-on tutorials that bridge the gap 
                between theory and practical implementation.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="glass-card p-6 card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Community Driven</h3>
              <p className="body-md text-gray-400">
                Join a community of AI enthusiasts, engineers, and researchers sharing 
                knowledge and pushing the boundaries of what's possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16">
        <div className="container-futuristic">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="body-md text-gray-400 max-w-2xl mx-auto">
              Discover our most recent articles covering the latest trends, 
              technologies, and best practices in AI engineering.
            </p>
          </div>

          <div className="grid-auto-fit">
            {/* Latest Post 1 */}
            <div className="glass-card p-6 card-hover">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-500">2024-02-05</span>
                <span className="text-sm text-blue-400">Architecture</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                <Link href="/blog/understanding-ai-engineering-stack" className="hover:text-blue-400 transition-colors">
                  Understanding the AI Engineering Stack
                </Link>
              </h3>
              <p className="body-md text-gray-400 mb-4">
                A comprehensive breakdown of the modern AI engineering stack, exploring how data flows through each layer.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">architecture</span>
                <span className="tag">mlops</span>
                <span className="tag">engineering</span>
              </div>
            </div>

            {/* Latest Post 2 */}
            <div className="glass-card p-6 card-hover">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-500">2024-01-29</span>
                <span className="text-sm text-purple-400">Tools</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                <Link href="/blog/essential-ai-engineering-tools-2024" className="hover:text-purple-400 transition-colors">
                  Essential AI Engineering Tools 2024
                </Link>
              </h3>
              <p className="body-md text-gray-400 mb-4">
                A comprehensive guide to the must-have tools that will supercharge your AI engineering workflow.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">tools</span>
                <span className="tag">productivity</span>
                <span className="tag">mlops</span>
              </div>
            </div>

            {/* Latest Post 3 */}
            <div className="glass-card p-6 card-hover">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm text-gray-500">2024-01-22</span>
                <span className="text-sm text-green-400">Career</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                <Link href="/blog/why-i-chose-ai-engineering" className="hover:text-green-400 transition-colors">
                  Why I Chose AI Engineering
                </Link>
              </h3>
              <p className="body-md text-gray-400 mb-4">
                Discovering my passion for AI engineering and the valuable lessons learned along the way.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">career</span>
                <span className="tag">journey</span>
                <span className="tag">growth</span>
              </div>
            </div>
          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-10">
            <Link href="/blog" className="btn-primary text-base px-6 py-3">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container-futuristic">
          <div className="glass-card p-8 text-center max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">
              Stay <span className="gradient-text">Connected</span>
            </h2>
            <p className="body-md text-gray-400 mb-6 max-w-2xl mx-auto">
              Get the latest insights, tutorials, and industry updates delivered directly to your inbox. 
              Join thousands of AI engineers staying ahead of the curve.
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
    </div>
  );
}
