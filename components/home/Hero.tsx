"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa6";
import { homeContent } from "@/lib/content";

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  eyebrow: string;
  titleLines: string[];
  titleAccent: string;
}

export default function Hero() {
  const h = homeContent.hero;

  const slides: HeroSlide[] = [
    {
      id: 1,
      image: h.image || "/images/home/hero-farmer.jpg",
      alt: "Farmer holding a crate of fresh vegetables",
      eyebrow: h.eyebrow || "Natural Farming",
      titleLines: ["Pure & Organic", "Food For A"],
      titleAccent: "Healthier Tomorrow",
    },
    {
      id: 2,
      image: "/images/home/hero-farmer-2.jpg",
      alt: "Organic farmer standing in fertile green field",
      eyebrow: "Sustainable Agriculture",
      titleLines: ["Naturally Grown", "Fresh From Our"],
      titleAccent: "Organic Farms",
    },
    {
      id: 3,
      image: "/images/home/hero-farmer-3.jpg",
      alt: "Farmer holding wooden crate of freshly harvested organic produce",
      eyebrow: "Farm Fresh Harvest",
      titleLines: ["Pure Goodness", "Harvested For Your"],
      titleAccent: "Health & Family",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Automatic carousel running continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      aria-label="Hero Banner Slider"
      className="relative bg-white select-none"
    >
      <div className="relative isolate min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] overflow-hidden bg-[#0a2310]">
        {/* Slides */}
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background image with subtle Ken Burns zoom */}
              <div
                className={`absolute inset-0 transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  quality={90}
                  sizes="100vw"
                  className="object-cover object-[80%_25%] sm:object-[82%_22%] lg:object-[84%_20%]"
                />
              </div>

              {/* Left-only overlay for text readability; right side has zero tint so image remains crystal clear */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[54%] bg-gradient-to-r from-[#07240e]/95 via-[#07240e]/75 via-55% to-transparent z-10"
                aria-hidden="true"
              />

              {/* Hero content vertically centered on the left */}
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="container-x w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-5">
                  <div className="max-w-[580px] lg:max-w-[680px] xl:max-w-[720px] text-white animate-banner-fade-up">
                    <div className="flex items-center gap-3">
                      <FaLeaf className="text-gold-light animate-float-slow text-sm sm:text-base shrink-0" />
                      <span className="font-body text-xs sm:text-sm uppercase tracking-[0.18em] text-white">
                        {slide.eyebrow}
                      </span>
                      <span className="eyebrow-line hidden w-44 sm:block" />
                    </div>

                    {/* 3 lines title in exact original Playfair Display font */}
                    <h1 className="mt-4 sm:mt-5 font-serif text-[20px] min-[350px]:text-[22px] min-[380px]:text-[25px] min-[420px]:text-[29px] sm:text-[40px] md:text-[46px] lg:text-[54px] font-bold uppercase leading-[1.15] drop-shadow-md">
                      {slide.titleLines.map((line) => (
                        <span key={line} className="block whitespace-nowrap text-white">
                          {line}
                        </span>
                      ))}
                      <span className="block whitespace-nowrap text-gold-light">
                        {slide.titleAccent}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Bottom Pagination Indicator Dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/30 backdrop-blur-sm py-1 px-2.5 rounded-full border border-white/10">
          {slides.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                  isActive
                    ? "w-7 sm:w-8 h-2.5 bg-gold"
                    : "w-2.5 h-2.5 bg-white/50 hover:bg-white"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
