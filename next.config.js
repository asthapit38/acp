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
        hostname: "res.cloudinary.com",
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
    domains: ["acp-backend.onrender.com", "127.0.0.1", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
