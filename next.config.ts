const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-portfolio" : "",
  basePath: process.env.NODE_ENV === "production" ? "/my-portfolio" : "",
};

export default nextConfig;
