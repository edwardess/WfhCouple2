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
  async rewrites() {
    return [
      {
        source: "/portfolio/:path*",
        destination: "https://portfolio-wfhcouple.vercel.app/portfolio/:path*", // Update to your portfolio URL
      },
    ];
  },
};

module.exports = nextConfig;
