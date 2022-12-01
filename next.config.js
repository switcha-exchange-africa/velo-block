/** @type {import('next').NextConfig} */
require("dotenv").config
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
    NEXT_PUBLIC_NODE_ENV:process.env.NEXT_PUBLIC_NODE_ENV,
    NEXT_PUBLIC_DO_SPACES_URL: process.env.NEXT_PUBLIC_DO_SPACES_URL,
    NEXT_PUBLIC_DO_DO_SPACES_ID: process.env.NEXT_PUBLIC_DO_SPACES_ID,
    NEXT_PUBLIC_DO_SPACES_SECRET: process.env.NEXT_PUBLIC_DO_SPACES_SECRET,
    NEXT_PUBLIC_DO_SPACES_ENDPOINT: process.env.NEXT_PUBLIC_DO_SPACES_ENDPOINT,
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV
  },
  images: {
    domains: ['https://switcha-production.fra1.cdn.digitaloceanspaces.com', 'switcha-production.fra1.cdn.digitaloceanspaces.com'],
  },
}

module.exports = nextConfig
