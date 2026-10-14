import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { blogContent } from "@/lib/content";

const data = blogContent;

export default function BlogList() {
  return (
    <section className="py-10 sm:py-12 lg:py-[60px]">
      <div className="container-x">
        <SectionTitle pill eyebrow={data.intro.eyebrow} title={data.intro.title} accent={data.intro.accent} text={data.intro.text} />
        <div className="mx-auto mt-12 grid max-w-[1160px] gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-14">
          {data.posts.map((item, idx) => (
            <article key={idx} className="group card-shadow flex flex-col overflow-hidden rounded-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[368/175] overflow-hidden">
                <Image src={item.image} alt={item.title} fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-[3.4%] top-[5.5%] flex h-[33%] w-[20.5%] flex-col items-center justify-center rounded-xl border border-slate-100 bg-white/95 text-center shadow">
                  <span className="block font-serif text-xl font-bold leading-none text-forest">{item.day}</span>
                  <span className="block text-[10px] font-semibold uppercase text-slate-500">{item.month}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="w-fit rounded-full border border-forest/20 px-4 py-1 font-eyebrow text-[11px] font-semibold uppercase tracking-wider text-forest">{item.tag}</span>
                <h3 className="mt-4 text-xl leading-snug transition-colors duration-200 group-hover:text-forest">{item.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-6 text-slate-600">{item.text}</p>
                <div className="mt-5 flex items-center justify-between">
                  <Link href={item.href} className="flex items-center gap-3 font-ui text-[15px] font-medium text-forest transition hover:text-leaf">
                    <span className="border-b-2 border-gold pb-0.5">{data.readMoreLabel}</span>
                    <span className="hidden h-px w-10 bg-gold sm:block" />
                  </Link>
                  <Link
                    href={item.href}
                    aria-label={`Read ${item.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-transparent text-forest transition-all duration-300 hover:bg-gold hover:text-white hover:scale-110 shadow-xs"
                  >
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
