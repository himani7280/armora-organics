import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { Icon } from "@/components/common/icons";
import { homeContent } from "@/lib/content";
import { productHrefByTitle } from "@/lib/catalog";

export default function Products({ showHeading = true }: { showHeading?: boolean }) {
  const p = homeContent.products;
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="container-x">
        {showHeading && <SectionTitle pill eyebrow={p.eyebrow} title={p.title} accent={p.accent} text={p.text} />}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {p.items.map((item) => (
            <article key={item.title} className="group card-shadow flex flex-col overflow-hidden rounded-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <Image src={item.image} alt={item.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="relative flex flex-1 flex-col px-6 pb-6 pt-10 text-center">
                <span className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-gold bg-forest text-white transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-105 shadow-md">
                  <Icon name={item.icon} className="h-7 w-7" />
                </span>
                <h3 className="text-2xl transition-colors duration-200 group-hover:text-forest">{item.title}</h3>
                <p className="mt-3 flex-1 text-[15.5px] leading-[1.55] text-slate-600">{item.text}</p>
                <Link href={productHrefByTitle(item.title)} className="group/link mt-6 flex items-center justify-between rounded-full border border-forest py-1.5 pl-6 pr-1.5 font-ui text-[15px] font-medium text-forest transition-colors hover:bg-forest hover:text-white">
                  <span className="pl-2">Explore More</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white transition-all duration-300 group-hover/link:bg-gold group-hover/link:text-forest">
                    <FiArrowRight />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
