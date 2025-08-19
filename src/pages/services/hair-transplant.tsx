import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Clock, Users, Award, Shield } from "lucide-react";

export default function HairTransplantPage() {
  const { t } = useTranslation("common");
  
  const hairServices = [
    {
      title: t("services.hair.fue.title"),
      description: t("services.hair.fue.description"),
      features: ["Minimal invaziv", "Hızlı iyileşme", "Doğal sonuçlar", "Az iz"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: t("services.hair.sapphire.title"),
      description: t("services.hair.sapphire.description"),
      features: ["Safir bıçaklar", "Hassas kesim", "Daha az travma", "Hızlı iyileşme"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: t("services.hair.dhi.title"),
      description: t("services.hair.dhi.description"),
      features: ["Maksimum yoğunluk", "Doğal görünüm", "Direkt yerleştirme", "Yüksek başarı"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: t("services.hair.women.title"),
      description: t("services.hair.women.description"),
      features: ["Kadına özel teknikler", "İnce saç korunması", "Doğal sonuçlar", "Uzman ekip"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center"
    },
    {
      title: t("services.hair.beard.title"),
      description: t("services.hair.beard.description"),
      features: ["Sakal ve bıyık", "Doğal görünüm", "Özel teknikler", "Kalıcı sonuçlar"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center"
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Uzman Ekip",
      description: "Deneyimli saç ekimi uzmanları ile çalışıyoruz"
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: "Güvenli Tedavi",
      description: "En son teknoloji ve steril ortamda tedavi"
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      title: "Hızlı İyileşme",
      description: "Minimal invaziv teknikler ile hızlı toparlanma"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Kişisel Bakım",
      description: "Her hasta için özel tedavi planı"
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
              {t("services.hair.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {t("services.hair.description")}
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Uzman Saç Ekimi Hizmetleri</span>
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
            <h2 className="text-3xl font-bold text-white mb-4">Saç Ekimi Tekniklerimiz</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Modern teknoloji ve uzman ekibimizle her hasta için en uygun tekniği seçiyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hairServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
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
              Saç Ekimi İçin Hemen Başlayın
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Uzman ekibimizle görüşerek size en uygun saç ekimi tekniğini belirleyelim. 
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
