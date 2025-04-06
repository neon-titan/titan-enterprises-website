/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: [],
    unoptimized: true
  }
};

module.exports = nextConfig;
