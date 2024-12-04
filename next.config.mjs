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
      },
      {
        source: '/docs',
        destination: 'https://varga.notion.site/Brogevity-AI-Public-API-1479b7e6f3868092adfed97415b484bd?pvs=4',
        permanent: true
      },
      {
        source: '/apicall',
        destination: 'https://calendly.com/alexmsecurity/call',
        permanent: true
      }
    ];
  },
};

export default nextConfig;
