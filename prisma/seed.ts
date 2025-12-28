import { PrismaClient } from "@prisma/client";
import { webApps } from "./apps-data";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing data
  await prisma.appVisit.deleteMany();
  await prisma.favorite.deleteMany();
  await prisma.webApp.deleteMany();

  // Seed web apps
  for (const app of webApps) {
    await prisma.webApp.create({
      data: {
        id: app.id,
        slug: app.slug,
        name: app.name,
        description: app.description,
        url: app.url,
        category: app.category,
        tags: app.tags,
        bannerColor: app.bannerColor,
        icon: app.icon,
        featured: app.featured,
      },
    });
    console.log(`✅ Created app: ${app.name}`);
  }

  console.log("✨ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
