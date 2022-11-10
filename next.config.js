/** @type {import('next').NextConfig} */
require("dotenv").config
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT
  },
  images: {
    domains: ['https://switcha-production.fra1.cdn.digitaloceanspaces.com', 'switcha-production.fra1.cdn.digitaloceanspaces.com'],
  },
}

module.exports = nextConfig
