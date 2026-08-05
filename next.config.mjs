/**
 * Berry Optics — Deployment Configuration
 *
 * Two automated deployment paths are supported:
 *
 * A) CloudStudio (WorkBuddy one-click deploy)
 *    - Build: npm run build:static
 *    - Deploy: WorkBuddy cloudstudio_deploy tool, pointing to ./out
 *    - No manual server setup, no SSL configuration needed
 *    - Returns public URL immediately
 *
 * B) Vercel (Git push → auto-deploy)
 *    - Push to GitHub → Vercel auto-builds + deploys
 *    - Free tier includes SSL, CDN, custom domain
 *    - Supports Next.js API routes (server-side)
 *
 * For static export (CloudStudio), the AI assistant calls
 * Hermes directly from the client side using NEXT_PUBLIC_HERMES_URL.
 * For Vercel deployment, the API route at /api/ai handles the proxy.
 */

/** @type {import('next').NextConfig} */
const isStaticExport = process.env.BUILD_STATIC === 'true';

const nextConfig = {
  reactStrictMode: true,
  // Enable static export for CloudStudio deployment
  ...(isStaticExport && { output: 'export' }),
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  images: {
    formats: ['image/avif', 'image/webp'],
    // For static export, use unoptimized images
    ...(isStaticExport && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['three', '@react-three/drei'],
  },
};

export default nextConfig;
