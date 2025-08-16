import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function BeforeAfter() {
  const { t } = useTranslation("common");
  const items = [
    { before: "/images/before-after/b1-before.jpg", after: "/images/before-after/b1-after.jpg" },
    { before: "/images/before-after/b2-before.jpg", after: "/images/before-after/b2-after.jpg" },
    { before: "/images/before-after/b3-before.jpg", after: "/images/before-after/b3-after.jpg" },
  ];
  return (
    <section className="py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">{t("beforeAfter.heading")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <div className="grid grid-cols-2">
                <div className="relative h-50">
                  <Image src={it.before} alt="before" fill className="object-cover" />
                  <div className="absolute bottom-2 left-2 text-xs px-2 py-0.5 rounded bg-black/60 text-white">{t("beforeAfter.before")}</div>
                </div>
                <div className="relative h-50">
                  <Image src={it.after} alt="after" fill className="object-cover" />
                  <div className="absolute bottom-2 left-2 text-xs px-2 py-0.5 rounded bg-black/60 text-white">{t("beforeAfter.after")}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




