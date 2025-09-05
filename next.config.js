const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/static/:path*',
        destination: '/:path*'
      }
    ];
  }
};

module.exports = nextConfig;