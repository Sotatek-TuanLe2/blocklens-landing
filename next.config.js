/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  compress: true,
  optimization: {
    minimize: true,
  },
};

module.exports = nextConfig;
