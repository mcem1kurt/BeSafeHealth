import { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function FAQ() {
  const { t } = useTranslation("common");
  const items = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-[#0b0b0b]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-10">{t("faq.heading")}</h2>
        <div className="space-y-4">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
                             <button className="w-full text-left font-semibold text-white cursor-pointer hover:bg-white/10 transition-colors duration-200 rounded-lg p-2 -m-2" onClick={() => setOpen(open === idx ? null : idx)}>
                 {it.q}
               </button>
              {open === idx && <p className="mt-2 text-gray-300">{it.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




