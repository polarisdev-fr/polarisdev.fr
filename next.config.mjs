/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['avatars.githubusercontent.com'],
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
