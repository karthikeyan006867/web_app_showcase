# ⚡ Quick Start Guide

Get up and running with Web App Showcase in under 5 minutes!

## 🎯 Prerequisites

- ✅ Node.js 18+ installed ([Download](https://nodejs.org/))
- ✅ Git installed
- ✅ A code editor (VS Code recommended)

## 📥 Step 1: Clone & Install

```bash
# Clone the repository
git clone https://github.com/karthikeyan006867/web_app_showcase.git
cd web_app_showcase

# Install dependencies
npm install
```

## 🔑 Step 2: Get Your API Keys

### Neon Database (Free)
1. Go to [neon.tech](https://neon.tech)
2. Sign up and create a new project
3. Copy the connection string

### Clerk Authentication (Free)
1. Go to [clerk.dev](https://clerk.dev)
2. Create a new application
3. Copy the publishable key and secret key

## 🔧 Step 3: Configure Environment

Create a `.env` file in the root directory:

```env
# Paste your Neon database URL
DATABASE_URL=postgresql://user:password@host/database?sslmode=require

# Paste your Clerk keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Default paths (keep as is)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# App URLs (update with your domains)
NEXT_PUBLIC_APP_URL=https://web-app-showcase.karthikeyang.tech
NEXT_PUBLIC_PORTFOLIO_URL=https://karthikeyang.me
```

## 🗄️ Step 4: Setup Database

```bash
# Push database schema
npx prisma db push

# Seed with app data (23 web apps)
npx prisma db seed
```

## 🚀 Step 5: Run the App

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser! 🎉

---

## 🛠️ Automated Setup (Alternative)

Run the automated setup script:

```bash
chmod +x setup.sh
./setup.sh
```

This will:
- Install dependencies
- Generate Prisma client
- Push database schema
- Seed the database
- Build the application

---

## 📝 Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production
npm start                # Start production server

# Database
npx prisma studio        # Visual database editor
npx prisma db push       # Update database schema
npx prisma db seed       # Re-seed database
npx prisma generate      # Regenerate Prisma client

# Code Quality
npm run lint             # Run ESLint
```

---

## 🎨 Customization

### Update Your Apps

Edit `lib/apps-data.ts` to add/modify your web applications:

```typescript
{
  id: "24",
  slug: "my-new-app",
  name: "My New App",
  description: "An amazing new application",
  url: "https://my-app.yourdomain.com",
  category: "Productivity",
  tags: ["New", "Cool", "Awesome"],
  bannerColor: "from-blue-500 to-purple-600",
  icon: "🚀",
  featured: true,
}
```

Then re-seed the database:
```bash
npx prisma db seed
```

### Update Branding

Edit these files:
- `components/Header.tsx` - Site name and logo
- `components/Footer.tsx` - Footer links and social media
- `components/HeroSection.tsx` - Hero text and tagline
- `app/layout.tsx` - Meta tags and SEO

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: "#your-color",
  secondary: "#your-color",
  // ...
}
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000
kill -9 $(lsof -t -i:3000)

# Or use different port
PORT=3001 npm run dev
```

### Database Connection Error

- Verify DATABASE_URL is correct
- Check if database is running
- Ensure IP is whitelisted (for cloud databases)

### Clerk Authentication Issues

- Verify Clerk keys are correct
- Check domain is added in Clerk dashboard
- Clear browser cache and cookies

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
```

---

## 📚 Next Steps

1. ✅ **Test all features**: Sign up, browse apps, add favorites
2. 🎨 **Customize design**: Update colors, logos, text
3. 📝 **Add your apps**: Update apps-data.ts with your projects
4. 🚀 **Deploy**: Follow [DEPLOYMENT.md](DEPLOYMENT.md) guide
5. 🔗 **Share**: Add link to your portfolio

---

## 🆘 Need Help?

- 📖 Read the full [README.md](README.md)
- 🚀 Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment guide
- 📧 Email: admin@karthikeyang.me
- 🐙 GitHub: [@karthikeyan006867](https://github.com/karthikeyan006867)

---

## ✨ Features Overview

Once running, you'll have:

- 🏠 **Homepage**: Beautiful showcase of all apps
- 🔍 **Search & Filter**: Find apps by category/tags
- ⭐ **Favorites**: Save favorite apps (requires login)
- 🔐 **Authentication**: Sign up/sign in with Clerk
- 📊 **Analytics**: Track visits to each app
- 📱 **Responsive**: Works on all devices
- 🌙 **Dark Mode**: Beautiful dark theme

---

**Built with ❤️ by Karthikeyan**

Ready to showcase your web apps to the world! 🎉
