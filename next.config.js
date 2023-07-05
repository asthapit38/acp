/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "acp-backend.onrender.com",
        port: "1337",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
