import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/UNIT4L2" : undefined,
  assetPrefix: isProd ? "/UNIT4L2" : undefined,
};

export default nextConfig;
