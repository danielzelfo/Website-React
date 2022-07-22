/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['danielzelfo.github.io'],
  },
  siteUrl: 'https://danielzelfo.com',
  generateRobotsTxt: true
}

module.exports = nextConfig
