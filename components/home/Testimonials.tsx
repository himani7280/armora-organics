"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa6";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { homeContent } from "@/lib/content";

const positions = [
  "left-[4%] top-[8%] w-[36%]",
  "left-[35%] top-[51%] w-[28%]",
  "left-[48%] top-[1%] w-[17%]",
  "left-[74%] top-[17%] w-[16%]",
  "left-[79%] top-[65%] w-[16%]",
];

export default function Testimonials() {
  const t = homeContent.testimonials;
  const [index, setIndex] = useState(0);
  const total = t.reviews.length;
  const review = t.reviews[index];
  const [paused, setPaused] = useState(false);
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  // Measure left column height so right image height equals left content exactly
  const leftColRef = useRef<HTMLDivElement>(null);
  const [leftHeight, setLeftHeight] = useState<number>(0);

  useEffect(() => {
    if (!leftColRef.current) return;
    const update = () => {
      if (leftColRef.current) {
        setLeftHeight(leftColRef.current.offsetHeight);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(leftColRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (paused || total < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 4500);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <section className="relative overflow-hidden pt-6 pb-2 sm:pt-8 sm:pb-3 lg:pt-10 lg:pb-4">
      <div className="container-x grid items-stretch gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10 xl:gap-14">
        {/* Left Column: Heading + Avatar Cluster (defines total section height) */}
        <div ref={leftColRef} className="reveal-left flex flex-col justify-center">
          <div>
            <SectionTitle
              align="left"
              stacked
              eyebrow={t.eyebrow}
              title={t.title}
              accent={t.accent}
              text={t.text}
              size="md"
            />
          </div>

          {/* Avatars Cluster */}
          <div
            className="relative mx-auto mt-4 sm:mt-6 aspect-[1.75/1] w-full max-w-[490px] lg:mx-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Decorative background accent dots matching design */}
            <span className="pointer-events-none absolute -left-2 top-6 h-8 w-8 rounded-full bg-[#dbe6b8]/50 blur-[0.5px]" aria-hidden="true" />
            <span className="pointer-events-none absolute left-6 -bottom-1 h-3.5 w-3.5 rounded-full bg-gold/80" aria-hidden="true" />
            <span className="pointer-events-none absolute left-[44%] bottom-4 h-4 w-4 rounded-full bg-[#e3eed0]/90" aria-hidden="true" />
            <span className="pointer-events-none absolute right-10 top-3 h-3.5 w-3.5 rounded-full bg-[#dbe6b8]/70" aria-hidden="true" />

            {t.avatars.map((src, i) => {
              const slotIndex = (i - index + total) % total;
              const isHero = slotIndex === 0;
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`View testimonial by ${t.reviews[i]?.name || `customer ${i + 1}`}`}
                  className={`group absolute aspect-square rounded-full p-0 transition-all duration-700 ease-out focus:outline-none ${
                    positions[slotIndex]
                  } ${
                    isHero
                      ? "z-20 border-[5px] border-white ring-4 ring-leaf/40 shadow-2xl scale-100 cursor-default"
                      : "z-10 border-4 border-white shadow-lg opacity-75 hover:opacity-100 hover:scale-105 cursor-pointer"
                  }`}
                >
                  <Image
                    src={src}
                    alt={t.reviews[i]?.name || "Customer avatar"}
                    fill
                    quality={95}
                    sizes="(max-width: 640px) 180px, (max-width: 1024px) 250px, 320px"
                    className="rounded-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Review Card & Controls
            - Height equals left content height
            - Right image extends to screen right edge with zero gap
            - Left edge of right image anchored behind feedback card
        */}
        <div
          className="reveal-right relative flex flex-col justify-center h-full"
          style={{ minHeight: leftHeight > 0 ? `${leftHeight}px` : undefined }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card & Background Image wrapper that matches left content height */}
          <div className="relative h-full flex flex-col justify-center w-full max-w-[480px] sm:max-w-[500px] lg:max-w-[520px] mx-auto lg:mx-0">
            {/* Decorative Right Image & Gold Block:
                - top-0 to bottom-0 spans the exact height of the left content
                - starts at card right edge minus overlap, extending 100vw to right screen edge
                - clipped cleanly at section edge (0 right space)
            */}
            <div
              className="pointer-events-none absolute top-0 bottom-0 left-[calc(100%-50px)] sm:left-[calc(100%-70px)] lg:left-[calc(100%-90px)] w-[100vw] z-0 flex flex-col"
              aria-hidden="true"
            >
              {/* Field vertical image */}
              <div className="relative w-full flex-1 overflow-hidden rounded-tl-[28px] sm:rounded-tl-[36px] lg:rounded-tl-[44px]">
                <Image
                  src={t.fieldImage}
                  alt="Organic farm field"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                />
              </div>
              {/* Gold accent corner block directly underneath */}
              <div className="h-12 sm:h-14 lg:h-16 w-full rounded-bl-[28px] sm:rounded-bl-[36px] lg:rounded-bl-[40px] bg-gold" />
            </div>

            {/* Testimonial Card - vertically centered, layered cleanly above the image */}
            <div
              key={index}
              className="relative z-10 animate-[testi-in_0.6s_ease] rounded-3xl border border-slate-100 p-6 sm:p-7 lg:p-8 shadow-xl bg-white w-full"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="mt-3.5 text-base sm:text-[17px] leading-7 text-slate-700 font-normal">
                “{review.quote}”
              </p>
              <div className="mt-5 flex items-center justify-between gap-4 pt-4 border-t border-slate-100/90">
                <div className="flex items-center gap-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={128}
                    height={128}
                    quality={95}
                    className="h-14 w-14 rounded-full object-cover shadow-sm ring-2 ring-leaf/20"
                  />
                  <span className="h-10 w-px bg-gold" />
                  <div>
                    <h4 className="text-lg font-bold text-forest">{review.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-500">{review.role}</p>
                  </div>
                </div>
                <FaQuoteRight className="hidden h-11 w-11 text-mint sm:block" />
              </div>
            </div>

            {/* Navigation Controls - centered under the feedback card */}
            <div className="relative z-10 mt-6 sm:mt-7 flex items-center justify-center gap-5 w-full">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => go(-1)}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-mint bg-white text-forest shadow-xs transition-all duration-300 hover:bg-forest hover:text-white hover:scale-105 cursor-pointer"
              >
                <FiArrowLeft />
              </button>
              <div className="flex gap-2.5 items-center">
                {Array.from({ length: total }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show review ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === index ? "w-6 bg-forest" : "w-2.5 bg-[#c9d8a8] hover:bg-forest/50"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => go(1)}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-mint bg-white text-forest shadow-xs transition-all duration-300 hover:bg-forest hover:text-white hover:scale-105 cursor-pointer"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
