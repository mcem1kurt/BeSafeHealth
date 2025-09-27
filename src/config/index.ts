// Centralized Configuration
// Tüm environment variable'lar ve config bilgileri burada toplanır

export const config = {
  // Site Configuration
  site: {
    name: "Be Safe Health | Hair Transplant",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://besafehealth.com.tr",
    description: "Premium health tourism services in Turkey: hair transplant, dental, and aesthetic surgery with world-class doctors.",
    defaultLocale: "en",
    locales: ["en", "tr"],
  },

  // EmailJS Configuration
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_6ojrlr6',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_p3meurb',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'iyrbTK9bYf_fCaIMg'
  },

  // Google Services Configuration
  google: {
    places: {
      apiKey: process.env.GOOGLE_PLACES_API_KEY || '',
      placeId: process.env.GOOGLE_PLACE_ID || '',
    },
    analytics: {
      measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
    },
    tagManager: {
      containerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || '',
    }
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com/besafehealthtr",
    whatsapp: "https://wa.me/905079415087",
    whatsappNumber: "+905079415087",
  },

  // Contact Information
  contact: {
    phone: "+905079415087",
    email: "info@besafehealth.com.tr",
    address: "Mecidiyeköy Mah, Hark Sokak no2, Şişli/İstanbul, Türkiye",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0775616317346!2d28.993941776427366!3d41.06729721578819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab782fe5ee09b%3A0xd7107005d21edf78!2sBe%20Safe%20Health%20-%20Sa%C3%A7%20Ekimi%20-%20Sa%C4%9Fl%C4%B1k%20Turizmi!5e0!3m2!1str!2str!4v1756058170483!5m2!1str!2str"
  },
  
  // Partner Links
  partners: {
    goodlook: "https://goodlook.clinic/tr/",
    yuzuncuYil: "https://www.100yilhastanesi.com.tr/",
    elitIstanbul: "https://www.elitistanbul.com.tr/"
  },

  // Development Configuration
  development: {
    isDev: process.env.NODE_ENV === "development",
    reloadOnPrerender: process.env.NODE_ENV === "development",
  }
};

// Type exports
export type Config = typeof config;
export type SiteLocale = Config['site']['locales'][number];

// Individual config exports for backward compatibility
export const emailJSConfig = config.emailjs;
export const siteConfig = config.site;
export const googleConfig = config.google;
export const socialConfig = config.social;
export const contactConfig = config.contact;
export const partnersConfig = config.partners;
