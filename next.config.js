/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github.com',
          port: '',
          pathname: '/open-source-labs/Chronos/raw/master/assets/**',
        },
      ],
    },
  };