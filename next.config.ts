/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Это решает проблему Module not found для alias @/
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;