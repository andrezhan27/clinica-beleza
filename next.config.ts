import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  images: {
    localPatterns: [
      { pathname: "/images/**", search: "" },
      { pathname: "/images/treatments/*/category.webp" },
    ],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
