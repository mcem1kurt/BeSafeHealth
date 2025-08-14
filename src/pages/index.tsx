import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import PartnersMarquee from "@/components/PartnersMarquee";
import { motion } from "framer-motion";
import StepsTimeline from "@/components/StepsTimeline";
import GoogleReviews from "@/components/GoogleReviews";
import BeforeAfter from "@/components/BeforeAfter";
import FAQ from "@/components/FAQ";
import NotificationBadge from "@/components/NotificationBadge";

export default function Home() {
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
      <HeroSection />

      {/* Before & After */}
      <BeforeAfter />

      {/* Services section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 bg-transparent"
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-600)] text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            {t("premium.services")}
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{t("services.title")}</h2>
          <p className="text-xl text-gray-300 hover:text-[var(--color-gold-400)] transition-colors duration-200 max-w-3xl mx-auto">{t("services.description")}</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard title={t("services.hair.title")} href="/services/hair-transplant" imageSrc="/images/services/hair-transplant.jpg" />
          <ServiceCard title={t("services.dental.title")} href="/services/dental" imageSrc="/images/services/dental.jpg" />
          <ServiceCard title={t("services.aesthetic.title")} href="/services/aesthetic" imageSrc="/images/services/aesthetic.jpg" />
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-600)] hover:from-[var(--color-gold-600)] hover:to-[var(--color-gold-700)] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_20px_60px_-10px_rgba(251,191,36,0.4)] hover:scale-105">
            {t("cta.viewAllServices")}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </motion.section>

      

      {/* Steps */}
      <StepsTimeline />

      {/* Reviews */}
      <GoogleReviews />

      {/* FAQ */}
      <FAQ />

      {/* Partners marquee */}
      <PartnersMarquee />
      
              <div className="fixed bottom-6 left-6 z-40">
          <a
            href="https://wa.me/905079415087"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="whatsapp-fab"
          >
            <div className="relative ">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur-lg opacity-30 animate-pulse z-10"></div>
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-16 h-16 transition-all duration-300 hover:scale-110 relative z-10" />
            </div>
          </a>
          <NotificationBadge 
            delay={5} 
            initialNumber={1} 
          />
        </div>

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
