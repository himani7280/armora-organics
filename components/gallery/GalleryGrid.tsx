"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { galleryContent } from "@/lib/content";

const data = galleryContent;

export default function GalleryGrid() {
  const { intro, images } = data;
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <section className="py-10 sm:py-12 lg:py-[60px]">
      <div className="container-x">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl">
          {intro.title} <span className="text-gold">{intro.accent}</span>
        </h2>
        <span className="mt-3 block h-[3px] w-14 rounded bg-gold" />
        <p className="mt-5 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg">{intro.text}</p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open ${img.alt}`}
              className="card-shadow group relative block aspect-[3/2] overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/30"
          >
            <FiX />
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/30"
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/30"
          >
            <FiChevronRight />
          </button>
          <div className="relative h-[70vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[open].src} alt={images[open].alt} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
