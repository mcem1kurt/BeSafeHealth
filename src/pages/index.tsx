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
import { useState } from "react";

export default function Home() {
  const { t } = useTranslation("common");
  const [showChatForm, setShowChatForm] = useState(false);

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
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-transparent"
      >
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-600)] text-white px-4 sm:px-6 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            {t("premium.services")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("services.title")}</h2>
          <p className="text-lg sm:text-xl text-gray-300 hover:text-[var(--color-gold-400)] transition-colors duration-200 max-w-3xl mx-auto">{t("services.description")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <ServiceCard title={t("services.hair.title")} href="/services/hair-transplant" imageSrc="/images/services/hair-transplant.jpg" />
          <ServiceCard title={t("services.dental.title")} href="/services/dental" imageSrc="/images/services/dental.jpg" />
          <ServiceCard title={t("services.aesthetic.title")} href="/services/aesthetic" imageSrc="/images/services/aesthetic.jpg" />
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/services" className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-600)] hover:from-[var(--color-gold-600)] hover:to-[var(--color-gold-700)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_20px_60px_-10px_rgba(251,191,36,0.4)] hover:scale-105">
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

      {/* Fixed WhatsApp Button - Bottom Right */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3">
        {/* Chat Button */}
        <button
          onClick={() => setShowChatForm(true)}
          className="group relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0_8px_32px_-8px_rgba(59,130,246,0.5)] hover:shadow-[0_12px_40px_-8px_rgba(59,130,246,0.6)] hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label={t("chatForm.title")}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/905555555555"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-green-500 to-green-700 text-white shadow-[0_8px_32px_-8px_rgba(34,197,94,0.5)] hover:shadow-[0_12px_40px_-8px_rgba(34,197,94,0.6)] hover:scale-110 transition-all duration-300"
          aria-label="WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>

      {/* Live Support Chat Popup */}
      {showChatForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/30"
            onClick={() => setShowChatForm(false)}
          />
          
          {/* Chat Popup */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-white">{t("chatForm.title")}</h3>
              </div>
              <button
                onClick={() => setShowChatForm(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Form Content */}
            <div className="p-6">
              <p className="text-gray-300 mb-6 text-sm">{t("chatForm.subtitle")}</p>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={t("chatForm.namePlaceholder")}
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <input
                  type="email"
                  placeholder={t("chatForm.emailPlaceholder")}
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <textarea
                  placeholder={t("chatForm.messagePlaceholder")}
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  {t("chatForm.sendButton")}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}

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
