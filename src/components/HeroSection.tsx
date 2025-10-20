import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import { useEmailJS } from "@/hooks/useEmailJS";
import { emailJSConfig } from "@/config/emailjs";

export default function HeroSection() {
  const { t } = useTranslation("common");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Form state for contact form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  
  const { sendEmail, isSubmitting, isSubmitted, error, resetForm } = useEmailJS(emailJSConfig);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Facebook Pixel - Lead event (form submitted)
    setTimeout(() => {
      if (typeof window !== "undefined" && window.fbq) {
        console.log('🔍 Facebook Pixel: Lead event triggered');
        window.fbq!('track', 'Lead');
      } else {
        console.warn('⚠️ Facebook Pixel: fbq not available for Lead event');
      }
    }, 100);

    // Facebook Conversions API - Lead event (server-side)
    try {
      const conversionsResponse = await fetch('/api/facebook-conversions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventName: 'Lead',
          userData: {
            email: formData.email,
            firstName: formData.name?.split(' ')[0],
            lastName: formData.name?.split(' ').slice(1).join(' '),
            phone: formData.phone,
            // leadId intentionally omitted here. For Conversion Leads, this must be the
            // real Meta Lead Ads ID (15-17 digits) obtained from the Leadgen Webhook.
          },
          customData: {
            content_name: 'Contact Form',
            content_category: 'Lead Generation',
          },
        }),
      });

      if (conversionsResponse.ok) {
        console.log('✅ Facebook Conversions API: Lead event sent');
      } else {
        console.warn('⚠️ Facebook Conversions API: Failed to send Lead event');
      }
    } catch (error) {
      console.warn('⚠️ Facebook Conversions API Error:', error);
    }

    // Send email using EmailJS
    await sendEmail(formData);
    
    // Form data will be reset only after successful submission
    // No need to reset here as the form will show success message
  };

  useEffect(() => {
    setIsClient(true);
    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|phone|tablet/i.test(userAgent);
      const isSmallScreen = window.innerWidth < 768;
      const newIsMobile = isMobileDevice || isSmallScreen;
      setIsMobile(newIsMobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-0">
      {/* Background - Different for mobile vs desktop */}
      {isClient && (
        <>
          {/* Desktop: Video background */}
          {!isMobile && (
            <>
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover z-0"
                autoPlay
                muted
                playsInline
                loop
                preload="metadata"
                aria-hidden="true"
                poster="/images/hero_section_tumbnail.jpg"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
                <source src="/videos/hero.webm" type="video/webm" />
              </video>
              {/* Readability overlay for desktop */}
              <div
                className="absolute inset-0 bg-black/55 sm:bg-gradient-to-b sm:from-black/60 sm:via-black/45 sm:to-black/60"
                aria-hidden="true"
              />
            </>
          )}
          
          {/* Mobile: Gradient background */}
          {isMobile && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,190,63,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent_50%)]" />
              </div>
            </div>
          )}
        </>
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,190,63,0.12),transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] lg:min-h-screen">
          {/* Left Side - Hero Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] mb-4 sm:mb-6 lg:mb-8 leading-tight"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-4 sm:mt-6 text-lg sm:text-xl text-white/90 max-w-2xl lg:max-w-none leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* Embedded Video Player - Mobile */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mt-8 relative"
              >
                <div className="relative w-full max-w-md mx-auto bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
                  <div className="aspect-video bg-gray-900 relative">
                    <video
                      className="w-full h-full object-cover"
                      poster="/images/hero_section_tumbnail.jpg"
                      controls
                      preload="metadata"
                    >
                      <source src="/videos/hero.mp4" type="video/mp4" />
                      <source src="/videos/hero.webm" type="video/webm" />
                      {/* Fallback text */}
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CTA Buttons - Desktop */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mt-6 sm:mt-8 lg:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-600)] text-white font-semibold text-base sm:text-lg rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  {t("hero.cta")}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-4 sm:py-5 border-2 border-gray-300 dark:border-gray-600 hover:border-[var(--color-gold-500)] text-white dark:text-gray-300 font-semibold text-base sm:text-lg rounded-2xl transition-all duration-200 hover:bg-[var(--color-gold-500)] hover:text-white"
                >
                  {t("hero.explore")}
                </Link>
              </motion.div>
            )}
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-8 sm:mt-12 lg:mt-16 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-white/85"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t("heroTrust.certified")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{t("heroTrust.experience")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>{t("heroTrust.support")}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-[0_0_50px_rgba(251,191,36,0.1)]">
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {t("hero.contactForm.title")}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {t("hero.contactForm.subtitle")}
                </p>
              </div>

{isSubmitted ? (
                /* Success Message */
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t("hero.contactForm.successTitle")}</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-6">{t("hero.contactForm.successMessage")}</p>
                  <button
                    onClick={() => {
                      resetForm();
                      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
                    }}
                    className="bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-600)] hover:from-[var(--color-gold-600)] hover:to-[var(--color-gold-700)] text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
                  >
                    {t("hero.contactForm.newMessage")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("hero.contactForm.name")}
                        className="w-full px-3 sm:px-4 py-3 bg-white/10 backdrop-blur-sm border border-[var(--color-gold-400)]/60 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-[var(--color-gold-500)] transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t("hero.contactForm.phone")}
                        className="w-full px-3 sm:px-4 py-3 bg-white/10 backdrop-blur-sm border border-[var(--color-gold-400)]/60 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-[var(--color-gold-500)] transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("hero.contactForm.email")}
                      className="w-full px-3 sm:px-4 py-3 bg-white/10 backdrop-blur-sm border border-[var(--color-gold-400)]/60 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-[var(--color-gold-500)] transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 bg-white/10 backdrop-blur-sm border border-[var(--color-gold-400)]/60 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-[var(--color-gold-500)] transition-all duration-200 [&>option]:bg-gray-800 [&>option]:text-white [&>option]:py-2"
                    >
                      <option value="" className="bg-gray-800 text-gray-300">
                        {t("hero.contactForm.service")}
                      </option>
                      <option value="hair">{t("services.hair.title")}</option>
                      <option value="dental">{t("services.dental.title")}</option>
                      <option value="plastic">{t("services.plastic.title")}</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("hero.contactForm.message")}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-3 bg-white/10 backdrop-blur-sm border border-[var(--color-gold-400)]/60 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-[var(--color-gold-500)] transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="text-center mb-4">
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-600)] hover:from-[var(--color-gold-600)] hover:to-[var(--color-gold-700)] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t("hero.contactForm.sending") : t("hero.contactForm.submit")}
                  </button>
                </form>
              )}
              

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
