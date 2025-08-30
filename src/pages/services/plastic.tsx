import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Clock, Award, Shield, Heart } from "lucide-react";

export default function PlasticSurgeryPage() {
  const { t } = useTranslation("common");
  
  const plasticServices = [
    {
      title: t("services.plastic.rhinoplasty.title"),
      description: t("services.plastic.rhinoplasty.description"),
      features: t("plasticServices.rhinoplasty.features", { returnObjects: true }) as string[],
      image: "/images/services/rhinoplasty.png"
    },
    {
      title: t("services.plastic.breastAugmentation.title"),
      description: t("services.plastic.breastAugmentation.description"),
      features: t("plasticServices.breastAugmentation.features", { returnObjects: true }) as string[],
      image: "/images/services/meme-buyutme.png"
    },
    {
      title: t("services.plastic.breastReduction.title"),
      description: t("services.plastic.breastReduction.description"),
      features: t("plasticServices.breastReduction.features", { returnObjects: true }) as string[],
      image: "/images/services/meme-kucultme.png"
    },
    {
      title: t("services.plastic.tummyTuck.title"),
      description: t("services.plastic.tummyTuck.description"),
      features: t("plasticServices.tummyTuck.features", { returnObjects: true }) as string[],
      image: "/images/services/karın-germe.png"
    },
    {
      title: t("services.plastic.armLift.title"),
      description: t("services.plastic.armLift.description"),
      features: t("plasticServices.armLift.features", { returnObjects: true }) as string[],
      image: "/images/services/kol-germe.png"
    },
    {
      title: t("services.plastic.bbl.title"),
      description: t("services.plastic.bbl.description"),
      features: t("plasticServices.bbl.features", { returnObjects: true }) as string[],
      image: "/images/services/BBL.png"
    },
    {
      title: t("services.plastic.neckLift.title"),
      description: t("services.plastic.neckLift.description"),
      features: t("plasticServices.neckLift.features", { returnObjects: true }) as string[],
      image: "/images/services/boyun-germe.png"
    },
    {
      title: t("services.plastic.earSurgery.title"),
      description: t("services.plastic.earSurgery.description"),
      features: t("plasticServices.earSurgery.features", { returnObjects: true }) as string[],
      image: "/images/services/kepce-kulak.png"
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: t("benefits.plastic.expertSurgeons.title"),
      description: t("benefits.plastic.expertSurgeons.description")
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: t("benefits.plastic.safeSurgery.title"),
      description: t("benefits.plastic.safeSurgery.description")
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      title: t("benefits.plastic.fastRecovery.title"),
      description: t("benefits.plastic.fastRecovery.description")
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-400" />,
      title: t("benefits.plastic.naturalResults.title"),
      description: t("benefits.plastic.naturalResults.description")
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
              {t("services.plastic.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {t("services.plastic.description")}
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30">
              <Heart className="w-5 h-5" />
              <span className="font-medium">{t("pageHeaders.plastic.safeAesthetic")}</span>
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
            <h2 className="text-3xl font-bold text-white mb-4">{t("serviceSections.plastic.title")}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t("serviceSections.plastic.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plasticServices.map((service, index) => (
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
                    {t("cta.freeConsultation")}
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
              {t("cta.plastic.title")}
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {t("cta.plastic.subtitle")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              {t("cta.freeConsultation")}
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
