import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/me' : '',
  output: "export",
};

export default nextConfig;
