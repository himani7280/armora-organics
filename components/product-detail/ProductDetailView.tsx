import Image from "next/image";
import type { IconType } from "react-icons";
import { FaLeaf, FaSeedling, FaHandHoldingHeart, FaFlask, FaDroplet, FaChartColumn, FaBoxOpen, FaTruck, FaLocationDot } from "react-icons/fa6";
import { productDetailContent, type CatalogProduct } from "@/lib/content";
import { Button, Badge } from "@/components/ui";

const data = productDetailContent;

const icons: Record<string, IconType> = {
  leaf: FaLeaf,
  sprout: FaSeedling,
  hand: FaHandHoldingHeart,
  flask: FaFlask,
  drop: FaDroplet,
  chart: FaChartColumn,
  box: FaBoxOpen,
  truck: FaTruck,
  pin: FaLocationDot,
};

function Ico({ name }: { name: string }) {
  const C = icons[name] ?? FaLeaf;
  return <C />;
}

function IconCircle({ name }: { name: string }) {
  return (
    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-mint text-2xl text-forest transition-all duration-300 hover:bg-forest hover:text-white hover:scale-105 cursor-pointer shadow-xs">
      <Ico name={name} />
    </span>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-forest sm:text-3xl">{children}</h2>
      <span className="mt-2 block h-[3px] w-12 rounded bg-gold" />
    </div>
  );
}

function splitTitle(title: string) {
  const words = title.split(" ");
  return words.length > 1 ? { title: words.slice(0, -1).join(" "), accent: words[words.length - 1] } : { title, accent: "" };
}

export default function ProductDetailView({ product }: { product?: CatalogProduct }) {
  const { overview, features, specs, benefits, availability } = data;
  const hero = product ? { ...data.hero, ...splitTitle(product.title), text: product.text, image: product.image } : data.hero;
  return (
    <div className="pt-8 pb-3 sm:pt-10 sm:pb-4 lg:pt-12 lg:pb-5">
      <div className="container-x space-y-6 sm:space-y-8 lg:space-y-8">
        {/* 1. Hero: Equal Height Image & Content */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="reveal-left relative min-h-[380px] sm:min-h-[440px] overflow-hidden rounded-2xl">
            <Image src={hero.image} alt={hero.title} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="reveal-right flex flex-col justify-between">
            <div>
              <Badge icon variant="outline">
                {hero.badge}
              </Badge>
              <h2 className="mt-3.5 text-3xl leading-tight sm:text-4xl lg:text-[48px]">
                {hero.title} <span className="text-gold">{hero.accent}</span>
              </h2>
              <p className="mt-3.5 text-base leading-7 text-slate-600 sm:text-[17px]">{hero.text}</p>
            </div>
            <div>
              <div className="mt-6 grid grid-cols-2 gap-y-5 sm:grid-cols-4">
                {hero.badges.map((b) => (
                  <div key={b.label} className="flex flex-col items-center gap-2.5 border-slate-200 text-center sm:border-r sm:last:border-r-0">
                    <IconCircle name={b.icon} />
                    <span className="max-w-[90px] font-ui text-[14px] font-medium leading-5 text-forest">{b.label}</span>
                  </div>
                ))}
              </div>
              <Button href={hero.button.href} size="lg" className="mt-6">
                {hero.button.label}
              </Button>
            </div>
          </div>
        </div>

        {/* 2. Overview: Equal Height Left Text & Right Image */}
        <div className="reveal-on-scroll grid items-stretch gap-6 rounded-2xl border border-slate-100 p-5 sm:p-6 lg:p-7 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col justify-center">
            <Heading>{overview.title}</Heading>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-[17px]">{overview.text}</p>
          </div>
          <div className="relative min-h-[220px] sm:min-h-[260px]">
            <span className="absolute -right-3 -top-3 hidden h-24 w-24 rounded-xl bg-gold-light sm:block" />
            <div className="relative h-full min-h-[220px] overflow-hidden rounded-xl">
              <Image src={overview.image} alt={overview.title} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="reveal-on-scroll !-mt-2 sm:!-mt-3">
          <Heading>{features.title}</Heading>
          <div className="mt-4 sm:mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.items.map((f) => (
              <div key={f.title} className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:border-mint hover:shadow-md cursor-pointer hover:-translate-y-1">
                <IconCircle name={f.icon} />
                <div>
                  <h3 className="font-serif text-base font-bold text-forest transition-colors group-hover:text-leaf">{f.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Specs & Benefits: Equal Height Left Table & Right List */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="reveal-left flex flex-col h-full">
            <Heading>{specs.title}</Heading>
            <div className="mt-4 sm:mt-5 flex-1 overflow-hidden rounded-lg border border-slate-200 flex flex-col justify-between">
              {specs.rows.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[40%_60%] border-b border-slate-200 last:border-b-0 flex-1 items-center">
                  <div className="h-full flex items-center bg-forest/10 px-5 py-2.5 font-ui text-[15px] font-semibold text-forest">{k}</div>
                  <div className="h-full flex items-center px-5 py-2.5 text-[15px] text-slate-600">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right flex flex-col h-full">
            <Heading>{benefits.title}</Heading>
            <ul className="mt-4 sm:mt-5 flex-1 flex flex-col justify-between gap-3 sm:gap-4">
              {benefits.items.map((b) => (
                <li key={b.title} className="group flex items-center gap-4 rounded-xl border border-slate-100 p-3.5 sm:p-4 bg-slate-50/50 hover:bg-white hover:border-mint hover:shadow-xs transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
                  <IconCircle name={b.icon} />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-forest transition-colors group-hover:text-leaf">{b.title}</h3>
                    <p className="text-[15px] text-slate-600">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal-scale !-mt-2 sm:!-mt-3 rounded-2xl border border-slate-100 p-5 sm:p-6 lg:p-6">
          <Heading>{availability.title}</Heading>
          <div className="mt-5 sm:mt-6 grid gap-5 md:grid-cols-3">
            {availability.items.map((a) => (
              <div key={a.title} className="group flex items-center gap-4 md:border-r md:border-slate-200 md:last:border-r-0 md:pr-4 cursor-pointer">
                <IconCircle name={a.icon} />
                <div>
                  <h3 className="font-serif text-lg font-bold text-forest transition-colors group-hover:text-leaf">{a.title}</h3>
                  <p className="text-[15px] text-slate-600">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
