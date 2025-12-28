"use client";

import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse" />
              <div className="absolute inset-0 blur-xl bg-blue-500/30 group-hover:bg-blue-500/50 transition-all" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                App Showcase
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                by Karthikeyan G
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Apps
            </Link>
            <Link
              href="https://karthikeyang.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="https://github.com/karthikeyan006867"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              GitHub
            </Link>
            <a
              href="mailto:admin@karthikeyang.me"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  href="/sign-in"
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apps
              </Link>
              <Link
                href="https://karthikeyang.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="https://github.com/karthikeyan006867"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                GitHub
              </Link>
              <a
                href="mailto:admin@karthikeyang.me"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Contact
              </a>
              {!isSignedIn && (
                <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200 dark:border-gray-800">
                  <Link
                    href="/sign-in"
                    className="px-4 py-2 text-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
