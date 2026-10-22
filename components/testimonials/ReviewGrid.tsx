"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa6";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { testimonialsContent } from "@/lib/content";

interface ReviewItem {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const data = testimonialsContent as { reviews: ReviewItem[] };

function TestimonialCard({ review }: { review: ReviewItem }) {
  return (
    <article className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#e3edd5] bg-[#fbfdf9] p-5 sm:p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:border-leaf/40 hover:-translate-y-1 active:scale-[0.985] active:duration-150">
      <div className="flex gap-4 sm:gap-5">
        {/* Left Column: Avatar + Name + Underline + Role */}
        <div className="flex w-[100px] sm:w-[115px] shrink-0 flex-col items-start text-left">
          <div className="relative h-20 w-20 sm:h-[84px] sm:w-[84px] shrink-0 overflow-hidden rounded-full border-2 border-white ring-2 ring-[#a4c97a]/60 shadow-xs">
            <Image
              src={review.avatar}
              alt={review.name}
              fill
              quality={95}
              sizes="100px"
              className="object-cover rounded-full"
            />
          </div>
          <h3 className="mt-3 sm:mt-3.5 font-serif font-bold text-forest text-[15px] sm:text-[17px] leading-tight text-left">
            {review.name}
          </h3>
          <span className="mt-1.5 block h-[2.5px] w-7 sm:w-8 rounded-full bg-gold" />
          <p className="mt-1.5 text-xs sm:text-[13px] text-slate-500 font-normal leading-snug text-left">
            {review.role}
          </p>
        </div>

        {/* Right Column: Stars + Quote Icon Badge + Review Quote */}
        <div className="flex flex-1 min-w-0 flex-col justify-start">
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1 text-[#e5a824] text-sm sm:text-[15px]">
              {Array.from({ length: 5 }).map((_, starIdx) => (
                <FaStar key={starIdx} />
              ))}
            </div>
            <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#faeed6] text-[#c98a2c] shadow-2xs">
              <FaQuoteRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
          </div>

          <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-slate-600 font-normal">
            &ldquo;{review.quote}&rdquo;
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ReviewGrid() {
  const reviews = data.reviews;

 
  const [colsVisible, setColsVisible] = useState(3);

  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth >= 1024) setColsVisible(3);
      else if (window.innerWidth >= 768) setColsVisible(2);
      else setColsVisible(1);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);


  const baseColumns = useMemo(() => {
    return Array.from({ length: 9 }).map((_, i) => ({
      id: i,
      top: reviews[i % 9],
      bottom: reviews[(i + 3) % 9],
    }));
  }, [reviews]);

  const baseCount = baseColumns.length; // 9

  // Cloned sets for seamless infinite X-axis scrolling without any rewind/reverse jump
  const displayColumns = useMemo(() => {
    return [...baseColumns, ...baseColumns, ...baseColumns];
  }, [baseColumns]);

  // Start in the middle set at index baseCount (index 9)
  const [currentIndex, setCurrentIndex] = useState(baseCount);
  const [withTransition, setWithTransition] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Advance by 1 vertical column along the X-axis
  const go = useCallback(
    (dir: number) => {
      setWithTransition(true);
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + dir);
    },
    []
  );

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= 2 * baseCount) {
      setWithTransition(false);
      setCurrentIndex((prev) => prev - baseCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
    } else if (currentIndex < baseCount) {
      setWithTransition(false);
      setCurrentIndex((prev) => prev + baseCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
    }
  };

  // Autoplay: 1 column forward along X-axis every 3.5 seconds in continuous infinite loop
  useEffect(() => {
    autoPlayTimerRef.current = setInterval(() => {
      go(1);
    }, 3500);
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [go, currentIndex]);

  // 4 Navigation Dots mapping across the 9 column positions
  const DOT_COUNT = 4;
  const dotTargets = [0, 2, 5, 7];
  const currentCol = ((currentIndex % baseCount) + baseCount) % baseCount;
  const activeDot =
    currentCol <= 1 ? 0 : currentCol <= 3 ? 1 : currentCol <= 6 ? 2 : 3;

  // Jump to one of the 4 dots using shortest circular direction (never rewinds)
  const goToDot = (dotIndex: number) => {
    const targetCol = dotTargets[dotIndex];
    let diff = targetCol - currentCol;
    if (diff > baseCount / 2) diff -= baseCount;
    else if (diff < -baseCount / 2) diff += baseCount;
    go(diff);
  };

  // Touch swipe support for mobile (X-axis swipe)
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) {
      go(1); 
    } else if (distance < -45) {
      go(-1);
    }
  };

  const colWidthPercent = 100 / colsVisible;

  return (
    <section className="reveal-on-scroll pt-8 pb-3 sm:pt-10 sm:pb-4 lg:pt-12 lg:pb-5 overflow-hidden bg-white">
      <div className="container-x">
        {/* ---- X-Axis Carousel Viewport (Shows exactly 6 cards: 3 columns x 2 rows) ---- */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            suppressHydrationWarning
            className="flex"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * colWidthPercent}%)`,
              transition: withTransition
                ? "transform 650ms cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
            }}
          >
            {displayColumns.map((col, idx) => (
              <div
                key={`${idx}-${col.id}`}
                suppressHydrationWarning
                className="shrink-0 px-2.5 sm:px-3 w-full md:w-1/2 lg:w-1/3"
                style={{ width: `${colWidthPercent}%` }}
              >
                {/* 1 Vertical Column containing 2 Cards */}
                <div className="flex flex-col gap-5 sm:gap-6 h-full">
                  <div className="flex-1">
                    <TestimonialCard review={col.top} />
                  </div>
                  <div className="flex-1">
                    <TestimonialCard review={col.bottom} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Navigation Controls: X-Axis Horizontal Arrows + 4 Step Dots ---- */}
        <div className="mt-5 sm:mt-6 flex items-center justify-center gap-4 sm:gap-5">
          <button
            type="button"
            aria-label="Previous column"
            onClick={() => go(-1)}
            disabled={isTransitioning}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-mint bg-white text-forest shadow-xs transition-all duration-300 hover:bg-forest hover:text-white hover:scale-105 cursor-pointer disabled:opacity-60"
          >
            <FiArrowLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2.5">
            {Array.from({ length: DOT_COUNT }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial group ${i + 1}`}
                onClick={() => goToDot(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeDot
                    ? "w-7 bg-forest"
                    : "w-2.5 bg-[#c9d8a8] hover:bg-forest/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next column"
            onClick={() => go(1)}
            disabled={isTransitioning}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-mint bg-white text-forest shadow-xs transition-all duration-300 hover:bg-forest hover:text-white hover:scale-105 cursor-pointer disabled:opacity-60"
          >
            <FiArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
