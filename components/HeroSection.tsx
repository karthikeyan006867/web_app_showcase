"use client";

import { ArrowRight, Zap, Star, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-75" />
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-150" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full mb-8">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="text-white font-medium text-sm">
              23 Innovative Web Applications
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Explore My
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200">
              Digital Creations
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            A curated showcase of web applications spanning design tools, games, productivity apps, and innovative solutions
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-6 h-6 text-yellow-300" />
                <p className="text-3xl font-bold text-white">23</p>
              </div>
              <p className="text-white/80">Web Apps</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-300" />
                <p className="text-3xl font-bold text-white">9</p>
              </div>
              <p className="text-white/80">Categories</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-6 h-6 text-blue-300" />
                <p className="text-3xl font-bold text-white">100%</p>
              </div>
              <p className="text-white/80">Free Access</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#apps"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-lg font-semibold transition-all shadow-xl hover:shadow-2xl flex items-center space-x-2 group"
            >
              <span>Explore Apps</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="https://karthikeyang.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white border-2 border-white/30 rounded-lg font-semibold transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-gray-50 dark:fill-gray-900"
          />
        </svg>
      </div>
    </section>
  );
}
