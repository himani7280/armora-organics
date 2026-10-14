"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa6";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { homeContent } from "@/lib/content";

const positions = [
  "left-[5%] top-[10%] w-[34%]",
  "left-[34%] top-[51%] w-[28%]",
  "left-[48%] top-[0%] w-[16%]",
  "left-[75%] top-[18%] w-[15%]",
  "left-[80%] top-[67%] w-[15%]",
];

export default function Testimonials() {
  const t = homeContent.testimonials;
  const [index, setIndex] = useState(0);
  const total = t.reviews.length;
  const review = t.reviews[index];
  const [paused, setPaused] = useState(false);
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  useEffect(() => {
    if (paused || total < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 4500);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <section className="overflow-hidden py-6 sm:py-8 lg:py-10">
      <div className="container-x">
        <SectionTitle stacked eyebrow={t.eyebrow} title={t.title} accent={t.accent} text={t.text} />
      </div>
      <div className="container-x mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <div className="relative mx-auto aspect-[1.73/1] w-full max-w-[520px]">
          {t.avatars.map((src, i) => (
            <Image key={src} src={src} alt="Happy customer" width={185} height={185} className={`absolute aspect-square rounded-full border-4 border-white object-cover shadow-lg ${positions[i]}`} />
          ))}
        </div>

        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="absolute -right-5 top-0 hidden h-[380px] w-[101px] overflow-hidden rounded-tl-3xl sm:block lg:-right-[calc((100vw-1300px)/2+20px)] lg:w-[101px]">
            <Image src={t.fieldImage} alt="" fill sizes="101px" className="object-cover" />
          </div>
          <div key={index} className="relative z-10 animate-[testi-in_0.6s_ease] rounded-3xl border border-slate-100 p-7 shadow-xl sm:mr-[100px] sm:p-10 bg-white">
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="mt-5 text-lg leading-8 text-slate-700">“{review.quote}”</p>
            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                <Image src={review.avatar} alt={review.name} width={82} height={82} className="h-16 w-16 rounded-full object-cover" />
                <span className="h-12 w-px bg-gold" />
                <div>
                  <h4 className="text-xl">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
              <FaQuoteRight className="hidden h-14 w-14 text-mint sm:block" />
            </div>
          </div>
          <div className="relative z-10 mt-8 flex items-center justify-center gap-6 sm:mr-[100px]">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-mint bg-white text-forest shadow-xs transition-all duration-300 hover:bg-forest hover:text-white hover:scale-105"
            >
              <FiArrowLeft />
            </button>
            <div className="flex gap-3">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === index ? "bg-forest" : "bg-[#c9d8a8]"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-mint bg-white text-forest shadow-xs transition-all duration-300 hover:bg-forest hover:text-white hover:scale-105"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
