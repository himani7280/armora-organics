import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { Icon } from "@/components/common/icons";
import { servicesContent } from "@/lib/content";
import { services, serviceHref } from "@/lib/catalog";

const data = servicesContent;

export default function ServicesGrid() {
  const h = data.heading;
  return (
    <section className="py-10 sm:py-12 lg:py-[60px]">
      <div className="container-x">
        <SectionTitle stacked size="md" eyebrow={h.eyebrow} title={h.title} accent={h.accent} text={h.text} />
        <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <article key={item.slug} className="group card-shadow flex flex-col overflow-hidden rounded-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-44 overflow-hidden">
                <Image src={item.image} alt={item.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="relative flex flex-1 flex-col px-6 pb-6 pt-10 text-center">
                <span className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-gold bg-forest text-white transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-105 shadow-md">
                  <Icon name={item.icon} className="h-7 w-7" />
                </span>
                <h3 className="text-2xl transition-colors duration-200 group-hover:text-forest">{item.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-6 text-slate-600">{item.text}</p>
                <div className="mt-5 flex items-center justify-between">
                  <Link href={serviceHref(item.slug)} className="border-b-2 border-gold pb-0.5 font-ui text-[15px] font-medium text-forest transition hover:text-leaf">
                    {data.learnMoreLabel}
                  </Link>
                  <Link
                    href={serviceHref(item.slug)}
                    aria-label={`Learn more about ${item.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-forest text-white transition-all duration-300 hover:bg-gold hover:text-white hover:scale-110 shadow-xs"
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
