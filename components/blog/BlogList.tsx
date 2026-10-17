import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import { blogContent, blogs, blogHref } from "@/lib/content";
import { Button, Card } from "@/components/ui";

const data = blogContent;

export default function BlogList() {
  return (
    <section className="pt-8 pb-3 sm:pt-10 sm:pb-4 lg:pt-12 lg:pb-5">
      <div className="container-x">
        <SectionTitle pill eyebrow={data.intro.eyebrow} title={data.intro.title} accent={data.intro.accent} text={data.intro.text} />
        <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-6">
          {blogs.map((item) => (
            <Card
              key={item.slug}
              className="group flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(11,59,31,0.18)] hover:border-forest/25 will-change-transform"
            >
              <Link href={blogHref(item.slug)} className="relative aspect-[368/175] overflow-hidden block">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-108"
                />
                <div className="absolute left-[3.4%] top-[5.5%] flex h-[33%] w-[20.5%] flex-col items-center justify-center rounded-xl border border-slate-100 bg-white/95 text-center shadow transition-all duration-300 ease-out group-hover:scale-105 group-hover:bg-white group-hover:shadow-md">
                  <span className="block text-xl font-bold leading-none text-forest">{item.day}</span>
                  <span className="block text-[10px] font-semibold uppercase text-slate-500">{item.month}</span>
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="w-fit rounded-full border border-forest/20 bg-forest/5 px-4 py-1 font-eyebrow text-[11px] font-semibold uppercase tracking-wider text-forest transition-all duration-300 ease-out group-hover:border-forest group-hover:bg-forest group-hover:text-white">
                  {item.tag}
                </span>
                <Link href={blogHref(item.slug)}>
                  <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 ease-out group-hover:text-forest line-clamp-2">
                    {item.title}
                  </h3>
                </Link>
                <p className="mt-2.5 flex-1 text-[15px] leading-6 text-slate-600 line-clamp-3">
                  {item.text}
                </p>
                <Button href={blogHref(item.slug)} size="md" className="mt-5 self-start transition-all duration-300 ease-out group-hover:shadow-lg">
                  {data.readMoreLabel}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
