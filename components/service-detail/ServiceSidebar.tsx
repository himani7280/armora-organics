"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { serviceDetailContent } from "@/lib/content";

const data = serviceDetailContent;

export default function ServiceSidebar() {
  const { sidebar } = data;
  const [active, setActive] = useState(sidebar.activeTitle);
  return (
    <aside className="space-y-8">
      <div className="card-shadow overflow-hidden rounded-2xl border border-slate-100">
        <h3 className="bg-forest px-6 py-5 font-body text-2xl font-bold text-white">{sidebar.title}</h3>
        <ul className="p-2">
          {sidebar.items.map((s) => {
            const on = s.title === active;
            return (
              <li key={s.title}>
                <Link
                  href="/service-detail"
                  onClick={() => setActive(s.title)}
                  className={`flex items-center gap-4 rounded-xl px-3 py-3 ${on ? "bg-forest/10" : ""}`}
                >
                  <Image src={s.image} alt={s.title} width={90} height={82} className="h-[82px] w-[90px] shrink-0 rounded-lg object-cover" />
                  <span className="flex-1 font-body text-[15px] font-bold leading-6 text-forest">{s.title}</span>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${on ? "border-forest bg-forest text-white" : "border-slate-300 text-forest"}`}>
                    <FiChevronRight />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative min-h-[180px] overflow-hidden rounded-2xl border border-slate-100 p-7">
        <h3 className="font-body text-2xl font-bold">{sidebar.help.title}</h3>
        <p className="mt-3 max-w-[200px] text-[15px] leading-6 text-slate-700">{sidebar.help.text}</p>
        <Link href={sidebar.help.href} aria-label={sidebar.help.title} className="absolute inset-0" />
        <Image src={sidebar.help.image} alt="" width={120} height={170} className="pointer-events-none absolute bottom-0 right-0" />
      </div>
    </aside>
  );
}
