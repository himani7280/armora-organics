import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FiChevronRight } from "react-icons/fi";
import { FaLeaf, FaSeedling, FaHandHoldingHeart, FaFlask, FaDroplet, FaChartColumn, FaBoxOpen, FaTruck, FaLocationDot } from "react-icons/fa6";
import { productDetailContent } from "@/lib/content";
import type { CatalogProduct } from "@/lib/catalog";

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
      <h2 className="font-body text-2xl font-bold text-forest sm:text-3xl">{children}</h2>
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
    <div className="py-12 lg:py-20">
      <div className="container-x space-y-14 lg:space-y-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[621/636] overflow-hidden rounded-2xl">
            <Image src={hero.image} alt={hero.title} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-4 py-2 font-ui text-[15px] font-medium text-forest">
              <FaLeaf /> {hero.badge}
            </span>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-[56px]">
              {hero.title} <span className="text-gold">{hero.accent}</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-[17px]">{hero.text}</p>
            <div className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
              {hero.badges.map((b) => (
                <div key={b.label} className="flex flex-col items-center gap-3 border-slate-200 text-center sm:border-r sm:last:border-r-0">
                  <IconCircle name={b.icon} />
                  <span className="max-w-[90px] font-ui text-[15px] font-medium leading-5 text-forest">{b.label}</span>
                </div>
              ))}
            </div>
            <Link href={hero.button.href} className="group mt-8 inline-flex items-center gap-6 rounded-full bg-gold py-1.5 pl-8 pr-1.5 font-ui text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-gold-light hover:shadow-lg">
              <span>{hero.button.label}</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-white transition-all duration-300 group-hover:bg-forest-deep group-hover:scale-105">
                <FiChevronRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid items-center gap-8 rounded-2xl border border-slate-100 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Heading>{overview.title}</Heading>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">{overview.text}</p>
          </div>
          <div className="relative">
            <span className="absolute -right-3 -top-3 hidden h-24 w-24 rounded-xl bg-gold-light sm:block" />
            <div className="relative aspect-[556/293] overflow-hidden rounded-xl">
              <Image src={overview.image} alt={overview.title} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>

        <div>
          <Heading>{features.title}</Heading>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.items.map((f) => (
              <div key={f.title} className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:border-mint hover:shadow-md cursor-pointer">
                <IconCircle name={f.icon} />
                <div>
                  <h3 className="font-body text-base font-bold text-forest transition-colors group-hover:text-leaf">{f.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Heading>{specs.title}</Heading>
            <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
              {specs.rows.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[40%_60%] border-b border-slate-200 last:border-b-0">
                  <div className="bg-forest/10 px-5 py-2.5 font-ui text-[15px] font-semibold text-forest">{k}</div>
                  <div className="px-5 py-2.5 text-[15px] text-slate-600">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Heading>{benefits.title}</Heading>
            <ul className="mt-6 space-y-5">
              {benefits.items.map((b) => (
                <li key={b.title} className="group flex items-center gap-4 cursor-pointer">
                  <IconCircle name={b.icon} />
                  <div>
                    <h3 className="font-body text-lg font-bold text-forest transition-colors group-hover:text-leaf">{b.title}</h3>
                    <p className="text-[15px] text-slate-600">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 p-6 sm:p-8">
          <Heading>{availability.title}</Heading>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {availability.items.map((a) => (
              <div key={a.title} className="group flex items-center gap-4 md:border-r md:border-slate-200 md:last:border-r-0 md:pr-4 cursor-pointer">
                <IconCircle name={a.icon} />
                <div>
                  <h3 className="font-body text-lg font-bold text-forest transition-colors group-hover:text-leaf">{a.title}</h3>
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
