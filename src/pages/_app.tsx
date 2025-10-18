import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config.js";
import { siteConfig } from "../config";
import { useRouter } from "next/router";

declare global {
  interface Window {
    fbq?: (command: string, ...args: unknown[]) => void;
  }
}

// Type for navigator with maxTouchPoints
interface NavigatorWithMaxTouchPoints extends Navigator {
  maxTouchPoints: number;
}

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

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

  // Facebook Pixel - Check if loaded
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      console.log('✅ Facebook Pixel: Successfully loaded');
    } else {
      console.warn('⚠️ Facebook Pixel: Not loaded yet');
    }
  }, []);

  // Facebook Pixel - route change PageView
  useEffect(() => {
    const handleRouteChange = () => {
      // Simple tracking with small delay
      setTimeout(() => {
        if (typeof window !== "undefined" && window.fbq) {
          console.log('🔍 Facebook Pixel: PageView event triggered');
          window.fbq!('track', 'PageView');
          // Track content views on service-related pages
          const path = window.location.pathname || '';
          if (path.startsWith('/services')) {
            console.log('🔍 Facebook Pixel: ViewContent event triggered');
            window.fbq!('track', 'ViewContent');
          }
        } else {
          console.warn('⚠️ Facebook Pixel: fbq not available');
        }
      }, 100);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Facebook Pixel - global link click instrumentation for Contact and FindLocation
  useEffect(() => {

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      const tel = href.startsWith('tel:');
      const mailto = href.startsWith('mailto:');
      const isMap = /\b(google\.[^/]+\/maps|maps\.apple\.com|bing\.com\/maps)\b/i.test(href);

      if (tel || mailto || isMap) {
        // Simple tracking with small delay
        setTimeout(() => {
          if (typeof window !== "undefined" && window.fbq) {
            if (tel || mailto) {
              console.log('🔍 Facebook Pixel: Contact event triggered');
              window.fbq!('track', 'Contact');
            } else if (isMap) {
              console.log('🔍 Facebook Pixel: FindLocation event triggered');
              window.fbq!('track', 'FindLocation');
            }
          } else {
            console.warn('⚠️ Facebook Pixel: fbq not available');
          }
        }, 100);
      }
    };

    // Add event listener after a short delay to ensure fbq is loaded
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClick, { capture: true });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClick, true);
    };
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
        titleTemplate={`%s | ${siteConfig.name}`}
        defaultTitle={siteConfig.name}
        description={siteConfig.description}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: siteConfig.url,
          siteName: siteConfig.name,
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
              <Component {...pageProps} key="theme" />
    </>
  );
}
export default appWithTranslation(App, nextI18NextConfig);
