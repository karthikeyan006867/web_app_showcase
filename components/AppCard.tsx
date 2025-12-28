"use client";

import { WebApp } from "@/lib/apps-data";
import { ExternalLink, Heart, Tag, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative perspective-1000"
    >
      <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
          animate={{
            x: isHovered ? ["0%", "200%"] : "-100%",
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />

        {/* Particle effects on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                }}
                animate={{
                  x: `${50 + (Math.cos((i / 8) * Math.PI * 2) * 40)}%`,
                  y: `${50 + (Math.sin((i / 8) * Math.PI * 2) * 40)}%`,
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}

        {/* Banner with gradient animation */}
        <motion.div
          className={`h-32 bg-gradient-to-br ${app.bannerColor} relative overflow-hidden`}
          animate={isHovered ? {
            backgroundPosition: ["0% 50%", "100% 50%"],
          } : {}}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.div 
            className="absolute inset-0 bg-black/10"
            animate={isHovered ? { opacity: [0.1, 0.2, 0.1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Floating shapes */}
          {isHovered && (
            <>
              <motion.div
                className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white/30 rotate-45"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </>
          )}

          {/* Featured badge */}
          {app.featured && (
            <motion.div
              className="absolute top-4 left-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="flex items-center space-x-1 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                <Sparkles className="w-3 h-3" />
                <span>Featured</span>
              </div>
            </motion.div>
          )}

          {/* Favorite button */}
          <motion.div className="absolute top-4 right-4">
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                onFavoriteToggle(app.id);
              }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full backdrop-blur-lg transition-all ${
                isFavorite
                  ? "bg-red-500 text-white"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <motion.div
                animate={isFavorite ? {
                  scale: [1, 1.2, 1],
                } : {}}
                transition={{ duration: 0.3 }}
              >
                <Heart
                  className="w-5 h-5"
                  fill={isFavorite ? "currentColor" : "none"}
                />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Icon with floating animation */}
          <motion.div 
            className="absolute -bottom-8 left-6"
            whileHover={{ y: -5, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center text-4xl border-4 border-white dark:border-gray-800"
              animate={isHovered ? {
                boxShadow: [
                  "0 10px 20px rgba(0,0,0,0.1)",
                  "0 20px 40px rgba(0,0,0,0.2)",
                  "0 10px 20px rgba(0,0,0,0.1)",
                ],
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.span
                animate={isHovered ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                } : {}}
                transition={{ duration: 0.5 }}
              >
                {app.icon}
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="p-6 pt-12">
          <motion.h3
            className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {app.name}
          </motion.h3>
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {app.description}
          </motion.p>

          {/* Tags with stagger animation */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {app.tags.slice(0, 3).map((tag, index) => (
              <motion.span
                key={tag}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center space-x-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-lg cursor-default"
              >
                <Tag className="w-3 h-3" />
                <span>{tag}</span>
              </motion.span>
            ))}
            {app.tags.length > 3 && (
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-lg"
              >
                +{app.tags.length - 3}
              </motion.span>
            )}
          </motion.div>

          {/* Category badge */}
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
              {app.category}
            </span>
          </motion.div>

          {/* Visit button */}
          <motion.a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all group/btn relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="relative z-10"
              animate={isHovered ? { x: [0, 3, 0] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Visit App
            </motion.span>
            <motion.div
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ExternalLink className="w-4 h-4 relative z-10" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
