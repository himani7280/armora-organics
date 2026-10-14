import Image from "next/image";
import { contactContent } from "@/lib/content";

const data = contactContent;

export default function Promo() {
  const p = data.promo;
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-[#1d130b] text-white">
      <div className="relative h-56 shrink-0 sm:h-72 lg:h-[300px]">
        <Image src={p.image} alt="Young plant in sunlight" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1d130b] to-transparent" />
      </div>
      <div className="flex-1 px-7 pb-9 pt-2 sm:px-8">
        <h3 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
          {p.titleLine1} {p.titlePrefix} <span className="text-gold-light">{p.titleAccent}</span> {p.titleLine3}
        </h3>
        <span className="mt-4 block h-[3px] w-14 bg-gold-light" />
        <p className="mt-5 text-lg leading-8">{p.text}</p>
      </div>
    </div>
  );
}
