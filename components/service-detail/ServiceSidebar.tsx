import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { serviceDetailContent } from "@/lib/content";
import { services, serviceHref } from "@/lib/catalog";

const data = serviceDetailContent;

export default function ServiceSidebar({ activeSlug }: { activeSlug?: string }) {
  const { sidebar } = data;
  return (
    <aside className="space-y-8">
      <div className="card-shadow overflow-hidden rounded-2xl border border-slate-100 bg-white">
        <h3 className="bg-forest px-6 py-5 font-body text-2xl font-bold text-white">{sidebar.title}</h3>
        <ul className="p-2 space-y-1">
          {services.map((s) => {
            const on = s.slug === activeSlug;
            return (
              <li key={s.slug}>
                <Link
                  href={serviceHref(s.slug)}
                  className={`group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-forest/5 ${on ? "bg-forest/10" : ""}`}
                >
                  <Image src={s.image} alt={s.title} width={90} height={82} className="h-[82px] w-[90px] shrink-0 rounded-lg object-cover" />
                  <span className="flex-1 font-body text-[15px] font-bold leading-6 text-forest transition-colors group-hover:text-leaf">{s.title}</span>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:bg-forest group-hover:text-white group-hover:scale-105 shadow-xs ${on ? "border-forest bg-forest text-white" : "border-slate-300 text-forest"}`}>
                    <FiChevronRight />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="group relative min-h-[180px] overflow-hidden rounded-2xl border border-slate-100 bg-[#fcf6e8] p-7 transition-all duration-300 hover:shadow-md">
        <h3 className="font-body text-2xl font-bold text-forest">{sidebar.help.title}</h3>
        <p className="mt-3 max-w-[200px] text-[15px] leading-6 text-slate-700">{sidebar.help.text}</p>
        <Link href={sidebar.help.href} aria-label={sidebar.help.title} className="absolute inset-0" />
        <Image src={sidebar.help.image} alt="" width={120} height={170} className="pointer-events-none absolute bottom-0 right-0 transition-transform duration-500 group-hover:scale-105" />
      </div>
    </aside>
  );
}
