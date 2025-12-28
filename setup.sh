#!/bin/bash

# Web App Showcase - Automated Setup Script
# This script will set up your development environment

set -e  # Exit on error

echo "🚀 Web App Showcase - Setup Script"
echo "=================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be 18 or higher. You have version $NODE_VERSION"
    exit 1
fi

echo -e "${GREEN}✅ Node.js $(node -v) detected${NC}"
echo ""

# Check if .env file exists
if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠️  .env file not found${NC}"
    echo "Please create a .env file with the following variables:"
    echo ""
    echo "DATABASE_URL=postgresql://user:password@host/database?sslmode=require"
    echo "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_..."
    echo "CLERK_SECRET_KEY=sk_test_..."
    echo "NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in"
    echo "NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up"
    echo "NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/"
    echo "NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/"
    echo "NEXT_PUBLIC_APP_URL=https://web-app-showcase.karthikeyang.tech"
    echo "NEXT_PUBLIC_PORTFOLIO_URL=https://karthikeyang.me"
    echo ""
    read -p "Press Enter once you've created the .env file..."
fi

echo -e "${GREEN}✅ .env file found${NC}"
echo ""

# Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm install

echo ""
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Generate Prisma client
echo -e "${BLUE}🔧 Generating Prisma client...${NC}"
npx prisma generate

echo ""
echo -e "${GREEN}✅ Prisma client generated${NC}"
echo ""

# Push database schema
echo -e "${BLUE}🗄️  Pushing database schema...${NC}"
npx prisma db push

echo ""
echo -e "${GREEN}✅ Database schema pushed${NC}"
echo ""

# Seed database
echo -e "${BLUE}🌱 Seeding database with app data...${NC}"
npx prisma db seed

echo ""
echo -e "${GREEN}✅ Database seeded successfully${NC}"
echo ""

# Build the application
echo -e "${BLUE}🔨 Building application...${NC}"
npm run build

echo ""
echo -e "${GREEN}✅ Application built successfully${NC}"
echo ""

echo "=================================="
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo "=================================="
echo ""
echo "You can now start the development server:"
echo ""
echo -e "${BLUE}  npm run dev${NC}"
echo ""
echo "Or start the production server:"
echo ""
echo -e "${BLUE}  npm start${NC}"
echo ""
echo "Additional commands:"
echo -e "${BLUE}  npx prisma studio${NC}  # Open Prisma Studio to view database"
echo -e "${BLUE}  npm run lint${NC}       # Run ESLint"
echo ""
echo "🌐 Your app will be available at: http://localhost:3000"
echo ""
echo "Happy coding! 🎉"
echo ""
