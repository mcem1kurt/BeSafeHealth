/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr", "it", "sq"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
