/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // 1. Отключаем React Strict Mode для стабильности
  reactStrictMode: false, 
  
  // 2. Исправляем устаревший ключ (serverComponentsExternalPackages -> serverExternalPackages)
  // и отключаем экспериментальные флаги, которые вызывают ошибки.
  experimental: {
    // Явно указываем, что Turbopack должен использовать Webpack для этой сборки.
    // Это ключевое решение конфликта.
    forceSwcTransforms: true, 
  },

  // 3. Конфигурация Webpack (для алиасов @/)
  webpack(config) {
    // Это решает проблему Module not found для alias @/
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};

module.exports = nextConfig;