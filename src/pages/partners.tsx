import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnersPage() {
  const { t } = useTranslation("common");

  const partners = [
    { name: "GoodLook", src: "/images/partners/goodlook.png", href: "https://goodlook.clinic/tr/" },
    { name: "100. Yıl Hastanesi", src: "/images/partners/yuzuncu-yil.png", href: "https://www.100yilhastanesi.com.tr/" },
    { name: "Elit Istanbul Tıp Merkezi", src: "/images/partners/elit-istanbul.png", href: "https://www.elitistanbul.com.tr/" },
  ];

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">{t("partners.title", "Anlaşmalı Kurumlar")}</h1>
        <p className="text-gray-400 mt-2">
          {t(
            "partners.subtitle",
            "Güvenilir çözüm ortaklarımız ile birlikte en kaliteli sağlık hizmetlerini sunuyoruz."
          )}
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 items-stretch">
          {partners.map((p, i) => (
            <motion.a
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group rounded-2xl border border-white/10 bg-white/[0.04] hover:border-[var(--color-gold-400)] hover:bg-white/[0.07] shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10 flex items-center justify-center"
            >
              {/* Local images must exist under public/images/partners */}
              <Image
                src={p.src}
                alt={p.name}
                width={440}
                height={140}
                className="logo-unify h-28 transition-transform duration-300 group-hover:scale-105"
              />
            </motion.a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
