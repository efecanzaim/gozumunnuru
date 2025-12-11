import type { NextConfig } from "next";

// Site kökte (/) yayınlandığı için basePath/assetPrefix boş bırakıyoruz.
// Görseller CDN'den geldiği için assetPrefix'e gerek yok.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.gozumunnuru.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gozumunnuru.com",
        pathname: "/**",
      },
    ],
  },
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
