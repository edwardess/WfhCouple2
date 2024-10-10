/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com', // Ensure this line is present
        port: '',
        pathname: '/*',
      },
    ],
  },
}

module.exports = nextConfig;
