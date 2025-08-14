import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config.js";
import FloatingContactButton from "@/components/FloatingContactButton";

// Type for navigator with maxTouchPoints
interface NavigatorWithMaxTouchPoints extends Navigator {
  maxTouchPoints: number;
}

function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // Force dark mode on all users, regardless of system preference
    const forceDarkMode = () => {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      
      // Override any CSS media queries
      const style = document.createElement('style');
      style.textContent = `
        :root { color-scheme: dark !important; }
        html { color-scheme: dark !important; }
        body { color-scheme: dark !important; }
        * { color-scheme: dark !important; }
      `;
      document.head.appendChild(style);
    };
    
    forceDarkMode();
    
    // Also force it on any theme changes
    const observer = new MutationObserver(() => {
      if (!document.documentElement.classList.contains('dark')) {
        forceDarkMode();
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Desktop scroll smoothing (lightweight, no dependency)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = "ontouchstart" in window || (navigator as NavigatorWithMaxTouchPoints).maxTouchPoints > 0;
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReduced) return; // keep native scrolling on touch/reduced-motion

    let target = window.scrollY;
    let current = window.scrollY;
    let raf = 0 as number | 0;

    const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
    const animate = () => {
      const ease = 0.12; // lower = smoother
      current += (target - current) * ease;
      window.scrollTo(0, Math.round(current));
      if (Math.abs(target - current) > 0.5) {
        raf = window.requestAnimationFrame(animate);
      } else {
        raf = 0;
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // allow zoom
      e.preventDefault();
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      target = clamp(target + e.deltaY, 0, Math.max(0, maxScroll));
      if (!raf) raf = window.requestAnimationFrame(animate);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Theme toggling is handled in Navbar; keep only state initialization here

  return (
    <>
      {/* Head tags moved to _document for proper global font loading */}
      <DefaultSeo
        titleTemplate="%s | BeSafe Health"
        defaultTitle="BeSafe Health"
        description="Premium health tourism services in Turkey: hair transplant, dental, and aesthetic surgery with world-class doctors."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://besafehealth.com.tr",
          siteName: "BeSafe Health",
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
              <Component {...pageProps} key="theme" />
        <FloatingContactButton />
    </>
  );
}
export default appWithTranslation(App, nextI18NextConfig);
