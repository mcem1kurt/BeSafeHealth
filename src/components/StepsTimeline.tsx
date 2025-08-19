import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Camera, Calendar, Plane, HeartPulse, Stethoscope, MonitorCheck, X } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function StepsTimeline() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: t("journey.steps.step1.title"),
      desc: t("journey.steps.step1.desc"),
      icon: <Camera className="size-6" />,
      details: {
        duration: t("journey.steps.step1.duration"),
        requirements: [
          t("journey.steps.step1.requirements.photo"),
          t("journey.steps.step1.requirements.history"),
          t("journey.steps.step1.requirements.medications")
        ],
        process: t("journey.steps.step1.process"),
        benefits: [
          t("journey.steps.step1.benefits.response"),
          t("journey.steps.step1.benefits.travel"),
          t("journey.steps.step1.benefits.evaluation")
        ]
      }
    },
    {
      id: 2,
      title: t("journey.steps.step2.title"),
      desc: t("journey.steps.step2.desc"),
      icon: <Calendar className="size-6" />,
      details: {
        duration: t("journey.steps.step2.duration"),
        requirements: [
          t("journey.steps.step2.requirements.dates"),
          t("journey.steps.step2.requirements.budget"),
          t("journey.steps.step2.requirements.requests")
        ],
        process: t("journey.steps.step2.process"),
        benefits: [
          t("journey.steps.step2.benefits.scheduling"),
          t("journey.steps.step2.benefits.options"),
          t("journey.steps.step2.benefits.cost")
        ]
      }
    },
    {
      id: 3,
      title: t("journey.steps.step3.title"),
      desc: t("journey.steps.step3.desc"),
      icon: <Plane className="size-6" />,
      details: {
        duration: t("journey.steps.step3.duration"),
        requirements: [
          t("journey.steps.step3.requirements.passport"),
          t("journey.steps.step3.requirements.documents"),
          t("journey.steps.step3.requirements.records")
        ],
        process: t("journey.steps.step3.process"),
        benefits: [
          t("journey.steps.step3.benefits.arrival"),
          t("journey.steps.step3.benefits.support"),
          t("journey.steps.step3.benefits.guidance")
        ]
      }
    },
    {
      id: 4,
      title: t("journey.steps.step4.title"),
      desc: t("journey.steps.step4.desc"),
      icon: <HeartPulse className="size-6" />,
      details: {
        duration: t("journey.steps.step4.duration"),
        requirements: [
          t("journey.steps.step4.requirements.tests"),
          t("journey.steps.step4.requirements.fasting"),
          t("journey.steps.step4.requirements.clothing")
        ],
        process: t("journey.steps.step4.process"),
        benefits: [
          t("journey.steps.step4.benefits.technology"),
          t("journey.steps.step4.benefits.team"),
          t("journey.steps.step4.benefits.care")
        ]
      }
    },
    {
      id: 5,
      title: t("journey.steps.step5.title"),
      desc: t("journey.steps.step5.desc"),
      icon: <Stethoscope className="size-6" />,
      details: {
        duration: t("journey.steps.step5.duration"),
        requirements: [
          t("journey.steps.step5.requirements.instructions"),
          t("journey.steps.step5.requirements.medication"),
          t("journey.steps.step5.requirements.appointments")
        ],
        process: t("journey.steps.step5.process"),
        benefits: [
          t("journey.steps.step5.benefits.confidence"),
          t("journey.steps.step5.benefits.care"),
          t("journey.steps.step5.benefits.support")
        ]
      }
    },
    {
      id: 6,
      title: t("journey.steps.step6.title"),
      desc: t("journey.steps.step6.desc"),
      icon: <MonitorCheck className="size-6" />,
      details: {
        duration: t("journey.steps.step6.duration"),
        requirements: [
          t("journey.steps.step6.requirements.photos"),
          t("journey.steps.step6.requirements.updates"),
          t("journey.steps.step6.requirements.symptoms")
        ],
        process: t("journey.steps.step6.process"),
        benefits: [
          t("journey.steps.step6.benefits.support"),
          t("journey.steps.step6.benefits.tracking"),
          t("journey.steps.step6.benefits.guidance")
        ]
      }
    },
  ];

  const handleCta = () => {
    router.push({ pathname: "/contact" }, undefined, { locale: router.locale });
  };

  const openStepDetails = (stepId: number) => {
    setSelectedStep(stepId);
  };

  const closeStepDetails = () => {
    setSelectedStep(null);
  };

  return (
    <section className="relative min-h-[60vh] md:min-h-[90vh] w-full bg-transparent text-white py-8 md:py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-40 h-96 w-96 rounded-full blur-3xl opacity-20 bg-yellow-400" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl opacity-20 bg-orange-400" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 ">
        <div className="text-center mb-8 md:mb-14 ">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {t("journey.title")}
          </h2>
          <p className="text-xl md:text-2xl mt-2 font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600">
            {t("journey.subtitle")}
          </p>
        </div>

        {/* Desktop Layout - Original alternating left/right design */}
        <div className="hidden md:block relative mx-auto md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-16">
          {steps.map((s, i) => (
            <div key={s.id} className={`contents`}>
              <div className={`flex justify-end items-center ${i % 2 === 0 ? 'md:pr-8' : 'md:pr-8 invisible md:visible'}`}>
                {i % 2 === 0 && <StepCard step={s} side="left" onClick={() => openStepDetails(s.id)} t={t} />}
              </div>

              <div className="flex flex-col items-center">
                <div className="w-[2px] flex-1 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600" />
                <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-700 text-gray-800 border border-yellow-400/70 shadow-[0_10px_24px_-8px_rgba(234,179,8,0.3)] my-4 md:my-6">
                  {s.icon}
                </div>
                <div className="w-[2px] flex-1 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600" />
              </div>

              <div className={`flex justify-start items-center ${i % 2 === 1 ? 'md:pl-8' : 'md:pl-8 invisible md:visible'}`}>
                {i % 2 === 1 && <StepCard step={s} side="right" onClick={() => openStepDetails(s.id)} t={t} />}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Vertical stack with clickable icons only */}
        <div className="md:hidden space-y-4 md:space-y-8">
          {steps.map((s, i) => (
            <div key={s.id} className="flex flex-col items-center">
              {/* Step Icon - Now clickable with enhanced hover effects */}
              <button
                onClick={() => openStepDetails(s.id)}
                className="group relative z-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full 
                           bg-gradient-to-b from-yellow-400 to-yellow-700 text-gray-800 
                           border-2 border-yellow-400/70 
                           shadow-[0_10px_24px_-8px_rgba(234,179,8,0.3)] 
                           hover:scale-110 hover:shadow-[0_15px_35px_-8px_rgba(234,179,8,0.4)] 
                           hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]
                           hover:border-yellow-300/90
                           transition-all duration-300 ease-out cursor-pointer
                           hover:-translate-y-1"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300/20 to-orange-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon with enhanced hover animation */}
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                
                {/* Pulse effect on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-yellow-300/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
              </button>
              
              {/* Step Title - Small text below icon with hover effect */}
              <div className="text-center mb-1 md:mb-2 group">
                <h3 className="text-xs md:text-sm font-medium text-white/90 group-hover:text-yellow-300 transition-colors duration-300">
                  {s.title}
                </h3>
              </div>
              
              {/* Connecting line (except for last step) */}
              {i < steps.length - 1 && (
                <div className="w-[2px] h-6 md:h-8 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 mt-1 md:mt-2" />
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 md:mt-16 max-w-2xl rounded-2xl border border-gray-700 bg-gray-800/80 backdrop-blur-xl p-5 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)]">
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
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white 
                         bg-gradient-to-b from-yellow-400 to-yellow-700 border border-orange-400/60 
                         shadow-[0_20px_60px_-16px_rgba(251,146,60,0.45)] 
                         hover:translate-y-[-2px] hover:scale-105
                         transition-all duration-300 ease-out
                         hover:shadow-[0_25px_70px_-20px_rgba(251,146,60,0.6)]
                         hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]
                         hover:border-yellow-300/80
                         hover:from-yellow-500 hover:to-yellow-600
                         cursor-pointer relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              {/* Content */}
              <span className="relative z-10">{t("journey.cta.button")}</span>
              <CheckCircle2 className="relative z-10 size-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Step Details Popup */}
      <AnimatePresence>
        {selectedStep && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={closeStepDetails}
            />
            
            {/* Popup Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={closeStepDetails}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Step Content */}
              {(() => {
                const step = steps.find(s => s.id === selectedStep);
                if (!step) return null;
                
                return (
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-36 h-16 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-700 text-gray-800 border-2 border-yellow-300 shadow-lg">
                        {step.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">{step.title}</h2>
                        <p className="text-lg text-gray-300">{step.desc}</p>
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Duration & Requirements */}
                      <div className="space-y-4">
                        <div className="bg-gray-800/50 rounded-xl p-4">
                          <h3 className="text-lg font-semibold text-yellow-400 mb-2">{t("stepDetails.duration")}</h3>
                          <p className="text-white">{step.details.duration}</p>
                        </div>
                        
                        <div className="bg-gray-800/50 rounded-xl p-4">
                          <h3 className="text-lg font-semibold text-yellow-400 mb-2">{t("stepDetails.requirements")}</h3>
                          <ul className="space-y-1">
                            {step.details.requirements.map((req, index) => (
                              <li key={index} className="text-gray-300 flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Process & Benefits */}
                      <div className="space-y-4">
                        <div className="bg-gray-800/50 rounded-xl p-4">
                          <h3 className="text-lg font-semibold text-yellow-400 mb-2">{t("stepDetails.process")}</h3>
                          <p className="text-gray-300 leading-relaxed">{step.details.process}</p>
                        </div>
                        
                        <div className="bg-gray-800/50 rounded-xl p-4">
                          <h3 className="text-lg font-semibold text-yellow-400 mb-2">{t("stepDetails.benefits")}</h3>
                          <ul className="space-y-1">
                            {step.details.benefits.map((benefit, index) => (
                              <li key={index} className="text-gray-300 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-8 text-center">
                      <button
                        onClick={() => {
                          closeStepDetails();
                          router.push('/contact');
                        }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200"
                      >
                        {t("stepDetails.getStarted")}
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function StepCard({ step, side, onClick, t }: { 
  step: { id: number; title: string; desc: string; icon: React.ReactElement }; 
  side: "left" | "right" | "center";
  onClick: () => void;
  t: (key: string) => string;
}) {
  const align = side === "left" ? "text-right" : side === "right" ? "text-left" : "text-center";
  return (
    <div
      onClick={onClick}
      className={`group max-w-md w-full rounded-2xl border border-gray-700 bg-gray-800/90 backdrop-blur-xl p-4 md:p-5 lg:p-6 
                 shadow-[0_24px_80px_-28px_rgba(0,0,0,0.3)] 
                 hover:shadow-[0_32px_100px_-20px_rgba(0,0,0,0.4)] 
                 hover:border-yellow-500/50 hover:bg-gray-800/95 
                 hover:scale-105 hover:-translate-y-1
                 transition-all duration-300 ease-out cursor-pointer 
                 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] 
                 ${align}
                 relative overflow-hidden`}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-yellow-500/30 transition-all duration-300" />
      
      {/* Content with enhanced hover effects */}
      <div className="relative z-10">
        <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
          {step.desc}
        </p>
        
        {/* Hover indicator */}
        <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          <span className="text-xs text-yellow-400 font-medium">{t("stepDetails.clickForDetails")}</span>
        </div>
      </div>
    </div>
  );
}