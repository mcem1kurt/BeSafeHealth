import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      // Home key scrolls to top
      if (e.key === 'Home') {
        e.preventDefault();
        const topSection = document.getElementById('top');
        if (topSection) {
          topSection.scrollIntoView({
            block: 'start'
          });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    // Always use dark mode as default
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className={`sticky top-0 z-50 transition bg-transparent`}>
      {/* Scroll progress */}
      <motion.div style={{ scaleX }} className="origin-left h-0.5 bg-[var(--color-gold-500)] transition-opacity duration-500" />
      {/* Rounded navbar shell (pill) */}
      <div
        className={`mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 ${scrolled ? "py-2" : "py-3"} transition-all duration-500 ease-out`}
      >
        <div
          className={`relative flex items-center justify-between h-14 px-4 sm:px-6 lg:px-8 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${scrolled
              ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-md"
              : "bg-black/40 backdrop-blur-xl border border-white/10"}
          `}
        >
          <div className="flex items-center gap-2">
            {/* Logo that appears when scrolled */}
            {scrolled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center gap-2"
              >
                <Image
                  src="/images/only-logo-besafe-dark.png"
                  alt="Besafe Health Logo"
                  width={32}
                  height={32}
                  className="w-10 h-10 object-contain"
                />
              </motion.div>
            )}
          </div>
          <nav className="hidden md:flex items-center gap-8 text-base">
            <Link href="/" className="navbar-link text-white hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.home")}</Link>
            <Link href="/about" className="navbar-link text-white hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.about")}</Link>
            <div className="relative" onMouseEnter={() => setOpenMega(true)} onMouseLeave={() => {
              // Add a small delay to prevent menu from closing when moving cursor
              setTimeout(() => setOpenMega(false), 150);
            }}>
              <button className="navbar-link inline-flex items-center gap-1 text-white hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">
                {t("navbar.services")} <ChevronDown size={16} />
              </button>
              {openMega && (
                <>
                  {/* Invisible bridge to prevent menu from closing */}
                  <div className="absolute top-full left-0 right-0 h-2 bg-transparent" />

                  <div
                    className="absolute left-1/2 top-full -translate-x-1/2 z-[60] w-[90vw] max-w-[900px] rounded-2xl border border-white/20 bg-gray-900/50 backdrop-blur-xl p-6 sm:p-8 shadow-2xl mt-2"
                    onMouseEnter={() => setOpenMega(true)}
                    onMouseLeave={() => setOpenMega(false)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-sm">
                      {/* Hair Transplant Services */}
                      {/* Hair Transplant Services */}
                      <div className="space-y-2">
                        <Link
                          href="/services/hair-transplant"
                          className="group block h-full rounded-xl border border-white/10 
               p-4 sm:p-5 hover:border-[var(--color-gold-400)] 
               bg-gray-800/80 hover:bg-gray-800/90 
               transition-all duration-300"
                        >
                          <div className="font-semibold text-white group-hover:text-[var(--color-gold-400)] text-lg">
                            {t("services.hair.title")}
                          </div>
                          <div className="text-gray-300 mt-2 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            {t("services.hair.subtitle")}
                          </div>
                        </Link>
                      </div>

                      {/* Dental Services */}
                      <div className="space-y-2">
                        <Link
                          href="/services/dental"
                          className="group block h-full rounded-xl border border-white/10 
               p-4 sm:p-5 hover:border-[var(--color-gold-400)] 
               bg-gray-800/80 hover:bg-gray-800/90 
               transition-all duration-300"
                        >
                          <div className="font-semibold text-white group-hover:text-[var(--color-gold-400)] text-lg">
                            {t("services.dental.title")}
                          </div>
                          <div className="text-gray-300 mt-2 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            {t("services.dental.subtitle")}
                          </div>
                        </Link>
                      </div>

                      {/* Plastic Surgery Services */}
                      <div className="space-y-2">
                        <Link
                          href="/services/plastic"
                          className="group block h-full rounded-xl border border-white/10 
               p-4 sm:p-5 hover:border-[var(--color-gold-400)] 
               bg-gray-800/80 hover:bg-gray-800/90 
               transition-all duration-300"
                        >
                          <div className="font-semibold text-white group-hover:text-[var(--color-gold-400)] text-lg">
                            {t("services.plastic.title")}
                          </div>
                          <div className="text-gray-300 mt-2 text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            {t("services.plastic.subtitle")}
                          </div>
                        </Link>
                      </div>

                    </div>
                  </div>
                </>
              )}
            </div>
            <a
              href="http://Besafehealthacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link text-white hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium"
            >
              {t("services.academy.title")}
            </a>
            <Link href="/contact" className="navbar-link text-white hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.contact")}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className="relative group">
              <button
                className="hidden md:inline-flex items-center gap-1 px-2 py-1 rounded border border-white/10 hover:border-[var(--color-gold-400)] hover:text-[var(--color-gold-400)] text-white cursor-pointer transition-all duration-200"
              >
                <Image
                  src={`/images/flags/${router.locale === "en" ? "us" : router.locale === "tr" ? "tr" : router.locale === "it" ? "it" : "al"}.png`}
                  alt={`${router.locale} flag`}
                  width={20}
                  height={15}
                  className="w-5 h-4 object-cover rounded-sm"
                />
                <ChevronDown size={12} />
              </button>
              
              {/* Language Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-16 bg-gray-900/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <button
                    onClick={() => router.push(router.asPath, undefined, { locale: "en" })}
                    className={`w-full flex justify-center px-3 py-2 hover:bg-gray-800/50 transition-colors duration-200 ${
                      router.locale === "en" ? "ring-1 ring-[var(--color-gold-400)]" : ""
                    }`}
                  >
                    <Image
                      src="/images/flags/us.png"
                      alt="US flag"
                      width={20}
                      height={15}
                      className="w-5 h-4 object-cover rounded-sm"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <button
                    onClick={() => router.push(router.asPath, undefined, { locale: "tr" })}
                    className={`w-full flex justify-center px-3 py-2 hover:bg-gray-800/50 transition-colors duration-200 ${
                      router.locale === "tr" ? "ring-1 ring-[var(--color-gold-400)]" : ""
                    }`}
                  >
                    <Image
                      src="/images/flags/tr.png"
                      alt="TR flag"
                      width={20}
                      height={15}
                      className="w-5 h-4 object-cover rounded-sm"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <button
                    onClick={() => router.push(router.asPath, undefined, { locale: "it" })}
                    className={`w-full flex justify-center px-3 py-2 hover:bg-gray-800/50 transition-colors duration-200 ${
                      router.locale === "it" ? "ring-1 ring-[var(--color-gold-400)]" : ""
                    }`}
                  >
                    <Image
                      src="/images/flags/it.png"
                      alt="IT flag"
                      width={20}
                      height={15}
                      className="w-5 h-4 object-cover rounded-sm"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <button
                    onClick={() => router.push(router.asPath, undefined, { locale: "sq" })}
                    className={`w-full flex justify-center px-3 py-2 hover:bg-gray-800/50 transition-colors duration-200 ${
                      router.locale === "sq" ? "ring-1 ring-[var(--color-gold-400)]" : ""
                    }`}
                  >
                    <Image
                      src="/images/flags/al.png"
                      alt="AL flag"
                      width={20}
                      height={15}
                      className="w-5 h-4 object-cover rounded-sm"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <a
                href="https://wa.me/905079415087"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-600)] text-white shadow-sm cursor-pointer"
              >
                <MessageCircle size={16} />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>

            {/* Instagram Button */}
            <div className="relative">
              <a
                href="https://instagram.com/besafehealthtr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-sm cursor-pointer transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058 1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
            

            <button
              aria-label="Open menu"
              onClick={() => setOpenMobile(true)}
              className="md:hidden inline-flex items-center justify-center rounded-full border w-9 h-9 border-white/10 hover:border-[var(--color-gold-400)] hover:text-[var(--color-gold-400)] text-white cursor-pointer transition-all duration-200"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </div>

      {openMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur"
        >
          <div className="absolute top-4 right-4">
            <button aria-label="Close menu" onClick={() => setOpenMobile(false)} className="rounded-full border border-white/10 w-10 h-10 flex items-center justify-center hover:border-[var(--color-gold-400)] hover:text-[var(--color-gold-400)] text-white cursor-pointer transition-all duration-200">
              <X size={18} />
            </button>
          </div>
          <div className="h-full flex items-center justify-center">
            <div className="grid gap-6 text-2xl text-center">
              <Link href="/" onClick={() => setOpenMobile(false)} className="hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.home")}</Link>
              <Link href="/about" onClick={() => setOpenMobile(false)} className="hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.about")}</Link>
              <Link href="/services" onClick={() => setOpenMobile(false)} className="hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.services")}</Link>
              <div className="space-y-2 ml-4">
                <Link href="/services/hair-transplant" onClick={() => setOpenMobile(false)} className="block text-base text-gray-300 hover:text-[var(--color-gold-400)] transition-colors duration-200">
                  {t("services.hair.title")}
                </Link>
                <Link href="/services/dental" onClick={() => setOpenMobile(false)} className="block text-base text-gray-300 hover:text-[var(--color-gold-400)] transition-colors duration-200">
                  {t("services.dental.title")}
                </Link>
                <Link href="/services/plastic" onClick={() => setOpenMobile(false)} className="block text-base text-gray-300 hover:text-[var(--color-gold-400)] transition-colors duration-200">
                  {t("services.plastic.title")}
                </Link>
              </div>
              <a
                href="http://Besafehealthacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpenMobile(false)}
                className="hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium"
              >
                {t("services.academy.title")}
              </a>
              <Link href="/contact" onClick={() => setOpenMobile(false)} className="hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.contact")}</Link>
              

              
              <div className="mt-4 space-y-2">
                <div className="text-sm text-gray-400 mb-2">Dil Seçimi / Language Selection</div>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => { setOpenMobile(false); router.push(router.asPath, undefined, { locale: "en" }); }}
                    className={`px-3 py-2 rounded border transition-all duration-200 ${
                      router.locale === "en" 
                        ? "border-[var(--color-gold-400)] ring-1 ring-[var(--color-gold-400)]" 
                        : "border-white/10 hover:border-[var(--color-gold-400)]"
                    }`}
                  >
                    <Image
                      src="/images/flags/us.png"
                      alt="US flag"
                      width={24}
                      height={18}
                      className="w-6 h-5 object-cover rounded-sm"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <button
                    onClick={() => { setOpenMobile(false); router.push(router.asPath, undefined, { locale: "tr" }); }}
                    className={`px-3 py-2 rounded border transition-all duration-200 ${
                      router.locale === "tr" 
                        ? "border-[var(--color-gold-400)] ring-1 ring-[var(--color-gold-400)]" 
                        : "border-white/10 hover:border-[var(--color-gold-400)]"
                    }`}
                  >
                    <Image
                      src="/images/flags/tr.png"
                      alt="TR flag"
                      width={24}
                      height={18}
                      className="w-6 h-5 object-cover rounded-sm"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <button
                    onClick={() => { setOpenMobile(false); router.push(router.asPath, undefined, { locale: "it" }); }}
                    className={`px-3 py-2 rounded border transition-all duration-200 ${
                      router.locale === "it" 
                        ? "border-[var(--color-gold-400)] ring-1 ring-[var(--color-gold-400)]" 
                        : "border-white/10 hover:border-[var(--color-gold-400)]"
                    }`}
                  >
                    <Image
                      src="/images/flags/it.png"
                      alt="IT flag"
                      width={24}
                      height={18}
                      className="w-6 h-5 object-cover rounded-sm"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                  <button
                    onClick={() => { setOpenMobile(false); router.push(router.asPath, undefined, { locale: "sq" }); }}
                    className={`px-3 py-2 rounded border transition-all duration-200 ${
                      router.locale === "sq" 
                        ? "border-[var(--color-gold-400)] ring-1 ring-[var(--color-gold-400)]" 
                        : "border-white/10 hover:border-[var(--color-gold-400)]"
                    }`}
                  >
                    <Image
                      src="/images/flags/al.png"
                      alt="AL flag"
                      width={24}
                      height={18}
                      className="w-6 h-5 object-cover rounded-sm"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}


    </div>
  );
}
