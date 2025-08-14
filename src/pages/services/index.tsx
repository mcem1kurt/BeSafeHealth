import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
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
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold">{t("navbar.services")}</h1>
        <p className="text-gray-300 mt-2 max-w-2xl">{t("servicesPage.descriptions.title")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <ServiceCard title={t("services.hair.title")} href="/services/hair-transplant" desc={t("servicesPage.descriptions.hair")} imageSrc="/images/services/hair-transplant.jpg" />
          <ServiceCard title={t("services.dental.title")} href="/services/dental" desc={t("servicesPage.descriptions.dental")} imageSrc="/images/services/dental.jpg" />
          <ServiceCard title={t("services.aesthetic.title")} href="/services/aesthetic" desc={t("servicesPage.descriptions.aesthetic")} imageSrc="/images/services/aesthetic.jpg" />
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
