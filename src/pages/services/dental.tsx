import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Clock, Award, Shield, Smile } from "lucide-react";

export default function DentalPage() {
  const { t } = useTranslation("common");
  
  const dentalServices = [
    {
      title: t("services.dental.smile.title"),
      description: t("services.dental.smile.description"),
      features: ["Gülüş analizi", "Kişiye özel tasarım", "Doğal sonuçlar", "Uyumlu görünüm"],
      image: "/images/services/dental.jpg"
    },
    {
      title: t("services.dental.laminate.title"),
      description: t("services.dental.laminate.description"),
      features: ["İnce porselen", "Ön yüzey kaplama", "Mükemmel gülüş", "Estetik sonuçlar"],
      image: "/images/services/Lamine-Veneer.png"
    },
    {
      title: t("services.dental.zirconium.title"),
      description: t("services.dental.zirconium.description"),
      features: ["Dayanıklı materyal", "Doğal görünüm", "Uzun ömürlü", "Yüksek kalite"],
      image: "/images/services/zirconium.png"
    },
    {
      title: t("services.dental.implant.title"),
      description: t("services.dental.implant.description"),
      features: ["Modern teknoloji", "Doğal görünüm", "Fonksiyonel", "Kalıcı çözüm"],
      image: "/images/services/implant.png"
    },
    {
      title: t("services.dental.orthodontics.title"),
      description: t("services.dental.orthodontics.description"),
      features: ["Çapraşık düzeltme", "Estetik dizilim", "Sağlıklı dişler", "Profesyonel tedavi"],
      image: "/images/services/orthodontics.png"
    },
    {
      title: t("services.dental.whitening.title"),
      description: t("services.dental.whitening.description"),
      features: ["Profesyonel teknik", "Parlak gülüş", "Beyaz dişler", "Hızlı sonuç"],
      image: "/images/services/teeth-whitening.png"
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Uzman Diş Hekimleri",
      description: "Deneyimli ve uzman diş hekimleri ile çalışıyoruz"
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: "Modern Teknoloji",
      description: "En son diş hekimliği teknolojilerini kullanıyoruz"
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      title: "Hızlı Tedavi",
      description: "Etkili ve hızlı tedavi süreçleri"
    },
    {
      icon: <Smile className="w-8 h-8 text-yellow-400" />,
      title: "Estetik Sonuçlar",
      description: "Doğal ve estetik gülüş tasarımı"
    }
  ];

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("services.dental.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {t("services.dental.description")}
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30">
              <Smile className="w-5 h-5" />
              <span className="font-medium">Profesyonel Diş Tedavileri</span>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl border border-gray-700 bg-gray-800/50 hover:border-yellow-500/30 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Diş Tedavi Hizmetlerimiz</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Modern teknoloji ve uzman ekibimizle gülüşünüzü mükemmelleştiriyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dentalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-2xl border border-gray-700 bg-gray-800/50 overflow-hidden hover:border-yellow-500/30 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200 font-medium"
                  >
                    Ücretsiz Danışmanlık Al
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/20 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Gülüşünüzü Yenileyin
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Uzman diş hekimlerimizle görüşerek size en uygun tedavi planını belirleyelim. 
              Ücretsiz danışmanlık için hemen iletişime geçin.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Ücretsiz Danışmanlık Al
              <CheckCircle2 className="w-5 h-5" />
            </Link>
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
