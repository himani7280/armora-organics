import Image from "next/image";
import type { IconType } from "react-icons";
import { FiCheck } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa6";
import { LuCoins, LuGlobe, LuHandHeart, LuSprout } from "react-icons/lu";
import ServiceSidebar from "@/components/service-detail/ServiceSidebar";
import { serviceDetailContent, type CatalogService } from "@/lib/content";
import { Button, Badge } from "@/components/ui";

const data = serviceDetailContent;

const benefitIcons: Record<string, IconType> = {
  leaf: LuSprout,
  hand: LuHandHeart,
  coins: LuCoins,
  globe: LuGlobe,
};

function Heading({
  children,
  className,
  barClassName,
}: {
  children: string;
  className?: string;
  barClassName?: string;
}) {
  return (
    <div>
      <h2 className={`text-3xl sm:text-4xl lg:text-[54px] ${className ?? ""}`}>{children}</h2>
      <span className={`mt-3 block h-[3px] rounded-full bg-gold ${barClassName ?? "w-14"}`} />
    </div>
  );
}

function splitTitle(title: string) {
  const words = title.split(" ");
  return words.length > 1 ? { title: words.slice(0, -1).join(" "), accent: words[words.length - 1] } : { title, accent: "" };
}

export default function ServiceDetail({ service }: { service?: CatalogService }) {
  const { overview, benefits, why } = data;
  const intro = service
    ? { ...data.intro, ...splitTitle(service.title), text: service.text, image: service.image }
    : data.intro;
  return (
    <section className="pt-8 pb-3 sm:pt-10 sm:pb-4 lg:pt-12 lg:pb-5">
      <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_320px] lg:gap-8">
        <div className="min-w-0">
          <div className="grid items-stretch gap-8 md:grid-cols-2">
            <div className="reveal-left flex flex-col justify-between">
              <div>
                <Badge icon variant="outline">
                  <span className="eyebrow">{intro.eyebrow}</span>
                </Badge>
                <h2 className="mt-5 font-serif text-4xl font-extrabold leading-tight text-forest sm:text-5xl lg:text-[54px]">
                  {intro.title}
                  <br />
                  <span className="text-gold">{intro.accent}</span>
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600 sm:text-[17px]">{intro.text}</p>
              </div>
              <Button href={intro.button.href} size="lg" className="mt-6 self-start">
                {intro.button.label}
              </Button>
            </div>
            <div className="reveal-right relative min-h-[340px] overflow-hidden rounded-2xl">
              <Image src={intro.image} alt={intro.title} fill quality={90} sizes="(min-width:768px) 30vw, 100vw" className="object-cover" priority />
            </div>
          </div>

          <div className="reveal-on-scroll mt-12">
            <Heading>{overview.title}</Heading>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-[17px]">{overview.text}</p>
            <div className="relative mt-6 aspect-[858/290] overflow-hidden rounded-2xl">
              <Image src={overview.image} alt={overview.title} fill quality={90} sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
            </div>
          </div>

          <div className="reveal-on-scroll mt-12">
            <Heading>{benefits.title}</Heading>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {benefits.items.map((b) => {
                const BIcon = benefitIcons[b.icon] ?? LuSprout;
                return (
                  <div key={b.title} className="group flex items-start gap-4 cursor-pointer">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-forest/10 text-leaf transition-all duration-300 group-hover:bg-forest group-hover:text-white group-hover:scale-105 shadow-xs">
                      <BIcon className="h-8 w-8" />
                    </span>
                    <div>
                      <h3 className="font-serif text-base font-bold text-forest transition-colors duration-200 group-hover:text-leaf">{b.title}</h3>
                      <p className="mt-1 text-sm leading-5 text-slate-500">{b.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="reveal-on-scroll mt-14 grid items-stretch gap-6 md:grid-cols-[360px_1fr] lg:grid-cols-[420px_1fr] xl:grid-cols-[460px_1fr]">
            <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl">
              <Image src={why.image} alt={why.title} fill quality={90} sizes="(min-width:1280px) 460px, (min-width:1024px) 420px, (min-width:768px) 360px, 100vw" className="object-cover" />
            </div>
            <div className="flex h-full flex-col justify-between">
              <div>
                <Heading className="text-2xl sm:text-[26px] lg:text-[28px] xl:text-[30px] sm:whitespace-nowrap" barClassName="w-20 sm:w-24">
                  {why.title}
                </Heading>
                <p className="mt-3.5 text-[15px] leading-6 text-slate-600">{why.text}</p>
              </div>
              <ul className="mt-4 space-y-2.5">
                {why.points.map((p) => (
                  <li key={p} className="group flex items-center gap-2.5 sm:gap-3 text-forest sm:whitespace-nowrap">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-white transition-all duration-300 group-hover:bg-gold group-hover:scale-105">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[13.5px] sm:text-[14px] lg:text-[14px] xl:text-[14.5px] transition-colors group-hover:text-leaf">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ServiceSidebar activeSlug={service?.slug} />
      </div>
    </section>
  );
}
