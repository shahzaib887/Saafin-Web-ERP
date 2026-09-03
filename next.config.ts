import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // add iamge kit url

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/mmyzvdovbv/**",
      },
    ],
  },
};

export default nextConfig;
