import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

const GoogleReviews = () => {
    const { t } = useTranslation("common");
    const [currentIndex, setCurrentIndex] = useState(0);

    // Get reviews from i18n translations
    const reviews = t("reviews.list", { returnObjects: true }) as Array<{
        id: number;
        name: string;
        date: string;
        rating: number;
        profileLetter: string;
        profileColor: string;
        review: string;
        shortReview: string;
    }>;

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [reviews.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                    >
                        {t("reviews.heading")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4"
                    >
                        {t("reviews.subtitle")}
                    </motion.p>
                </div>

                {/* Reviews Showroom */}
                <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
                    {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
                    {/* LEFT */}
                    {/* LEFT */}
                    <button
                        onClick={prevSlide}
                        className="hidden sm:inline-grid place-items-center absolute -left-16 lg:-left-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gray-800 shadow-xl border-2 border-gray-600 hover:border-gray-500 hover:shadow-2xl transition-all duration-300"
                    >
                                                 <svg
                             className="w-6 h-6 block pointer-events-none shrink-0 -translate-x-[0.5px] text-white"  // 👈 tiny optical nudge
                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         >
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
                         </svg>
                    </button>

                    {/* RIGHT */}
                    <button
                        onClick={nextSlide}
                                                 className="hidden sm:inline-grid place-items-center absolute -right-16 lg:-right-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gray-800 shadow-xl border-2 border-gray-600 hover:border-gray-500 hover:shadow-2xl transition-all duration-300"
                    >
                                                 <svg
                             className="w-6 h-6 block pointer-events-none shrink-0 translate-x-[0.5px] text-white"   // mirror nudge for symmetry
                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         >
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                         </svg>
                    </button>



                    {/* Review Card */}
                    <div className="relative h-96 sm:h-[28rem] lg:h-[32rem]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <div className="bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-700 h-full flex flex-col">
                                    {/* Profile Section */}
                                    <div className="flex items-center mb-6 sm:mb-8">
                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r ${reviews[currentIndex].profileColor} flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl mr-4 sm:mr-6 shadow-lg`}>
                                            {reviews[currentIndex].profileLetter}
                                        </div>
                                        <div>
                                                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                                                    {reviews[currentIndex].name}
                                                </h3>
                                                <p className="text-sm sm:text-base lg:text-lg text-gray-400">
                                                    {reviews[currentIndex].date}
                                                </p>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex mb-4 sm:mb-6">
                                        {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <div className="flex-1">
                                                                                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                                                    &ldquo;{reviews[currentIndex].review}&rdquo;
                                                </p>
                                    </div>

                                    {/* Google Badge */}
                                    <div className="flex items-center justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                                                                        <span className="text-sm sm:text-base text-gray-400 font-medium">{t("reviews.googleBadge")}</span>
                                            </div>
                                            <div className="text-xs sm:text-sm text-gray-500">
                                                {currentIndex + 1} / {reviews.length}
                                            </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Mobile Navigation - Swipe hint */}
                    <div className="sm:hidden text-center mt-4">
                                                        <p className="text-sm text-gray-400">{t("reviews.swipeHint")}</p>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                                                         ? 'bg-white scale-125 shadow-lg'
                                     : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;
