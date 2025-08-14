import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function DentalService() {
  const { t } = useTranslation("common");
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null);

  const procedures = [
    {
      id: "implants",
      title: "İmplant",
      subtitle: "Dental Implant",
      description: "Eksik dişler için kalıcı ve doğal çözüm",
      image: "/images/services/implant.png"
    },
    {
      id: "zirconium",
      title: "Zirkonyum",
      subtitle: "Zirconium Crowns",
      description: "Doğal görünümlü zirkonyum kaplamalar",
      image: "/images/services/zirconium.png"
    },
    {
      id: "orthodontics",
      title: "Ortodonti",
      subtitle: "Orthodontics",
      description: "Diş ve çene düzensizliklerinin tedavisi",
      image: "/images/services/orthodontics.png"
    },
    {
      id: "whitening",
      title: "Beyazlatma",
      subtitle: "Teeth Whitening",
      description: "Profesyonel diş beyazlatma işlemi",
      image: "/images/services/teeth-whitening.png"
    }
  ];

  const procedureDetails = {
    implants: {
      title: "Dental İmplant",
      description: "Modern implant teknolojileri ile eksik dişlerinizi kalıcı ve doğal bir şekilde tamamlıyoruz. İmplant tedavisi, çene kemiğine yerleştirilen titanyum vidalar ile yapay diş kökleri oluşturur.",
      longDescription: [
        "Titanyum implantlar ile güçlü yapı",
        "Doğal diş görünümü ve fonksiyonu",
        "Uzun ömürlü ve dayanıklı sonuçlar",
        "Uzman implantologlar tarafından uygulanır",
        "Hızlı iyileşme süreci"
      ],
      image: "/images/services/implant.png"
    },
    zirconium: {
      title: "Zirkonyum Kaplamalar",
      description: "Zirkonyum kaplamalar ile doğal görünümlü ve dayanıklı diş restorasyonları yapıyoruz. Metal içermeyen bu yöntem, estetik ve fonksiyonel sonuçlar sağlar.",
      longDescription: [
        "Metal içermeyen doğal görünüm",
        "Yüksek dayanıklılık ve uzun ömür",
        "Işık geçirgenliği ile doğal görünüm",
        "Alerji riski yok",
        "Estetik ve fonksiyonel sonuçlar"
      ],
      image: "/images/services/zirconium.png"
    },
    orthodontics: {
      title: "Ortodonti Tedavisi",
      description: "Ortodonti tedavisi ile diş ve çene düzensizliklerini düzeltiyoruz. Modern ortodontik yöntemler ile estetik ve sağlıklı bir gülümseme elde edilir.",
      longDescription: [
        "Şeffaf plaklar ile görünmez tedavi",
        "Metal ve seramik braket seçenekleri",
        "Çene düzensizliklerinin tedavisi",
        "Kişiselleştirilmiş tedavi planları",
        "Uzman ortodontistler"
      ],
      image: "/images/services/orthodontics.png"
    },
    whitening: {
      title: "Diş Beyazlatma",
      description: "Profesyonel diş beyazlatma işlemi ile daha parlak ve beyaz dişlere sahip olun. Güvenli ve etkili yöntemlerle doğal gülümsemenizi öne çıkarın.",
      longDescription: [
        "Profesyonel ofis beyazlatması",
        "Ev beyazlatma kitleri",
        "Güvenli ve etkili sonuçlar",
        "Hızlı ve ağrısız işlem",
        "Uzun süreli beyazlık"
      ],
      image: "/images/services/teeth-whitening.png"
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
                         {t("backButton.dental")}
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{detail.description}</p>
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
                {t("premium.dental")}
              </div>
             <h1 className="text-5xl font-bold text-white mb-6">{t("services.dental.title")}</h1>
             <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("services.dental.subtitle")}</p>
           </motion.div>

          {/* Procedure Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
