import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web App Showcase | Karthikeyan G",
  description: "Explore my collection of innovative web applications - from 3D design tools to AI-powered solutions.",
  keywords: ["web apps", "portfolio", "karthikeyan", "developer tools", "creative apps"],
  authors: [{ name: "Karthikeyan G", url: "https://karthikeyang.me" }],
  openGraph: {
    title: "Web App Showcase | Karthikeyan G",
    description: "Explore my collection of innovative web applications",
    url: "https://web-app-showcase.karthikeyang.tech",
    siteName: "Web App Showcase",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web App Showcase | Karthikeyan G",
    description: "Explore my collection of innovative web applications",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
