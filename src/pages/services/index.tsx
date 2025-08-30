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
      <section id="top" className="relative bg-[#0b0b0b] py-8 border-b border-yellow-500/30">
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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("services.title")}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Hair Transplant */}
          <ServiceCard
            title={t("services.hair.title")}
            subtitle={t("services.hair.subtitle")}
            description={t("services.hair.description")}
            image="/images/services/hair-transplant.png"
            href="/services/hair-transplant"
            subServices={[
              { title: t("services.hair.fue.title"), description: t("services.hair.fue.description") },
              { title: t("services.hair.sapphire.title"), description: t("services.hair.sapphire.description") },
              { title: t("services.hair.dhi.title"), description: t("services.hair.dhi.description") },
              { title: t("services.hair.women.title"), description: t("services.hair.women.description") },
              { title: t("services.hair.beard.title"), description: t("services.hair.beard.description") }
            ]}
          />

          {/* Dental Treatments */}
          <ServiceCard
            title={t("services.dental.title")}
            subtitle={t("services.dental.subtitle")}
            description={t("services.dental.description")}
            image="/images/services/dental.jpg"
            href="/services/dental"
            subServices={[
              { title: t("services.dental.smile.title"), description: t("services.dental.smile.description") },
              { title: t("services.dental.laminate.title"), description: t("services.dental.laminate.description") },
              { title: t("services.dental.zirconium.title"), description: t("services.dental.zirconium.description") },
              { title: t("services.dental.implant.title"), description: t("services.dental.implant.description") },
              { title: t("services.dental.orthodontics.title"), description: t("services.dental.orthodontics.description") },
              { title: t("services.dental.whitening.title"), description: t("services.dental.whitening.description") }
            ]}
          />

          {/* Plastic Surgery */}
          <ServiceCard
            title={t("services.plastic.title")}
            subtitle={t("services.plastic.subtitle")}
            description={t("services.plastic.description")}
            image="/images/services/aesthetic.jpg"
            href="/services/plastic"
            subServices={[
              { title: t("services.plastic.rhinoplasty.title"), description: t("services.plastic.rhinoplasty.description") },
              { title: t("services.plastic.breastAugmentation.title"), description: t("services.plastic.breastAugmentation.description") },
              { title: t("services.plastic.breastReduction.title"), description: t("services.plastic.breastReduction.description") },
              { title: t("services.plastic.tummyTuck.title"), description: t("services.plastic.tummyTuck.description") },
              { title: t("services.plastic.armLift.title"), description: t("services.plastic.armLift.description") },
              { title: t("services.plastic.bbl.title"), description: t("services.plastic.bbl.description") },
              { title: t("services.plastic.neckLift.title"), description: t("services.plastic.neckLift.description") },
              { title: t("services.plastic.earSurgery.title"), description: t("services.plastic.earSurgery.description") }
            ]}
          />
        </div>



        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/20 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Sağlığınız İçin Hemen Harekete Geçin
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Uzman ekibimiz ve modern teknolojimizle size en iyi sağlık hizmetlerini sunuyoruz. 
              Ücretsiz danışmanlık için hemen iletişime geçin.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Ücretsiz Danışmanlık Al
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
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
