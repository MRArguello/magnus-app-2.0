import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Match .svg files
      use: ["@svgr/webpack"], // Use @svgr/webpack to handle SVGs
    });
    return config;
  },
};

export default nextConfig;