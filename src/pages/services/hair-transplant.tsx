import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function HairTransplantService() {
  const { t } = useTranslation("common");
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null);

  const procedures = [
    {
      id: "fue",
      title: "FUE",
      subtitle: "Follicular Unit Extraction",
      description: "Modern saç ekimi tekniği ile doğal ve kalıcı sonuçlar",
      image: "/images/services/FUE.png"
    },
    {
      id: "dhi",
      title: "DHI",
      subtitle: "Direct Hair Implantation",
      description: "Choi kalemleri ile hassas implantasyon",
      image: "/images/services/DHI.png"
    },
    {
      id: "sapphire",
      title: "Sapphire",
      subtitle: "Safir Bıçak Tekniği",
      description: "İnce kesiler ile doğal görünümlü saç çizgileri",
      image: "/images/services/sapphire.png"
    }
  ];

  const procedureDetails = {
    fue: {
      title: "FUE Saç Ekimi",
      description: "Modern saç ekimi teknikleri ile doğal ve kalıcı sonuçlar elde ediyoruz. FUE (Follicular Unit Extraction) tekniği ile saç kökleri tek tek alınarak, özel olarak hazırlanan kanallara yerleştirilir.",
      longDescription: [
        "FUE tekniği ile saç kökleri mikroskop altında tek tek alınır",
        "Minimal invaziv yöntem ile iz bırakmaz",
        "Doğal saç çizgisi tasarımı yapılır",
        "Hızlı iyileşme süreci",
        "Uzman doktor ekibi tarafından uygulanır"
      ],
      image: "/images/services/FUE.png"
    },
    dhi: {
      title: "DHI Saç Ekimi",
      description: "DHI (Direct Hair Implantation) tekniği, Choi kalemleri kullanılarak saç köklerinin doğrudan implantasyonu ile gerçekleştirilir. Bu yöntem daha hassas ve kontrollü sonuçlar sağlar.",
      longDescription: [
        "Choi kalemleri ile hassas implantasyon",
        "Daha az travma ve hızlı iyileşme",
        "Yüksek yoğunluklu saç ekimi",
        "Doğal görünüm ve yoğunluk",
        "Uzman cerrahi ekip"
      ],
      image: "/images/services/DHI.png"
    },
    sapphire: {
      title: "Sapphire Saç Ekimi",
      description: "Sapphire bıçak tekniği ile çok ince kesiler açılarak, doğal görünümlü saç çizgileri oluşturulur. Bu yöntem özellikle ön saç çizgisi tasarımında tercih edilir.",
      longDescription: [
        "Sapphire bıçaklar ile ince kesiler",
        "Doğal saç çizgisi tasarımı",
        "Minimal doku hasarı",
        "Hızlı iyileşme süreci",
        "Estetik sonuçlar"
      ],
      image: "/images/services/sapphire.png"
    }
  };

  if (selectedProcedure) {
    const detail = procedureDetails[selectedProcedure as keyof typeof procedureDetails];
    
    return (
      <div className="min-h-screen bg-[#0b0b0b]">
        {/* Large Logo Section - Above Navbar */}
        <section className="relative bg-[#0b0b0b] py-8 border-b border-white/10">
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
    
        {/* Back Button */}
        <div className="pt-8 px-4 sm:px-6 lg:px-8">
                  <button
          onClick={() => setSelectedProcedure(null)}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 mb-8 cursor-pointer"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
                         {t("backButton.hair")}
          </button>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 bg-[#0b0b0b]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold text-white mb-6">{detail.title}</h1>
              <p className="text-xl text-gray-300 hover:text-[var(--color-gold-400)] transition-colors duration-200 max-w-3xl mx-auto">{detail.description}</p>
            </motion.div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* First Row - Service Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>{detail.description}</p>
                  <ul className="space-y-2 text-gray-300">
                    {detail.longDescription.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-[var(--color-gold-500)] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* First Row - Service Photo */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={detail.image}
                    alt={detail.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </motion.div>
            </div>

            {/* Second Row - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-4xl mx-auto"
            >
                             <div className="text-center mb-8">
                 <h2 className="text-3xl font-bold text-white mb-4">{t("consultation.title")}</h2>
                 <p className="text-gray-300">{t("consultation.subtitle")} {detail.title}</p>
               </div>
              <ContactForm />
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                     <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-center mb-16"
           >
                           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-600)] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                {t("premium.hair")}
              </div>
             <h1 className="text-5xl font-bold text-white mb-6">{t("services.hair.title")}</h1>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("services.hair.subtitle")}</p>
           </motion.div>

          {/* Procedure Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((procedure, index) => (
              <motion.div
                key={procedure.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedProcedure(procedure.id)}
              >
                <div className="bg-gray-800/50 backdrop-blur rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-[0_32px_100px_-20px_rgba(0,0,0,0.4)] hover:bg-gray-800/95 group-hover:border-[var(--color-gold-500)] group-hover:ring-2 group-hover:ring-[var(--color-gold-500)]/20">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={procedure.image}
                      alt={procedure.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{procedure.title}</h3>
                    <p className="text-lg text-[var(--color-gold-500)] font-semibold mb-3">{procedure.subtitle}</p>
                    <p className="text-gray-300 mb-4">{procedure.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 group-hover:text-[var(--color-gold-500)] transition-colors duration-300">
                      <span className="font-medium group-hover:text-[var(--color-gold-500)]">Detayları Gör</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-gold-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
