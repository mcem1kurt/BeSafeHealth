import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className="mt-2 border-t border-white/10 bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-sm text-foreground/90 grid md:grid-cols-3 gap-8">
        <div>
          <Link href="/" aria-label="Be Safe Health" className="inline-flex items-center gap-2 cursor-pointer">
            <Image src="/images/logo-besafe-dark.png" alt="Be Safe Health" width={180} height={44} className="h-10 w-auto logo-transparent" />
          </Link>
          <div className="mt-3 text-white/90">{t("agency.title")}</div>
        </div>
        <div>
          <div className="text-base font-semibold">{t("footer.quick_links")}</div>
          <div className="mt-3 flex flex-col gap-2 text-foreground/80">
            <Link href="/about" className="cursor-pointer">{t("footer.links.about")}</Link>
            <Link href="/services" className="cursor-pointer">{t("footer.links.services")}</Link>
            <Link href="/partners" className="cursor-pointer">{t("footer.links.partners")}</Link>
            <Link href="/contact" className="cursor-pointer">{t("footer.links.contact")}</Link>
          </div>
        </div>
        <div>
          <div className="text-base font-semibold">{t("footer.contact")}</div>
          <div className="mt-3 space-y-2 text-foreground/80">
            <div>{t("footer.address")}</div>
            <div className="flex items-center gap-2"><Phone size={14} /> {t("footer.phone")}</div>
            <div className="flex items-center gap-2"><Mail size={14} /> {t("footer.email")}</div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <a href="https://instagram.com/besafehealth" target="_blank" rel="noreferrer" className="hover:text-[var(--color-gold-400)] transition-colors duration-200 cursor-pointer">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-foreground/60">© {new Date().getFullYear()} BeSafe Health — {t("footer.copyright")}</div>
    </footer>
  );
}
