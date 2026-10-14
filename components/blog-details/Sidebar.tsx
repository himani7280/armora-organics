import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { LuSprout } from "react-icons/lu";
import { blogDetailsContent } from "@/lib/content";

const data = blogDetailsContent;

export default function Sidebar() {
  const s = data.sidebar;
  return (
    <aside className="space-y-6">
      <div className="card-shadow rounded-2xl border border-slate-100 bg-white p-6">
        <h3 className="font-body text-2xl font-extrabold">{s.recentTitle}</h3>
        <span className="mt-3 block h-[3px] w-10 bg-[#f47a1f]" />
        <ul className="mt-6">
          {s.recent.map((p, i) => (
            <li key={p.title} className={i > 0 ? "mt-5 border-t border-slate-100 pt-5" : ""}>
              <Link href={p.href} className="group flex items-center gap-4">
                <span className="relative h-[90px] w-[107px] shrink-0 overflow-hidden rounded-lg">
                  <Image src={p.image} alt={p.title} fill sizes="107px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </span>
                <span>
                  <span className="block font-body text-[17px] font-bold leading-snug text-forest transition-colors group-hover:text-leaf">{p.title}</span>
                  <span className="mt-1 block text-slate-500">{p.date}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-shadow rounded-2xl border border-slate-100 bg-white p-6">
        <h3 className="font-body text-2xl font-extrabold">{s.tagsTitle}</h3>
        <span className="mt-3 block h-[3px] w-10 bg-[#f47a1f]" />
        <div className="mt-6 flex flex-wrap gap-3">
          {s.tags.map((t) => (
            <Link key={t} href="/blog" className="rounded-lg bg-mint/70 px-4 py-2 text-[15px] font-medium text-forest transition-all duration-200 hover:bg-forest hover:text-white">{t}</Link>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-forest-deep to-forest p-7 text-white">
        <LuSprout className="h-9 w-9 text-gold-light" />
        <h3 className="mt-5 font-body text-3xl font-extrabold leading-tight text-white">
          {s.cta.titleLine1}
          <span className="block">{s.cta.titlePrefix} <span className="text-[#f9a11b]">{s.cta.titleAccent}</span></span>
        </h3>
        <p className="mt-4 text-[16px] leading-7 text-white/90">{s.cta.text}</p>
        <Link href={s.cta.href} className="group mt-6 inline-flex items-center gap-6 rounded-full bg-gradient-to-r from-[#f47a1f] to-[#f9a11b] py-1.5 pl-7 pr-1.5 font-ui font-medium text-white shadow-md transition-all duration-300 hover:brightness-110 hover:shadow-lg">
          <span>{s.cta.button}</span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest transition-all duration-300 group-hover:bg-[#fcf6e8] group-hover:scale-105 shadow-xs"><FiChevronRight className="h-5 w-5" /></span>
        </Link>
      </div>
    </aside>
  );
}
