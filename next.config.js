/** @type {import('next').NextConfig} */
require("dotenv").config
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT
  }
}

module.exports = nextConfig


