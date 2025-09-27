import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className="mt-2 border-t border-white/10 bg-gray-900/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-10 text-sm text-foreground/90">
        {/* Logo & Slogan */}
        <div className="flex flex-col gap-3">
          <Link href="/" aria-label="Be Safe Health" className="inline-flex items-center gap-2 cursor-pointer">
            <Image src="/images/logo-besafe-dark.png" alt="Be Safe Health" width={180} height={44} className="h-10 w-auto logo-transparent" />
          </Link>
        </div>
        {/* Quick Links */}
        <div>
          <div className="text-base font-semibold mb-3">{t("footer.quick_links")}</div>
          <ul className="space-y-2 text-foreground/80">
            <li><Link href="/about" className="hover:text-[var(--color-gold-400)] transition-colors">{t("footer.links.about")}</Link></li>
            <li><Link href="/services" className="hover:text-[var(--color-gold-400)] transition-colors">{t("footer.links.services")}</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-gold-400)] transition-colors">{t("footer.links.contact")}</Link></li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <div className="text-base font-semibold mb-3">{t("services.title")}</div>
          <ul className="space-y-2 text-foreground/80">
            <li><Link href="/services/hair-transplant" className="hover:text-[var(--color-gold-400)] transition-colors">{t("services.hair.title")}</Link></li>
            <li><Link href="/services/dental" className="hover:text-[var(--color-gold-400)] transition-colors">{t("services.dental.title")}</Link></li>
            <li><Link href="/services/plastic" className="hover:text-[var(--color-gold-400)] transition-colors">{t("services.plastic.title")}</Link></li>
          </ul>
        </div>
        {/* Contact & Social */}
        <div>
          <div className="text-base font-semibold mb-3">{t("footer.contact")}</div>
          <div className="space-y-2 text-foreground/80">
            <div className="flex items-center gap-2"><span className="text-gray-400">{t("footer.address")}</span></div>
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <a href={`tel:${t("footer.phone").replace(/\s+/g, '')}`} className="hover:text-[var(--color-gold-400)] transition-colors cursor-pointer">{t("footer.phone")}</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <a href={`mailto:${t("footer.email")}`} className="hover:text-[var(--color-gold-400)] transition-colors cursor-pointer">{t("footer.email")}</a>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <a href="https://instagram.com/besafehealthtr" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[var(--color-gold-400)] transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect width="18" height="18" x="3" y="3" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
              <span className="text-xs text-gray-400">Instagram</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-foreground/60">© 2024 BeSafe Health — {t("footer.copyright")}</div>
    </footer>
  );
}
