import Image from "next/image";
import { FaLeaf } from "react-icons/fa6";
import { homeContent } from "@/lib/content";

export default function Hero() {
  const h = homeContent.hero;
  return (
    <section className="relative bg-white">
      {/* Hero container without zig-zag clip path, with reduced height */}
      <div className="relative isolate min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] overflow-hidden bg-[#0a2310]">
        <Image
          src={h.image}
          alt="Farmer holding a crate of fresh vegetables"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[78%_center]"
        />

        {/* Left-only overlay for text legibility; right side has zero overlay */}
        <div
          className="hero-overlay pointer-events-none absolute inset-y-0 left-0 w-full sm:w-[68%] lg:w-[55%] -z-10"
          aria-hidden="true"
        />

        <div className="container-x flex min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] items-center py-10 sm:py-14 lg:py-16">
          <div className="max-w-[560px] lg:max-w-[620px] text-white">
            <div className="flex items-center gap-3">
              <FaLeaf className="text-gold-light" />
              <span className="font-body text-xs sm:text-sm uppercase tracking-[0.18em]">{h.eyebrow}</span>
              <span className="eyebrow-line hidden w-44 sm:block" />
            </div>
            <h1 className="mt-4 sm:mt-5 font-display text-[34px] font-bold uppercase leading-[1.08] text-white sm:text-5xl lg:text-[58px] drop-shadow-md">
              {h.titleLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
              <span className="block text-gold-light">{h.titleAccent}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
