/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.0.101:3000",
    "http://192.168.0.101",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
    qualities: [75, 95, 100],
  },
};

module.exports = nextConfig;
