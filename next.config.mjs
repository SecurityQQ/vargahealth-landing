/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/interview',
        destination: 'https://calendly.com/annzrva108/15min',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
