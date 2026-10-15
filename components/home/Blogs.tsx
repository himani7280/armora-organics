import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import { homeContent } from "@/lib/content";
import { Button, Card } from "@/components/ui";

export default function Blogs() {
  const b = homeContent.blogs;
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="container-x">
        <SectionTitle pill eyebrow={b.eyebrow} title={b.title} accent={b.accent} text={b.text} />
        <div className="mx-auto mt-8 grid max-w-[1160px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {b.items.map((item) => (
            <Card key={item.title} className="group flex flex-col overflow-hidden">
              <Link href={item.href} className="relative block aspect-[368/175] overflow-hidden" aria-label={item.title}>
                <Image src={item.image} alt={item.title} fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-[3.4%] top-[5.5%] flex h-[33%] w-[20.5%] flex-col items-center justify-center rounded-xl border border-slate-100 bg-white/95 text-center shadow">
                  <span className="block font-serif text-xl font-bold leading-none text-forest">{item.day}</span>
                  <span className="block text-[10px] font-semibold uppercase text-slate-500">{item.month}</span>
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-7">
                <span className="w-fit rounded-full border border-forest/20 px-4 py-1 font-eyebrow text-[11px] font-semibold uppercase tracking-wider text-forest">{item.tag}</span>
                <Link href={item.href}>
                  <h3 className="mt-4 text-xl leading-snug transition-colors duration-200 group-hover:text-forest">{item.title}</h3>
                </Link>
                <p className="mt-3 flex-1 text-[15.5px] leading-[1.55] text-slate-600">{item.text}</p>
                <Button href={item.href} size="md" fullWidth className="mt-6">
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
