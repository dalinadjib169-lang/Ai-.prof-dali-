/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY,
    HF_MODEL: process.env.HF_MODEL || "tiiuae/falcon-7b-instruct"
  },
  experimental: {
    appDir: false
  }
};

module.exports = nextConfig;
