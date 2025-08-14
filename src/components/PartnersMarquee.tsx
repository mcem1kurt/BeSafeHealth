import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function PartnersMarquee() {
  const { t } = useTranslation("common");
  const logos = [
    { src: "/images/partners/goodlook.png", alt: "GoodLook", href: "https://goodlook.clinic/tr/", className: "h-28 scale-125" },
    { src: "/images/partners/yuzuncu-yil.png", alt: "100. Yıl Hastanesi", href: "https://www.100yilhastanesi.com.tr/", className: "h-28" },
    { src: "/images/partners/elit-istanbul.png", alt: "Elit Istanbul Tıp Merkezi", href: "https://www.elitistanbul.com.tr/", className: "h-28 scale-115" }
  ];

  // Duplicate logos multiple times for seamless infinite scroll
  const all = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="pt-24 pb-16  bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{t("partners.title")}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t("partners.subtitle")}
          </p>
        </div>
        
        <div className="relative overflow-x-hidden overflow-y-visible">
          {/* Left fade gradient to match page background */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0D1119] to-transparent z-10 pointer-events-none"></div>
          
          {/* Right fade gradient to match page background */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0D1119] to-transparent z-10 pointer-events-none"></div>
          
          <div className="marquee-outer py-8">
            <div className="marquee-track">
              {all.map((logo, idx) => (
                <a
                  key={`${logo.alt}-${idx}`}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-center min-w-[320px] bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 mx-4 my-2 cursor-pointer"
                >
                  <Image src={logo.src} alt={logo.alt} width={420} height={120} className={`logo-unify ${logo.className ?? "h-28"}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
