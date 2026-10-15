import Image from "next/image";
import { FiCalendar, FiUser, FiClock, FiCheck } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import { blogDetailsContent } from "@/lib/content";

const data = blogDetailsContent;

export default function Article() {
  const a = data.article;
  return (
    <article className="min-w-0">
      <h2 className="font-serif text-4xl font-extrabold leading-tight sm:text-5xl">
        {a.titleLine1}
        <span className="block text-[#f47a1f]">{a.titleLine2}</span>
      </h2>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[17px] text-slate-700">
        <span className="group flex items-center gap-2 cursor-pointer">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest/5 text-[#f47a1f] transition-all duration-200 group-hover:bg-[#f47a1f] group-hover:text-white">
            <FiCalendar className="h-3.5 w-3.5" />
          </span>
          {a.date}
        </span>
        <span className="hidden h-4 w-px bg-slate-300 sm:block" />
        <span className="group flex items-center gap-2 cursor-pointer">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest/5 text-[#f47a1f] transition-all duration-200 group-hover:bg-[#f47a1f] group-hover:text-white">
            <FiUser className="h-3.5 w-3.5" />
          </span>
          {a.author}
        </span>
        <span className="hidden h-4 w-px bg-slate-300 sm:block" />
        <span className="group flex items-center gap-2 cursor-pointer">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest/5 text-[#f47a1f] transition-all duration-200 group-hover:bg-[#f47a1f] group-hover:text-white">
            <FiClock className="h-3.5 w-3.5" />
          </span>
          {a.readTime}
        </span>
      </div>
      <p className="mt-6 text-[17px] leading-8 text-slate-600">{a.intro}</p>
      <div className="relative mt-6 aspect-[758/316] overflow-hidden rounded-2xl">
        <Image src={a.image} alt={a.imageAlt} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
      </div>
      {a.sections.map((s) => (
        <div key={s.heading} className="mt-8">
          <h3 className="font-serif text-2xl font-extrabold">{s.heading}</h3>
          <span className="mt-3 block h-[3px] w-14 bg-[#f47a1f]" />
          <p className="mt-4 text-[17px] leading-8 text-slate-600">{s.text}</p>
        </div>
      ))}
      <blockquote className="mt-8 flex items-center gap-5 rounded-xl bg-mint/50 p-5 sm:gap-6 sm:px-8">
        <LuLeaf className="h-10 w-10 shrink-0 text-leaf" />
        <span className="h-14 w-[3px] shrink-0 bg-[#f47a1f]" />
        <p className="text-lg italic leading-8 text-slate-700">{a.quote}</p>
      </blockquote>
      <div className="mt-8">
        <h3 className="font-serif text-2xl font-extrabold">{a.maintain.heading}</h3>
        <span className="mt-3 block h-[3px] w-14 bg-[#f47a1f]" />
        <ul className="mt-5 space-y-3">
          {a.maintain.items.map((i) => (
            <li key={i} className="group flex items-start gap-3 text-[17px] text-slate-600 cursor-pointer">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-white transition-all duration-200 group-hover:bg-leaf group-hover:scale-110 shadow-xs"><FiCheck className="h-3.5 w-3.5" /></span>
              <span className="transition-colors group-hover:text-forest">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
