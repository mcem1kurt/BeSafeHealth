import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "next-i18next";

type Props = {
  title: string;
  href: string;
  desc?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function ServiceCard({ title, href, imageSrc, imageAlt }: Props) {
  const { t } = useTranslation("common");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group bg-gradient-to-br from-[var(--color-gold-900)] via-[var(--color-gold-800)] to-[var(--color-gold-700)] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-gold-600)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--color-gold-400)] hover:shadow-[0_20px_60px_-10px_rgba(251,191,36,0.6)]"
    >
      <Link href={href} className="block cursor-pointer">
        <div className="relative w-full h-48 overflow-hidden">
          <Image 
            src={imageSrc || ""} 
            alt={imageAlt || title} 
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="p-4 sm:p-6 bg-gradient-to-b from-[var(--color-gold-800)] to-[var(--color-gold-900)] border-t border-[var(--color-gold-500)] relative overflow-hidden">
          <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[var(--color-gold-200)] transition-colors duration-300 mb-2 sm:mb-3">{title}</h3>
          <div className="flex items-center justify-between text-sm text-white/80 group-hover:text-[var(--color-gold-200)] transition-colors duration-300">
            <span className="font-medium">{t("cta.learnMore")}</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
