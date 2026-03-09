import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  ...(isProd && {
    basePath: "/practical-ai-stack",
    assetPrefix: "/practical-ai-stack/",
  }),
};

export default nextConfig;
