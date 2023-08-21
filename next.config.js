/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
      },
      experimental: {
        appDir: false
      },
}

const dns = require('dns');
dns.setDefaultResultOrder("ipv4first");

module.exports = nextConfig
