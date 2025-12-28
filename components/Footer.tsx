"use client";

import Link from "next/link";
import { Github, Instagram, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Karthikeyan G
            </h3>
            <p className="text-gray-400 mb-4">
              Full-stack developer passionate about creating innovative web solutions.
              Explore my collection of 23 web applications spanning various categories.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/karthikeyan006867"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/karthi006867"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:admin@karthikeyang.me"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://karthikeyang.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <a
                  href="mailto:admin@karthikeyang.me"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Design & Creative</li>
              <li className="text-gray-400">Development</li>
              <li className="text-gray-400">Productivity</li>
              <li className="text-gray-400">Games</li>
              <li className="text-gray-400">Education</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Karthikeyan G</span>
            <span>•</span>
            <span>{new Date().getFullYear()}</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            All apps are free to use. © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
