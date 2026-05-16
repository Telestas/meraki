import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // requerido en export estático (sin servidor Next.js)
  },
}

export default nextConfig
