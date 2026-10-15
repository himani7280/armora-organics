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
          className="-z-20 object-cover object-[80%_25%] sm:object-[82%_22%] lg:object-[84%_20%]"
        />

        {/* Left-only overlay for text readability; right side has zero tint so the image remains 100% crystal clear */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-[58%] lg:w-[48%] bg-gradient-to-r from-[#07240e]/95 via-[#07240e]/65 via-55% to-transparent -z-10"
          aria-hidden="true"
        />

        <div className="container-x flex min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] items-center py-10 sm:py-14 lg:py-16 px-4 sm:px-5">
          <div className="max-w-[580px] lg:max-w-[680px] xl:max-w-[720px] text-white animate-banner-fade-up">
            <div className="flex items-center gap-3">
              <FaLeaf className="text-gold-light animate-float-slow" />
              <span className="font-body text-xs sm:text-sm uppercase tracking-[0.18em]">{h.eyebrow}</span>
              <span className="eyebrow-line hidden w-44 sm:block" />
            </div>
            <h1 className="mt-4 sm:mt-5 font-serif text-[20px] min-[350px]:text-[22px] min-[380px]:text-[25px] min-[420px]:text-[29px] sm:text-[40px] md:text-[46px] lg:text-[50px] xl:text-[54px] font-bold uppercase leading-[1.15] text-white drop-shadow-md">
              {h.titleLines.map((l) => (
                <span key={l} className="block whitespace-nowrap">{l}</span>
              ))}
              <span className="block text-gold-light whitespace-nowrap">{h.titleAccent}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
