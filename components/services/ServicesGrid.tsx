import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import { Icon } from "@/components/common/icons";
import { servicesContent, services, serviceHref } from "@/lib/content";
import { Button, Card } from "@/components/ui";

const data = servicesContent;

export default function ServicesGrid() {
  const h = data.heading;
  return (
    <section className="pt-8 pb-3 sm:pt-10 sm:pb-4 lg:pt-12 lg:pb-5">
      <div className="container-x">
        <SectionTitle stacked eyebrow={h.eyebrow} title={h.title} accent={h.accent} text={h.text} />
        <div className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => {
            const href = serviceHref(item.slug);
            return (
              <Card key={item.slug} className="group flex flex-col overflow-hidden">
                <Link href={href} className="relative block h-44 overflow-hidden" aria-label={item.title}>
                  <Image src={item.image} alt={item.title} fill quality={90} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </Link>
                <div className="relative flex flex-1 flex-col px-6 pb-4 pt-10 text-center">
                  <Link href={href} className="absolute -top-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-gold bg-forest text-white transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-105 shadow-md" aria-label={item.title}>
                    <Icon name={item.icon} className="h-7 w-7" />
                  </Link>
                  <Link href={href}>
                    <h3 className="text-2xl transition-colors duration-200 group-hover:text-forest">{item.title}</h3>
                  </Link>
                  <p className="mt-3 flex-1 text-[15px] leading-6 text-slate-600">{item.text}</p>
                  <Button href={href} size="md" fullWidth className="mt-4">
                    {data.learnMoreLabel}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
