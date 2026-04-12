/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/resume.pdf',
        destination: '/updated_resume.pdf',
      },
    ];
  },
}

module.exports = nextConfig
