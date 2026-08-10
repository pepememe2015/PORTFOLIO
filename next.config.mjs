// Trigger GitHub Actions build
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PORTFOLIO',
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

