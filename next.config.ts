import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "besafehealth.com.tr" },
      { protocol: "https", hostname: "www.besafehealth.com.tr" }
    ],
  },
};

export default nextConfig;
