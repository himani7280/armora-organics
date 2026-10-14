import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa6";
import { LuCoins, LuGlobe, LuHandHeart, LuSprout } from "react-icons/lu";
import ServiceSidebar from "@/components/service-detail/ServiceSidebar";
import { serviceDetailContent } from "@/lib/content";

const data = serviceDetailContent;

const benefitIcons: Record<string, IconType> = {
  leaf: LuSprout,
  hand: LuHandHeart,
  coins: LuCoins,
  globe: LuGlobe,
};

function Heading({ children }: { children: string }) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl">{children}</h2>
      <span className="mt-3 block h-[3px] w-14 bg-gold" />
    </div>
  );
}

export default function ServiceDetail() {
  const { intro, overview, benefits, why } = data;
  return (
    <section className="py-10 sm:py-12 lg:py-[60px]">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-8">
        <div className="min-w-0">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-5 py-2">
                <FaLeaf className="text-forest" />
                <span className="eyebrow">{intro.eyebrow}</span>
              </span>
              <h2 className="mt-5 font-body text-4xl font-extrabold leading-tight text-forest sm:text-5xl">
                {intro.title}
                <br />
                <span className="text-gold">{intro.accent}</span>
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-[17px]">{intro.text}</p>
              <Link href={intro.button.href} className="mt-6 inline-flex items-center gap-6 rounded-full bg-gold py-1.5 pl-7 pr-1.5 font-ui text-base font-semibold text-white">
                {intro.button.label}
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest"><FiArrowRight /></span>
              </Link>
            </div>
            <div className="relative aspect-[410/424] overflow-hidden rounded-2xl">
              <Image src={intro.image} alt={intro.title} fill sizes="(min-width:768px) 30vw, 100vw" className="object-cover" priority />
            </div>
          </div>

          <div className="mt-12">
            <Heading>{overview.title}</Heading>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-[17px]">{overview.text}</p>
            <div className="relative mt-6 aspect-[858/290] overflow-hidden rounded-2xl">
              <Image src={overview.image} alt={overview.title} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
            </div>
          </div>

          <div className="mt-12">
            <Heading>{benefits.title}</Heading>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {benefits.items.map((b) => {
                const BIcon = benefitIcons[b.icon] ?? LuSprout;
                return (
                  <div key={b.title} className="flex items-start gap-4">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-forest/10 text-leaf">
                      <BIcon className="h-8 w-8" />
                    </span>
                    <div>
                      <h3 className="font-body text-base font-bold">{b.title}</h3>
                      <p className="mt-1 text-sm leading-5 text-slate-500">{b.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-14 grid items-center gap-8 md:grid-cols-[minmax(0,448px)_1fr]">
            <div className="relative aspect-[448/380] overflow-hidden rounded-2xl">
              <Image src={why.image} alt={why.title} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
            </div>
            <div>
              <Heading>{why.title}</Heading>
              <p className="mt-5 text-[15px] leading-6 text-slate-600">{why.text}</p>
              <ul className="mt-5 space-y-3">
                {why.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[15px] text-forest">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-white"><FiCheck className="h-4 w-4" /></span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ServiceSidebar />
      </div>
    </section>
  );
}
