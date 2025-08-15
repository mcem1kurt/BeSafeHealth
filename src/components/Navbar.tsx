import Link from "next/link";
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
            {/* Logo text removed - logo is now displayed above navbar */}
          </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="navbar-link text-white hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.home")}</Link>
          <Link href="/about" className="navbar-link text-white hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.about")}</Link>
          <div className="relative" onMouseEnter={() => setOpenMega(true)} onMouseLeave={() => setOpenMega(false)}>
            <button className="navbar-link inline-flex items-center gap-1 text-white hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">
              {t("navbar.services")} <ChevronDown size={14} />
            </button>
            {openMega && (
              <div
                className="absolute left-1/2 top-full -translate-x-1/2 z-[60] w-[90vw] max-w-[720px] rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-4 sm:p-6 shadow-2xl"
                onMouseEnter={() => setOpenMega(true)}
                onMouseLeave={() => setOpenMega(false)}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
                  <Link href="/services/hair-transplant" className="group rounded-xl border border-white/10 p-3 sm:p-4 hover:border-[var(--color-gold-400)] bg-gray-800/50">
                    <div className="font-medium text-white group-hover:text-[var(--color-gold-400)]">{t("services.hair.title")}</div>
                    <div className="text-white/80 mt-1">{t("services.hair.subtitle")}</div>
                  </Link>
                  <Link href="/services/dental" className="group rounded-xl border border-white/10 p-3 sm:p-4 hover:border-[var(--color-gold-400)] bg-gray-800/50">
                    <div className="font-medium text-white group-hover:text-[var(--color-gold-400)]">{t("services.dental.title")}</div>
                    <div className="text-white/80 mt-1">{t("services.dental.subtitle")}</div>
                  </Link>
                  <Link href="/services/aesthetic" className="group rounded-xl border border-white/10 p-3 sm:p-4 hover:border-[var(--color-gold-400)] bg-gray-800/50">
                    <div className="font-medium text-white group-hover:text-[var(--color-gold-400)]">{t("services.aesthetic.title")}</div>
                    <div className="text-white/80 mt-1">{t("services.aesthetic.subtitle")}</div>
                  </Link>
                </div>
              </div>
            )}
          </div>
                      <Link href="/partners" className="navbar-link text-white hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.partners")}</Link>
          <Link href="/contact" className="navbar-link text-white hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.contact")}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push(router.asPath, undefined, { locale: router.locale === "en" ? "tr" : "en" })}
            className="hidden md:inline-flex text-xs uppercase tracking-wider px-2 py-1 rounded border border-white/10 hover:border-[var(--color-gold-400)] hover:text-[var(--color-gold-400)] text-white cursor-pointer transition-all duration-200"
          >
            {router.locale === "en" ? "TR" : "EN"}
          </button>
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
            <div className="grid gap-6 text-xl text-center">
              <Link href="/" onClick={() => setOpenMobile(false)} className="hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.home")}</Link>
              <Link href="/about" onClick={() => setOpenMobile(false)} className="hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.about")}</Link>
              <Link href="/services" onClick={() => setOpenMobile(false)} className="hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.services")}</Link>
              <Link href="/partners" onClick={() => setOpenMobile(false)} className="hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.partners")}</Link>
              <Link href="/contact" onClick={() => setOpenMobile(false)} className="hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer font-medium">{t("navbar.contact")}</Link>
                              <button
                  onClick={() => { setOpenMobile(false); router.push(router.asPath, undefined, { locale: router.locale === "en" ? "tr" : "en" }); }}
                  className="mx-auto mt-4 text-xs uppercase tracking-wider px-3 py-1.5 rounded border border-white/10 hover:border-[var(--color-gold-400)] hover:text-[var(--color-gold-400)] text-white transition-all duration-200"
                >
                {router.locale === "en" ? "TR" : "EN"}
              </button>
            </div>
          </div>
        </motion.div>
      )}


    </div>
  );
}
