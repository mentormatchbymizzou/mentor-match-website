import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // basePath:
  //   process.env.NODE_ENV === "production" ? "/mentor-match-website" : "",
  // assetPrefix:
  //   process.env.NODE_ENV === "production" ? "/mentor-match-website/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
