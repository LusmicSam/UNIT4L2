import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/UNIT4L2",
  assetPrefix: "/UNIT4L2",
};

export default nextConfig;
