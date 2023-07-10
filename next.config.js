/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      // production
      {
        protocol: "https",
        hostname: "acp-backend.onrender.com",
        port: "*",
        pathname: "**",
      },
      // {
      //   protocol: "http",
      //   hostname: "127.0.0.1",
      //   port: "*",
      //   pathname: "**",
      // },
    ],
    domains: ["acp-backend.onrender.com", "127.0.0.1"],
  },
};

module.exports = nextConfig;
