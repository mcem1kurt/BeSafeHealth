import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h1 className="text-3xl font-bold text-white">{t("agency.title")}</h1>
          <p className="mt-3 text-gray-300 max-w-3xl">{t("agency.paragraph1")}</p>
          <p className="mt-3 text-gray-300 max-w-3xl">{t("agency.paragraph2")}</p>
          <p className="mt-3 text-gray-300 max-w-3xl">{t("agency.paragraph3")}</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-white">{t("aboutExtra.valuesTitle")}</h2>
          <ul className="mt-3 grid sm:grid-cols-2 gap-4 text-gray-300">
            <li className="rounded-xl text-gray-300 border border-white/10 p-5">{t("aboutExtra.values.patient_first")}</li>
            <li className="rounded-xl text-gray-300 border border-white/10 p-5">{t("aboutExtra.values.transparent_pricing")}</li>
            <li className="rounded-xl text-gray-300 border border-white/10 p-5">{t("aboutExtra.values.world_class")}</li>
            <li className="rounded-xl text-gray-300 border border-white/10 p-5">{t("aboutExtra.values.coordination")}</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl text-white font-semibold">{t("aboutExtra.teamTitle")}</h2>
          <p className="mt-3 text-gray-300 max-w-3xl">{t("aboutExtra.teamDesc")}</p>
        </section>
        <section>
          <h2 className="text-2xl text-white font-semibold">{t("aboutExtra.tourismTitle")}</h2>
          <p className="mt-3 text-gray-300 max-w-3xl">{t("aboutExtra.tourismDesc")}</p>
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
