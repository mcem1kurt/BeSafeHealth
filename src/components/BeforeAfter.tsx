import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function BeforeAfter() {
  const { t } = useTranslation("common");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: false,
      align: "center",
      skipSnaps: false,
      dragFree: false,
      containScroll: "trimSnaps"
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  // 10 before/after cases with combined images
  const beforeAfterCases = [
    {
      id: 1,
      image: "/images/before-after/case1.png",
      age: "35",
      technique: "FUE",
      monthsLater: "6",
      country: "England",
      grafts: "5000",
      patientType: "Male"
    },
    {
      id: 2,
      image: "/images/before-after/case2.png",
      age: "42",
      technique: "FUE",
      monthsLater: "12",
      country: "Lithuanian",
      grafts: "5000",
      patientType: "Male"
    },
    {
      id: 3,
      image: "/images/before-after/case3.png",
      age: "38",
      technique: "FUE",
      monthsLater: "5",
      country: "Turkey",
      grafts: "5000",
      patientType: "Male"
    },
    {
      id: 4,
      image: "/images/before-after/case4.png",
      age: "36",
      technique: "DHI",
      monthsLater: "5",
      country: "Turkey",
      grafts: "3500",
      patientType: "Female"
    },
    {
      id: 5,
      image: "/images/before-after/case5.png",
      age: "31",
      technique: "Sapphire FUE",
      monthsLater: "9",
      country: "Italy",
      grafts: "2000",
      patientType: "Male"
    },
    {
      id: 6,
      image: "/images/before-after/case6.png",
      age: "39",
      technique: "FUE",
      monthsLater: "12",
      country: "Turkey",
      grafts: "5000",
      patientType: "Male"
    },
    {
      id: 7,
      image: "/images/before-after/case7.png",
      age: "44",
      technique: "FUE",
      monthsLater: "12",
      country: "Italy",
      grafts: "4500",
      patientType: "Male"
    },
    {
      id: 8,
      image: "/images/before-after/case8.png",
      age: "36",
      technique: "FUE",
      monthsLater: "7",
      country: "Albanian",
      grafts: "4500",
      patientType: "Male"
    },
    {
      id: 9,
      image: "/images/before-after/case9.png",
      age: "31",
      technique: "FUE",
      monthsLater: "7",
      country: "Turkey",
      grafts: "4500",
      patientType: "Male"
    }
  ];

  // Navigation functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Update selected index when carousel moves
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on("select", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">{t("beforeAfter.heading")}</h2>
        
        {/* Main Before & After Cards Container */}
        <div className="relative before-after-container">
          {/* Embla Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {beforeAfterCases.map((case_, index) => (
                <div
                  key={case_.id}
                  className="flex-shrink-0 w-80 lg:w-96"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-transparent">
                    {/* Main Image */}
                    <div className="relative h-64 lg:h-72 bg-gray-800">
                      <Image
                        src={case_.image}
                        alt={`Case ${case_.id} - Before & After`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        onError={(e) => {
                          // Fallback placeholder
                          const target = e.target as HTMLImageElement;
                          target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23F59E0B' font-size='18' font-family='Arial, sans-serif'%3ECase ${case_.id}%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                    </div>
                    
                    {/* Case details below image */}
                    <div className="p-4 space-y-3 bg-gray-800/90 rounded-b-2xl">
                      {/* Age and Technique row */}
                      <div className="flex justify-between items-center">
                        <div className="bg-gray-700/80 border border-gray-600/50 rounded-full px-4 py-2">
                          <span className="text-white font-medium text-sm">
                            {case_.age} {t("beforeAfter.labels.yearsOld")}
                          </span>
                        </div>
                        <div className="bg-gray-700/80 border border-gray-600/50 rounded-full px-4 py-2">
                          <span className="text-white font-medium text-sm">
                            {case_.technique}
                          </span>
                        </div>
                      </div>
                      
                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-gray-700/80 border border-gray-600/50 rounded-full px-3 py-2 text-center">
                          <div className="text-white font-semibold text-sm">{case_.monthsLater}</div>
                          <div className="text-white/70 text-xs">{t("beforeAfter.labels.monthLater")}</div>
                        </div>
                        <div className="bg-gray-700/80 border border-gray-600/50 rounded-full px-3 py-2 text-center">
                          <div className="text-white font-semibold text-sm">{t(`countries.${case_.country}`) || case_.country}</div>
                          <div className="text-white/70 text-xs">{t("beforeAfter.labels.country")}</div>
                        </div>
                        <div className="bg-gray-700/80 border border-gray-600/50 rounded-full px-3 py-2 text-center">
                          <div className="text-white font-semibold text-sm">{case_.grafts}</div>
                          <div className="text-white/70 text-xs">{t("beforeAfter.labels.graft")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Using Embla API */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              disabled={!emblaApi?.canScrollPrev()}
              className="w-12 h-12 rounded-full bg-gray-800/80 border border-gray-600/50 text-white hover:bg-gray-700/80 hover:border-gray-500/70 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} className="mx-auto" />
            </button>
            
            <button
              onClick={scrollNext}
              disabled={!emblaApi?.canScrollNext()}
              className="w-12 h-12 rounded-full bg-gray-800/80 border border-gray-600/50 text-white hover:bg-gray-700/80 hover:border-gray-500/70 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} className="mx-auto" />
            </button>
          </div>

                    {/* Dot Navigation - Hidden on mobile, visible on larger screens */}
          <div className="hidden sm:flex justify-center mt-6">
            <div className="flex gap-2">
              {beforeAfterCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`
                    relative overflow-hidden rounded-full transition-all duration-300 ease-out
                    ${index === selectedIndex 
                      ? 'bg-yellow-400 shadow-lg shadow-yellow-400/30 w-8 h-2' 
                      : 'bg-gray-600 hover:bg-gray-500 w-3 h-3'
                    }
                  `}
                >
                  {/* Active dot inner glow */}
                  {index === selectedIndex && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full animate-pulse" />
                  )}
                  
                  {/* Dot content */}
                  <div className={`
                    relative z-10 w-full h-full rounded-full transition-all duration-300
                    ${index === selectedIndex 
                      ? 'bg-yellow-400' 
                      : 'bg-gray-600'
                    }
                  `} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
