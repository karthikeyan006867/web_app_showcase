# 🚀 Web App Showcase

A modern, interactive showcase platform for displaying my portfolio of 23+ web applications. Built with Next.js 14, TypeScript, Tailwind CSS, Clerk authentication, and Prisma ORM.

## ✨ Features

- 🎨 **Beautiful UI** - Modern gradient designs with smooth animations
- 🔐 **Authentication** - Secure sign-in/sign-up with Clerk
- 💾 **Database Integration** - PostgreSQL with Prisma ORM
- ⭐ **Favorites System** - Save your favorite apps (requires login)
- 🔍 **Advanced Filtering** - Search and filter apps by category
- 📱 **Responsive Design** - Works perfectly on all devices
- 🌙 **Dark Mode Ready** - Full dark mode support
- 📊 **Analytics** - Track app visits and popularity
- 🚀 **23 Featured Apps** - From 3D design tools to AI-powered solutions

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **UI Components:** Lucide Icons, Framer Motion
- **Deployment:** Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/karthikeyan006867/web_app_showcase.git
cd web_app_showcase
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Update `.env.local` with your credentials:
- Neon PostgreSQL database URL
- Clerk authentication keys

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

5. Run the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

## 🚀 Deployment

Deploy to Vercel with one click or push to GitHub and import in Vercel dashboard.

## 🌐 Links

- **Live Demo:** [web-app-showcase.karthikeyang.tech](https://web-app-showcase.karthikeyang.tech)
- **Portfolio:** [karthikeyang.me](https://karthikeyang.me)
- **GitHub:** [@karthikeyan006867](https://github.com/karthikeyan006867)
- **Email:** [admin@karthikeyang.me](mailto:admin@karthikeyang.me)

## 👤 Author

**Karthikeyan G**

Made with ❤️ by Karthikeyan G
