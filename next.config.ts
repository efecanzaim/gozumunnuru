import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/gozumunnuru",
  assetPrefix: "/gozumunnuru",
};

export default nextConfig;
