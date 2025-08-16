import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const { t } = useTranslation("common");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|phone|tablet/i.test(userAgent);
      const isSmallScreen = window.innerWidth < 768;
      const newIsMobile = isMobileDevice || isSmallScreen;
      console.log(`📱 Mobile Detection:`, {
        userAgent: userAgent.substring(0, 50) + '...',
        isMobileDevice,
        isSmallScreen,
        windowWidth: window.innerWidth,
        threshold: 768,
        finalResult: newIsMobile
      });
      setIsMobile(newIsMobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Video loading logic - now works for both mobile and desktop
    if (videoRef.current) {
      const v = videoRef.current;
      const tryPlay = () => {
        console.log(`🎥 Attempting to play video on ${isMobile ? 'mobile' : 'desktop'}`);
        v.play().catch((error) => {
          console.log("❌ Video autoplay failed:", error.message);
        });
      };
      
      v.addEventListener("canplay", () => {
        console.log(`✅ Video can play on ${isMobile ? 'mobile' : 'desktop'}`);
        tryPlay();
      }, { once: true });
      
      v.addEventListener("loadeddata", () => {
        console.log(`📹 Video data loaded on ${isMobile ? 'mobile' : 'desktop'}`);
      });
      
      v.addEventListener("playing", () => {
        console.log(`▶️ Video is now playing on ${isMobile ? 'mobile' : 'desktop'}`);
      });
      
      v.addEventListener("error", (e) => {
        console.error(`❌ Video error on ${isMobile ? 'mobile' : 'desktop'}:`, e);
      });
      
      // Try to play immediately
      tryPlay();
      
      return () => {
        v.removeEventListener("canplay", tryPlay);
        v.removeEventListener("loadeddata", () => {});
        v.removeEventListener("playing", () => {});
        v.removeEventListener("error", () => {});
      };
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []); // Removed isMobile dependency to prevent infinite loops

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b0b0b] overflow-hidden py-16 sm:py-20 lg:py-0">
      {/* Background video - Show on all devices with different sources for mobile/desktop */}
      {isClient && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover z-0"
          style={{
            top: isMobile ? '0' : '0',
            left: '0',
            right: '0',
            bottom: '0',
            width: '100%',
            height: '100%',
            minHeight: '100vh'
          }}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden="true"
        >
          {/* Mobile video source */}
          {isMobile && (
            <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          )}
          {/* Desktop video source */}
          {!isMobile && (
            <source src="/videos/hero.mp4" type="video/mp4" />
          )}
          {/* Fallback webm sources */}
          {isMobile && (
            <source src="/videos/hero-mobile.webm" type="video/webm" />
          )}
          {!isMobile && (
            <source src="/videos/hero.webm" type="video/webm" />
          )}
        </video>
      )}

      {/* 
        Video is now enabled on all devices including mobile.
        Note: Mobile devices may have performance considerations with video autoplay.
      */}


      {/* Readability overlay */}
      <div
        className="absolute inset-0 bg-black/55 sm:bg-gradient-to-b sm:from-black/60 sm:via-black/45 sm:to-black/60"
        aria-hidden="true"
      />
      
      {/* Background Pattern (subtle overlay on top of video) */}
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

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t("hero.contactForm.name")}
                      className="w-full px-3 sm:px-4 py-3 bg-white/10 backdrop-blur-sm border border-[var(--color-gold-400)]/60 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-[var(--color-gold-500)] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={t("hero.contactForm.phone")}
                      className="w-full px-3 sm:px-4 py-3 bg-white/10 backdrop-blur-sm border border-[var(--color-gold-400)]/60 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-[var(--color-gold-500)] transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder={t("hero.contactForm.email")}
                    className="w-full px-3 sm:px-4 py-3 bg-white/10 backdrop-blur-sm border border-[var(--color-gold-400)]/60 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-[var(--color-gold-500)] transition-all duration-200"
                  />
                </div>

                <div>
                  <select className="w-full px-3 sm:px-4 py-3 bg-white/10 backdrop-blur-sm border border-[var(--color-gold-400)]/60 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-[var(--color-gold-500)] transition-all duration-200 [&>option]:bg-gray-800 [&>option]:text-white [&>option]:py-2">
                    <option value="" className="bg-gray-800 text-gray-300">
                      {t("hero.contactForm.service")}
                    </option>
                    <option value="hair-transplant" className="bg-gray-800 text-white">
                      {t("services.hair.title")}
                    </option>
                    <option value="dental" className="bg-gray-800 text-white">
                      {t("services.dental.title")}
                    </option>
                    <option value="aesthetic" className="bg-gray-800 text-white">
                      {t("services.aesthetic.title")}
                    </option>
                  </select>
                </div>

                <div>
                  <textarea
                    placeholder={t("hero.contactForm.message")}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-3 bg-white/10 backdrop-blur-sm border border-[var(--color-gold-400)]/60 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-[var(--color-gold-500)] transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-600)] hover:from-[var(--color-gold-600)] hover:to-[var(--color-gold-700)] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t("hero.contactForm.submit")}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
