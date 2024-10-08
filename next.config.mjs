/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "avatars.githubusercontent.com"
        },
        {
          protocol: "https",
          hostname: "cdn.discordapp.com"
        }
      ]
    },
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: 'https://cloudflareinsights.com',
              },
            ],
          },
        ]
      },
};

export default nextConfig;
