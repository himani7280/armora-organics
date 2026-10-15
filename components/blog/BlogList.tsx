import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import { blogContent } from "@/lib/content";
import { Button, Card } from "@/components/ui";

const data = blogContent;

export default function BlogList() {
  return (
    <section className="py-10 sm:py-12 lg:py-[60px]">
      <div className="container-x">
        <SectionTitle pill eyebrow={data.intro.eyebrow} title={data.intro.title} accent={data.intro.accent} text={data.intro.text} />
        <div className="mx-auto mt-12 grid max-w-[1160px] gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-14">
          {data.posts.map((item, idx) => (
            <Card key={idx} className="group flex flex-col overflow-hidden">
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
                <Button href={item.href} size="md" fullWidth className="mt-6">
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
