"use client";

import { useState, useMemo } from "react";
import { webApps, categories } from "@/lib/apps-data";
import { useUser } from "@clerk/nextjs";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AppCard from "@/components/AppCard";
import FilterBar from "@/components/FilterBar";
import Footer from "@/components/Footer";

export default function Home() {
  const { isSignedIn, user } = useUser();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filteredApps = useMemo(() => {
    return webApps.filter((app) => {
      const matchesCategory =
        selectedCategory === "All" || app.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredApps = webApps.filter((app) => app.featured);

  const handleFavoriteToggle = async (appId: string) => {
    if (!isSignedIn) {
      window.location.href = "/sign-in";
      return;
    }

    const newFavorites = new Set(favorites);
    if (newFavorites.has(appId)) {
      newFavorites.delete(appId);
    } else {
      newFavorites.add(appId);
    }
    setFavorites(newFavorites);

    // TODO: API call to save favorite
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
      <Header />
      <HeroSection />

      <main className="container mx-auto px-4 py-12">
        {/* Featured Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Featured Apps
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Handpicked selection of my best work
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                isFavorite={favorites.has(app.id)}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        </section>

        {/* All Apps Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                All Applications
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {filteredApps.length} apps available
              </p>
            </div>
          </div>

          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {filteredApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                isFavorite={favorites.has(app.id)}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>

          {filteredApps.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                No apps found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
