import type { NextConfig } from "next";

const nextConfig: NextConfig = {
      // Handle pdf-parse and other CommonJS packages
      serverExternalPackages: ['pdf-parse'],

      // Enable Turbopack (Next.js 16 default)
      turbopack: {},
};

export default nextConfig;
