import Image from "next/image";
import { contactContent } from "@/lib/content";

const data = contactContent;

export default function Promo() {
  const p = data.promo;
  return (
    <div className="reveal-right flex flex-col overflow-hidden rounded-2xl bg-[#1d130b] text-white h-full justify-between">
      <div className="relative min-h-[170px] sm:min-h-[190px] flex-1 overflow-hidden">
        <Image src={p.image} alt="Young plant in sunlight" fill quality={90} sizes="(min-width:1024px) 40vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1d130b] to-transparent" />
      </div>
      <div className="shrink-0 p-5 sm:p-6 lg:p-7 flex flex-col justify-center">
        <h3 className="font-serif text-2xl leading-snug text-white sm:text-3xl">
          {p.titleLine1} {p.titlePrefix} <span className="text-gold-light">{p.titleAccent}</span> {p.titleLine3}
        </h3>
        <span className="mt-2 block h-[3px] w-12 bg-gold-light" />
        <p className="mt-2 text-[15px] leading-relaxed text-slate-200">{p.text}</p>
      </div>
    </div>
  );
}
