/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['karthikeyang.me'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.karthikeyang.me',
      },
    ],
  },
};

export default nextConfig;
