import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "enala.sa",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
