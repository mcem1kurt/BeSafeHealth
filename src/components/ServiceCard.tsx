import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  external?: boolean;
  subServices?: Array<{
    title: string;
    description: string;
  }>;
}

export default function ServiceCard({ title, subtitle, description, image, href, external, subServices }: ServiceCardProps) {
  const CardContent = () => (
    <div className="relative h-full rounded-2xl border border-gray-700 bg-gray-800/50 p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden">
      
      {/* Simple background that changes on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Image */}
        <div className="relative mb-6 overflow-hidden rounded-xl bg-gray-700">
          <Image
            src={image}
            alt={title}
            width={400}
            height={250}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23F59E0B' font-size='24' font-family='Arial, sans-serif'%3E" + title + "%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>

        {/* Title and Subtitle */}
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 mb-2">
          {title}
        </h3>
        <p className="text-lg font-medium text-yellow-400 mb-3">
          {subtitle}
        </p>
        
        {/* Description */}
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Sub-services list */}
        {subServices && subServices.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-yellow-300 mb-2">Hizmetlerimiz:</h4>
            <div className="grid grid-cols-1 gap-1">
              {subServices.slice(0, 4).map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span className="truncate">{service.title}</span>
                </div>
              ))}
              {subServices.length > 4 && (
                <div className="text-xs text-yellow-400 font-medium mt-1">
                  +{subServices.length - 4} daha...
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-6 flex items-center gap-2 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
          <span className="text-sm font-medium">{external ? "Siteyi Ziyaret Et" : "Detayları Gör"}</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="group">
        <CardContent />
      </a>
    );
  }

  return (
    <Link href={href} className="group">
      <CardContent />
    </Link>
  );
}
