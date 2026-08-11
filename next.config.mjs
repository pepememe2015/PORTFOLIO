/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS ? '/PORTFOLIO' : '');

const nextConfig = {
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  }
}

export default nextConfig
