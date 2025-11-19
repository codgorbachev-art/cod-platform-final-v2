/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // 1. Отключаем React Strict Mode для стабильности
  reactStrictMode: false, 
  
  // 2. Явно настраиваем Webpack для алиасов @/
  webpack(config) {
    // Этот код указывает Webpack, что `@/` эквивалентно папке `src/`
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  
  // 3. Отключаем экспериментальные флаги, которые вызывают ошибки.
  experimental: {
    forceSwcTransforms: true, 
  },
};

module.exports = nextConfig;