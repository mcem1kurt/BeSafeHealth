# Be Safe Health Tourism Website

Bu proje [Next.js](https://nextjs.org) kullanılarak geliştirilmiş bir sağlık turizmi web sitesidir.

## 🚀 Kurulum

### 1. Environment Variables

Projeyi çalıştırmadan önce `.env.local` dosyası oluşturun:

```bash
# .env.local dosyası oluşturun
touch .env.local
```

`.env.local` dosyasına gerekli bilgileri ekleyin:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://besafehealth.com.tr

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here

# Google Services
GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
GOOGLE_PLACE_ID=your_google_place_id_here

# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager (Optional)
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX
```

### Environment Variables Açıklaması:

- **NEXT_PUBLIC_***: Client-side'da erişilebilir (public)
- **GOOGLE_PLACES_API_KEY**: Google Places API için gerekli
- **GOOGLE_PLACE_ID**: Be Safe Health'in Google Places ID'si
- **EmailJS**: Form gönderimi için gerekli
- **Analytics**: İsteğe bağlı tracking için

### 2. Development Server

Geliştirme sunucusunu başlatın:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📧 EmailJS Kurulumu

Bu proje form gönderimi için EmailJS kullanır. Kurulum için:

1. [EmailJS](https://www.emailjs.com) hesabı oluşturun
2. Email Service ekleyin (Gmail, Outlook, vs.)
3. Email Template oluşturun
4. API Keys > Public Key alın
5. `.env.local` dosyasına bilgileri ekleyin

## 🔧 Configuration Kullanımı

Proje artık merkezi config sistemi kullanır:

```typescript
import { config, siteConfig, emailJSConfig, googleConfig } from '../config';

// Site bilgileri
console.log(config.site.name); // "Be Safe Health"
console.log(config.site.url); // "https://besafehealth.com.tr"

// EmailJS config
console.log(config.emailjs.serviceId); // EmailJS service ID

// Google config
console.log(config.google.places.apiKey); // Google Places API key
```

## 📚 Daha Fazla Bilgi

Next.js hakkında daha fazla bilgi için:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js özellikleri ve API'si
- [Learn Next.js](https://nextjs.org/learn-pages-router) - İnteraktif Next.js tutorial'ı

[Next.js GitHub repository](https://github.com/vercel/next.js)'sini inceleyebilirsiniz.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
