/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
      },
      env: {
        customKey: 'http://localhost:3000',
      },
}


module.exports = nextConfig;
