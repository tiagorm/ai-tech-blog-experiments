import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Engineering Blog - Exploring the Future of AI",
  description: "A comprehensive blog about AI engineering, machine learning, and the future of artificial intelligence. Join the journey into the next generation of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="animated-bg">
        {/* Futuristic Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4">
          <div className="container-futuristic">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <span className="gradient-text font-bold text-xl">AI Engineering</span>
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                  Home
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                  Blog
                </Link>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                  About
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                  Contact
                </a>
              </div>

              {/* CTA Button */}
              <button className="btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content with top padding for fixed nav */}
        <main className="pt-24">
          {children}
        </main>

        {/* Futuristic Footer */}
        <footer className="glass-card mx-4 mb-4 mt-16">
          <div className="container-futuristic py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="col-span-1 md:col-span-2">
                <Link href="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <span className="gradient-text font-bold text-lg">AI Engineering</span>
                </Link>
                <p className="body-md text-gray-400 max-w-md">
                  Exploring the intersection of artificial intelligence and software engineering. 
                  Join us on the journey to the future of technology.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-white mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2024 AI Engineering Blog. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
