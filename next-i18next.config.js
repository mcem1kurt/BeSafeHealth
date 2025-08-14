module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
    localePath: "public/locales",
    defaultNS: "common",
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
