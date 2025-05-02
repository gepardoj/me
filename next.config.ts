import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/me' : '',
  output: "export",
  experimental: {
    optimizeServerReact: true, // Reduces React server footprint
    clientRouterFilter: true, // Removes unused client components
  },
};

export default nextConfig;
