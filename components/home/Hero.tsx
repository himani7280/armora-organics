import Image from "next/image";
import { FaLeaf } from "react-icons/fa6";
import { homeContent } from "@/lib/content";

export default function Hero() {
  const h = homeContent.hero;
  return (
    <section className="relative bg-white">
      <div className="hero-torn relative isolate min-h-[450px] overflow-hidden bg-[#17421b] lg:min-h-[480px]">
        <Image
          src={h.image}
          alt="Farmer holding a crate of fresh vegetables"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[75%_center]"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="container-x flex min-h-[450px] items-center py-16 lg:min-h-[480px]">
          <div className="max-w-[720px] text-white">
            <div className="flex items-center gap-3">
              <FaLeaf className="text-gold-light" />
              <span className="font-body text-sm uppercase tracking-[0.18em]">{h.eyebrow}</span>
              <span className="eyebrow-line hidden w-56 sm:block" />
            </div>
            <h1 className="mt-5 font-display text-[44px] font-bold uppercase leading-[1.08] text-white sm:text-6xl lg:text-[64px]">
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
