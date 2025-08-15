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
        duration: "Same Day",
        requirements: ["Recent photos", "Medical history", "Current medications"],
        process: "Send your photos and basic information through our secure portal. Our medical team will review and provide initial assessment within 24 hours.",
        benefits: ["Quick response", "No travel required", "Professional evaluation"]
      }
    },
    {
      id: 2,
      title: t("journey.steps.step2.title"),
      desc: t("journey.steps.step2.desc"),
      icon: <Calendar className="size-6" />,
      details: {
        duration: "2-3 Days",
        requirements: ["Preferred dates", "Budget range", "Special requests"],
        process: "Our coordinators will create a personalized plan including flight options, accommodation choices, and detailed treatment schedule based on your preferences.",
        benefits: ["Flexible scheduling", "Multiple options", "Cost optimization"]
      }
    },
    {
      id: 3,
      title: t("journey.steps.step3.title"),
      desc: t("journey.steps.step3.desc"),
      icon: <Plane className="size-6" />,
      details: {
        duration: "1-2 Hours",
        requirements: ["Passport", "Travel documents", "Medical records"],
        process: "VIP airport pickup with luxury vehicle, direct transfer to your accommodation, and immediate consultation with your assigned doctor.",
        benefits: ["Stress-free arrival", "Immediate support", "Professional guidance"]
      }
    },
    {
      id: 4,
      title: t("journey.steps.step4.title"),
      desc: t("journey.steps.step4.desc"),
      icon: <HeartPulse className="size-6" />,
      details: {
        duration: "Varies by procedure",
        requirements: ["Pre-operative tests", "Fasting instructions", "Comfortable clothing"],
        process: "State-of-the-art facilities with experienced medical team. Continuous monitoring and immediate post-operative care in recovery room.",
        benefits: ["Advanced technology", "Expert team", "Comprehensive care"]
      }
    },
    {
      id: 5,
      title: t("journey.steps.step5.title"),
      desc: t("journey.steps.step5.desc"),
      icon: <Stethoscope className="size-6" />,
      details: {
        duration: "1-2 Hours",
        requirements: ["Post-op instructions", "Medication schedule", "Follow-up appointments"],
        process: "Detailed care instructions, medication management, and practical training for home care. Includes comprehensive care kit and emergency contacts.",
        benefits: ["Confidence building", "Proper care", "Emergency support"]
      }
    },
    {
      id: 6,
      title: t("journey.steps.step6.title"),
      desc: t("journey.steps.step6.desc"),
      icon: <MonitorCheck className="size-6" />,
      details: {
        duration: "Ongoing",
        requirements: ["Progress photos", "Health updates", "Symptom reports"],
        process: "Regular check-ins at 3, 6, and 12 months. Photo-based progress tracking and virtual consultations with your doctor.",
        benefits: ["Continuous support", "Progress tracking", "Professional guidance"]
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
    <section className="relative min-h-[90vh] w-full bg-transparent text-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-40 h-96 w-96 rounded-full blur-3xl opacity-20 bg-yellow-400" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl opacity-20 bg-orange-400" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 ">
        <div className="text-center mb-14 ">
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
                {i % 2 === 0 && <StepCard step={s} side="left" onClick={() => openStepDetails(s.id)} />}
              </div>

              <div className="flex flex-col items-center">
                <div className="w-[2px] flex-1 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600" />
                <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-700 text-gray-800 border border-yellow-400/70 shadow-[0_10px_24px_-8px_rgba(234,179,8,0.3)] my-4 md:my-6">
                  {s.icon}
                </div>
                <div className="w-[2px] flex-1 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600" />
              </div>

              <div className={`flex justify-start items-center ${i % 2 === 1 ? 'md:pl-8' : 'md:pl-8 invisible md:visible'}`}>
                {i % 2 === 1 && <StepCard step={s} side="right" onClick={() => openStepDetails(s.id)} />}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Vertical stack: icon, card, icon, card */}
        <div className="md:hidden space-y-8">
          {steps.map((s, i) => (
            <div key={s.id} className="flex flex-col items-center">
              {/* Step Icon */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-700 text-gray-800 border-2 border-yellow-400/70 shadow-[0_10px_24px_-8px_rgba(234,179,8,0.3)] mb-4">
                {s.icon}
              </div>
              
              {/* Step Card */}
              <div className="w-full max-w-sm">
                <StepCard step={s} side="center" onClick={() => openStepDetails(s.id)} />
              </div>
              
              {/* Connecting line (except for last step) */}
              {i < steps.length - 1 && (
                <div className="w-[2px] h-8 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 mt-4" />
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-gray-700 bg-gray-800/80 backdrop-blur-xl p-5 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)]">
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
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-700 text-gray-800 border-2 border-yellow-300 shadow-lg">
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

function StepCard({ step, side, onClick }: { 
  step: { id: number; title: string; desc: string; icon: React.ReactElement }; 
  side: "left" | "right" | "center";
  onClick: () => void;
}) {
  const align = side === "left" ? "text-right" : side === "right" ? "text-left" : "text-center";
  return (
    <div
      onClick={onClick}
      className={`max-w-md w-full rounded-2xl border border-gray-700 bg-gray-800/90 backdrop-blur-xl p-4 md:p-5 lg:p-6 shadow-[0_24px_80px_-28px_rgba(0,0,0,0.3)] hover:shadow-[0_32px_100px_-20px_rgba(0,0,0,0.4)] hover:border-gray-600 hover:bg-gray-800/95 transition-all duration-200 cursor-pointer ${align}`}
    >
      <h3 className="text-base md:text-lg font-semibold text-white">{step.title}</h3>
      <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed text-gray-300">{step.desc}</p>
    </div>
  );
}