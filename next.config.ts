import type { NextConfig } from "next";
import nextI18NextConfig from "./next-i18next.config";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Important for GitHub Pages
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: nextI18NextConfig.i18n,
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-portfolio/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/my-portfolio" : "",
};

export default nextConfig;
