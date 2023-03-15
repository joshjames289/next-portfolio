/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github.com',
          port: '',
          pathname: '/joshjames289/next-portfolio/public/**',
        },
      ],
    },
  };