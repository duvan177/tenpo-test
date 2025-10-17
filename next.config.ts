import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.dummyjson.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
