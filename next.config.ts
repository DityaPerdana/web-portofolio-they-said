/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ppy.sh",
      },
      {
        protocol: "https",
        hostname: "nyctowl.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
