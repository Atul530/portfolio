/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const portfolioBasePath = '/portfolio'

const nextConfig = {
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  basePath: isProd ? portfolioBasePath : '',
  assetPrefix: isProd ? `${portfolioBasePath}/` : '',
  trailingSlash: true,
}

export default nextConfig