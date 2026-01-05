// import type { NextConfig } from "next";
// import nextI18NextConfig from "./next-i18next.config";

// const nextConfig: NextConfig = {
//   images: {
//     unoptimized: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   i18n: nextI18NextConfig.i18n,
//   assetPrefix: process.env.NODE_ENV === "production" ? "/my-portfolio/" : "",
//   basePath: process.env.NODE_ENV === "production" ? "/my-portfolio" : "",
// };

// export default nextConfig;
import type { NextConfig } from "next";
import nextI18NextConfig from "./next-i18next.config";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // disables next/image optimization
    loader: "akamai", // prevent default _next/image behavior
    path: "", // use relative paths
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: nextI18NextConfig.i18n,
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-portfolio" : "",
  basePath: process.env.NODE_ENV === "production" ? "/my-portfolio" : "",
};

export default nextConfig;
