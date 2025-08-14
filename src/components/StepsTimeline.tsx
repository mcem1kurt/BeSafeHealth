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
      icon: <Camera className="size-6" />
    },
    {
      id: 2,
      title: t("journey.steps.step2.title"),
      desc: t("journey.steps.step2.desc"),
      icon: <Calendar className="size-6" />
    },
    {
      id: 3,
      title: t("journey.steps.step3.title"),
      desc: t("journey.steps.step3.desc"),
      icon: <Plane className="size-6" />
    },
    {
      id: 4,
      title: t("journey.steps.step4.title"),
      desc: t("journey.steps.step4.desc"),
      icon: <HeartPulse className="size-6" />
    },
    {
      id: 5,
      title: t("journey.steps.step5.title"),
      desc: t("journey.steps.step5.desc"),
      icon: <Stethoscope className="size-6" />
    },
    {
      id: 6,
      title: t("journey.steps.step6.title"),
      desc: t("journey.steps.step6.desc"),
      icon: <MonitorCheck className="size-6" />
    },
  ];

  const handleCta = () => {
    router.push({ pathname: "/contact" }, undefined, { locale: router.locale });
  };

  return (
    <section className="relative min-h-[90vh] w-full bg-transparent text-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-40 h-96 w-96 rounded-full blur-3xl opacity-20 bg-yellow-400" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl opacity-20 bg-orange-400" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 "
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {t("journey.title")}
          </h2>
          <p className="text-xl md:text-2xl mt-2 font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600">
            {t("journey.subtitle")}
          </p>
        </motion.div>

        <div className="relative mx-auto flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-16">
          {steps.map((s, i) => (
            <div key={s.id} className={`contents`}>
              <div className={`flex justify-end items-center ${i % 2 === 0 ? 'md:pr-8' : 'md:pr-8 invisible md:visible'}`}>
                {i % 2 === 0 && <StepCard step={s} side="left" />}
              </div>

              <div className="flex flex-col items-center">
                <div className="w-[2px] flex-1 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600" />
                <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-700 text-gray-800 border border-yellow-400/70 shadow-[0_10px_24px_-8px_rgba(234,179,8,0.3)] my-4 md:my-6">
                  {s.icon}
                </div>
                <div className="w-[2px] flex-1 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600" />
              </div>

              <div className={`flex justify-start items-center ${i % 2 === 1 ? 'md:pl-8' : 'md:pl-8 invisible md:visible'}`}>
                {i % 2 === 1 && <StepCard step={s} side="right" />}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-2xl rounded-2xl border border-gray-700 bg-gray-800/80 backdrop-blur-xl p-5 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold text-white">
                {t("journey.cta.title")}
              </p>
              <p className="text-sm text-gray-300">
                {t("journey.cta.subtitle")}
              </p>
            </div>
            <button
              onClick={handleCta}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white 
                         bg-gradient-to-b from-yellow-400 to-yellow-700 border border-orange-400/60 
                         shadow-[0_20px_60px_-16px_rgba(251,146,60,0.45)] hover:translate-y-[-1px] transition-all duration-300 hover:shadow-[0_25px_70px_-20px_rgba(251,146,60,0.6)] cursor-pointer"
            >
              {t("journey.cta.button")}
              <CheckCircle2 className="size-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ step, side }: { step: { id: number; title: string; desc: string; icon: React.ReactElement }; side: "left" | "right" }) {
  const align = side === "left" ? "text-right" : "text-left";
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.02, 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className={`max-w-md w-full rounded-2xl border border-gray-700 bg-gray-800/90 backdrop-blur-xl p-4 md:p-5 lg:p-6 shadow-[0_24px_80px_-28px_rgba(0,0,0,0.3)] hover:shadow-[0_32px_100px_-20px_rgba(0,0,0,0.4)] hover:border-gray-600 hover:bg-gray-800/95 transition-all duration-100 cursor-pointer ${align}`}
    >
      <h3 className="text-base md:text-lg font-semibold text-white">{step.title}</h3>
      <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed text-gray-300">{step.desc}</p>
    </motion.div>
  );
}
