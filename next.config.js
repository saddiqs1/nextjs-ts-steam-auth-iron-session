/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.akamai.steamstatic.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
