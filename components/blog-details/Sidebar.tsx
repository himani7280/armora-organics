import Image from "next/image";
import Link from "next/link";
import { blogs, blogHref, blogDetailsContent } from "@/lib/content";
import { Card } from "@/components/ui";

const data = blogDetailsContent;

export default function Sidebar({
  activeSlug,
  activeCategory,
}: {
  activeSlug?: string;
  activeCategory?: string;
}) {
  const s = data.sidebar;

  return (
    <aside className="space-y-6">
      <Card hoverEffect={false} className="p-6">
        <h3 className="font-serif text-2xl font-extrabold">{s.recentTitle}</h3>
        <span className="mt-3 block h-[3px] w-10 rounded-full bg-gold" />

        <ul className="mt-6 space-y-4">
          {blogs.map((p, i) => {
            const isCategorySelected =
              activeCategory && p.tag.toLowerCase() === activeCategory.toLowerCase();
            const isCurrentPost = activeSlug && p.slug === activeSlug;
            return (
              <li
                key={p.slug}
                className={`${i > 0 ? "border-t border-slate-100 pt-4" : ""} ${
                  isCurrentPost
                    ? "rounded-xl bg-forest/[0.04] p-2.5 -mx-2.5 border border-forest/15"
                    : ""
                }`}
              >
                <Link href={blogHref(p.slug)} className="group flex items-start gap-3.5">
                  <span className="relative h-[78px] w-[90px] shrink-0 overflow-hidden rounded-lg block">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="90px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <div className="flex-1 min-w-0">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                        isCategorySelected
                          ? "bg-forest text-white shadow-xs ring-1 ring-gold font-bold"
                          : "bg-forest/10 text-forest group-hover:bg-forest group-hover:text-white"
                      }`}
                    >
                      {p.tag}
                    </span>
                    <span className="mt-1 block font-body text-[14.5px] font-bold leading-snug text-forest transition-colors group-hover:text-leaf line-clamp-2">
                      {p.title}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500">
                      {p.day} {p.month}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Card>
    </aside>
  );
}
