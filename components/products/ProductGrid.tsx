import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/common/SectionTitle";
import { Icon } from "@/components/common/icons";
import { productsContent } from "@/lib/content";

const data = productsContent;

export default function ProductGrid() {
  const { intro, items, buttonLabel } = data;
  return (
    <section className="py-10 sm:py-12 lg:py-[60px]">
      <div className="container-x">
        <SectionTitle pill eyebrow={intro.eyebrow} title={intro.title} accent={intro.accent} text={intro.text} />
        <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <article key={i} className="card-shadow flex flex-col overflow-hidden rounded-2xl border border-slate-100">
              <div className="relative h-48">
                <Image src={item.image} alt={item.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="relative flex flex-1 flex-col px-6 pb-6 pt-10 text-center">
                <span className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-gold bg-forest text-white">
                  <Icon name={item.icon} className="h-7 w-7" />
                </span>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-6 text-slate-600">{item.text}</p>
                <Link href={item.href} className="mt-6 flex items-center justify-between rounded-full border border-forest py-1.5 pl-6 pr-1.5 font-ui text-[15px] font-medium text-forest">
                  {buttonLabel}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white">
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
