/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable React strict mode
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'], // Specify file extensions for pages
    images: {
    domains: ['example.com'], // Configure domains for Image component
  },
}

module.exports = nextConfig
