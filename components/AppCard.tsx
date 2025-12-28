"use client";

import { WebApp } from "@/lib/apps-data";
import { ExternalLink, Heart, Tag } from "lucide-react";
import { motion } from "framer-motion";

interface AppCardProps {
  app: WebApp;
  isFavorite: boolean;
  onFavoriteToggle: (appId: string) => void;
}

export default function AppCard({
  app,
  isFavorite,
  onFavoriteToggle,
}: AppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* Banner */}
        <div
          className={`h-32 bg-gradient-to-br ${app.bannerColor} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-4 right-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                onFavoriteToggle(app.id);
              }}
              className={`p-2 rounded-full backdrop-blur-lg transition-all ${
                isFavorite
                  ? "bg-red-500 text-white"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Heart
                className="w-5 h-5"
                fill={isFavorite ? "currentColor" : "none"}
              />
            </button>
          </div>
          <div className="absolute -bottom-8 left-6">
            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center text-4xl border-4 border-white dark:border-gray-800">
              {app.icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
            {app.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {app.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {app.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center space-x-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-lg"
              >
                <Tag className="w-3 h-3" />
                <span>{tag}</span>
              </span>
            ))}
            {app.tags.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-lg">
                +{app.tags.length - 3}
              </span>
            )}
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
              {app.category}
            </span>
          </div>

          {/* Action Button */}
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 group"
          >
            <span>Launch App</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Featured badge */}
        {app.featured && (
          <div className="absolute top-36 left-0">
            <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-r-lg shadow-lg flex items-center space-x-1">
              <span>⭐</span>
              <span>Featured</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
