"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { testimonialsContent } from "@/lib/content";

const data = testimonialsContent;

export default function ReviewGrid() {
  const reviews = data.reviews;
  const total = reviews.length;

  /* ---- responsive: how many cards visible at once ---- */
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 768) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(total - perView, 0);
  const [current, setCurrent] = useState(0);

  const go = useCallback(
    (dir: number) =>
      setCurrent((prev) => {
        const next = prev + dir;
        if (next < 0) return maxIndex;
        if (next > maxIndex) return 0;
        return next;
      }),
    [maxIndex]
  );

  /* ---- auto-play ---- */
  useEffect(() => {
    const timer = setInterval(() => go(1), 4000);
    return () => clearInterval(timer);
  }, [go]);

  /* clamp index when perView changes */
  useEffect(() => {
    setCurrent((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const dotCount = maxIndex + 1;

  return (
    <section className="py-10 sm:py-12 lg:py-[60px] overflow-hidden">
      <div className="container-x">
        {/* ---- Carousel Track ---- */}
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / perView)}%)`,
            }}
          >
            {reviews.map((r) => (
              <div
                key={r.name}
                className="shrink-0 px-2.5"
                style={{ width: `${100 / perView}%` }}
              >
                <article className="flex h-full flex-col rounded-2xl border border-mint bg-gradient-to-br from-[#f1f7ea] to-white p-4 sm:flex-row sm:p-5 sm:pb-7 lg:flex-col xl:flex-row">
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    width={128}
                    height={128}
                    className="h-24 w-24 shrink-0 rounded-full object-cover sm:h-[110px] sm:w-[110px] xl:h-[126px] xl:w-[126px]"
                  />
                  <div className="relative mt-4 flex-1 sm:mt-0 sm:pl-5 xl:pl-6">
                    <span className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#f5ead2] text-gold">
                      <FaQuoteLeft className="h-4 w-4" />
                    </span>
                    <div className="flex gap-0.5 pt-1 text-sm text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="mt-3 text-[15px] leading-6 text-slate-600">
                      &ldquo;{r.quote}&rdquo;
                    </p>
                    <h3 className="mt-4 text-lg text-forest">{r.name}</h3>
                    <span className="mt-1 block h-0.5 w-9 bg-gold" />
                    <p className="mt-2 text-[15px] text-slate-500">{r.role}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Navigation ---- */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-mint text-forest transition hover:bg-forest hover:text-white"
          >
            <FiArrowLeft />
          </button>

          <div className="flex gap-2.5">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === current ? "bg-forest" : "bg-[#c9d8a8]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next review"
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-mint text-forest transition hover:bg-forest hover:text-white"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
