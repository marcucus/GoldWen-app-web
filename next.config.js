/** @type {import('next').NextConfig} */
const nextConfig = {
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