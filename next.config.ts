/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // 1. Отключаем React Strict Mode (для более стабильной работы в Vercel)
  reactStrictMode: false, 
  
  // 2. Явно настраиваем Webpack для работы алиасов @/
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  
  // 3. Явно отключаем Turbopack (чтобы устранить конфликт)
  experimental: {
    serverComponentsExternalPackages: ['next'], // Дополнительная стабильность
    forceSwcTransforms: true, // Использование SWC вместо Turbopack
  },
};

module.exports = nextConfig;