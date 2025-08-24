import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { contactConfig } from "@/config";

export default function ContactPage() {
  const { t } = useTranslation("common");
  return (
    <div>
      {/* Large Logo Section - Above Navbar */}
      <section id="top" className="relative bg-[#0b0b0b] py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Link href="/" className="cursor-pointer">
              <Image 
                src="/images/logo-besafe-dark.png" 
                alt="Be Safe Health" 
                width={320} 
                height={80} 
                priority 
                className="h-20 w-auto hover:scale-105 transition-transform duration-300" 
              />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
        <section>
          <h1 className="text-3xl font-bold">{t("contact.title")}</h1>
          <p className="mt-2 text-white/90">{t("contact.subtitle")}</p>
          <div className="mt-6 space-y-3 text-gray-300">
            <div className="flex items-center gap-2"><Phone size={16} /> {t("footer.phone")}</div>
            <div className="flex items-center gap-2"><Mail size={16} /> {t("footer.email")}</div>
            <div className="relative inline-block">
              <a href="https://wa.me/905079415087" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-4 py-2 border border-white/10 hover:border-[var(--color-gold-400)]">
                <MessageCircle size={16} /> {t("contact.whatsapp")}
              </a>

            </div>
          </div>
          <div className="mt-8">
            <ContactForm />
          </div>
        </section>
        <section>
          <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
            <iframe
              title={t("contact.title")}
              src={contactConfig.googleMapsUrl}
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </section>
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
