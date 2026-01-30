import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Handle pdf-parse and other CommonJS packages
    serverExternalPackages: ['pdf-parse'],

    // Webpack configuration for CommonJS compatibility
    webpack: (config) => {
          config.resolve.fallback = {
                  ...config.resolve.fallback,
                  fs: false,
          };
          return config;
    },
};

export default nextConfig;
