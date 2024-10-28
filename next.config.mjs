/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/interview',
        destination: 'https://calendly.com/annzrva108/meet',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://x.com/brogevity',
        permanent: true,
      },
      {
        source: '/reddit',
        destination: 'https://reddit.com/r/LongevityEssentials',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
