import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { Icon } from "@/components/common/icons";
import { homeContent } from "@/lib/content";

export default function Services({ showHeading = true }: { showHeading?: boolean }) {
  const s = homeContent.services;
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="container-x">
        {showHeading && <SectionTitle stacked size="md" eyebrow={s.eyebrow} title={s.title} accent={s.accent} text={s.text} />}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((item) => (
            <article key={item.title} className="card-shadow flex flex-col overflow-hidden rounded-2xl border border-slate-100">
              <div className="relative h-40">
                <Image src={item.image} alt={item.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="relative flex flex-1 flex-col px-6 pb-6 pt-10 text-center">
                <span className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-gold bg-forest text-white">
                  <Icon name={item.icon} className="h-7 w-7" />
                </span>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-2 flex-1 text-[15.5px] leading-[1.5] text-slate-600">{item.text}</p>
                <div className="mt-5 flex items-center justify-between">
                  <Link href={item.href} className="border-b-2 border-gold pb-0.5 font-ui text-[15px] font-medium text-forest">
                    Learn More
                  </Link>
                  <Link href={item.href} aria-label={`Learn more about ${item.title}`} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-forest text-white transition hover:bg-gold">
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
