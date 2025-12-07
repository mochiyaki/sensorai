/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during production builds to avoid unknown option errors
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;
