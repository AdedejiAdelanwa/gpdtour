/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CREDO_BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
