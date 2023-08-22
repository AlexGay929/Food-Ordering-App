/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
      },
    // Change the host and port as needed
    host: '127.0.0.1', // Set to '0.0.0.0' to listen on all available network interfaces
    port: 3000,      // Set the desired port number
}

// const dns = require('dns');
// dns.setDefaultResultOrder("ipv4first");

module.exports = nextConfig;
