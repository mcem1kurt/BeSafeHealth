import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Camera, Calendar, Plane, HeartPulse, Stethoscope, MonitorCheck } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function StepsTimeline() {
  const { t } = useTranslation("common");
  const router = useRouter();

  const steps = [
    {
      id: 1,
      title: t("journey.steps.step1.title"),
      desc: t("journey.steps.step1.desc"),
      icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 2,
      title: t("journey.steps.step2.title"),
      desc: t("journey.steps.step2.desc"),
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 3,
      title: t("journey.steps.step3.title"),
      desc: t("journey.steps.step3.desc"),
      icon: <Plane className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 4,
      title: t("journey.steps.step4.title"),
      desc: t("journey.steps.step4.desc"),
      icon: <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 5,
      title: t("journey.steps.step5.title"),
      desc: t("journey.steps.step5.desc"),
      icon: <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 6,
      title: t("journey.steps.step6.title"),
      desc: t("journey.steps.step6.desc"),
      icon: <MonitorCheck className="w-5 h-5 sm:w-6 sm:h-6" />
    },
  ];

  const handleCta = () => {
    router.push({ pathname: "/contact" }, undefined, { locale: router.locale });
  };

  return (
    <section className="relative w-full bg-transparent text-white py-12 sm:py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-40 h-96 w-96 rounded-full blur-3xl opacity-20 bg-yellow-400" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl opacity-20 bg-orange-400" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {t("journey.title")}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mt-2 font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600">
            {t("journey.subtitle")}
          </p>
        </motion.div>

        {/* Mobile-First Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600" />
          
          {/* Steps */}
          <div className="space-y-0 sm:space-y-8 md:space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Mobile Layout - Icon then Card alternating */}
                <div className="sm:hidden">
                  {/* Step Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-700 text-gray-800 border-2 border-yellow-300 shadow-[0_8px_20px_-6px_rgba(234,179,8,0.4)]">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    className="w-full max-w-sm mx-auto rounded-2xl border border-gray-700 bg-gray-800/90 backdrop-blur-xl p-4 shadow-[0_16px_60px_-20px_rgba(0,0,0,0.3)] hover:shadow-[0_24px_80px_-20px_rgba(0,0,0,0.4)] hover:border-gray-600 hover:bg-gray-800/95 transition-all duration-300 cursor-pointer mb-8"
                  >
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <span className="text-sm font-medium text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                        {t("journey.step")} {step.id}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-300 text-center">{step.desc}</p>
                  </motion.div>
                </div>

                {/* Desktop Layout - Side by side with timeline */}
                <div className="hidden sm:flex items-start gap-6">
                  {/* Step Icon */}
                  <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-700 text-gray-800 border-2 border-yellow-300 shadow-[0_8px_20px_-6px_rgba(234,179,8,0.4)] flex-shrink-0">
                    {step.icon}
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 min-w-0">
                    <motion.div
                      whileHover={{ 
                        scale: 1.02, 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      className="rounded-2xl border border-gray-700 bg-gray-800/90 backdrop-blur-xl p-5 lg:p-6 shadow-[0_16px_60px_-20px_rgba(0,0,0,0.3)] hover:shadow-[0_24px_80px_-20px_rgba(0,0,0,0.4)] hover:border-gray-600 hover:bg-gray-800/95 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full">
                          {t("journey.step")} {step.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-base leading-relaxed text-gray-300">{step.desc}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 sm:mt-16 max-w-2xl rounded-2xl border border-gray-700 bg-gray-800/80 backdrop-blur-xl p-4 sm:p-5 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-lg font-semibold text-white">
                {t("journey.cta.title")}
              </p>
              <p className="text-sm text-gray-300">
                {t("journey.cta.subtitle")}
              </p>
            </div>
            <button
              onClick={handleCta}
              className="inline-flex items-center gap-2 rounded-xl px-4 sm:px-5 py-3 font-semibold text-white 
                         bg-gradient-to-b from-yellow-400 to-yellow-700 border border-orange-400/60 
                         shadow-[0_20px_60px_-16px_rgba(251,146,60,0.45)] hover:translate-y-[-1px] transition-all duration-300 hover:shadow-[0_25px_70px_-20px_rgba(251,146,60,0.6)] cursor-pointer"
            >
              {t("journey.cta.button")}
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
