import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import { Icon } from "@/components/common/icons";
import { homeContent } from "@/lib/content";

type Point = { icon: string; title: string; text: string };

function Column({ points, side }: { points: Point[]; side: "left" | "right" }) {
  return (
    <div className="flex flex-col justify-between gap-8 lg:gap-0">
      {points.map((p) => (
        <div
          key={p.title}
          className="group flex items-center gap-4 lg:py-6 cursor-pointer active:scale-[0.98] transition-transform duration-150"
        >
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white group-hover:scale-105 shadow-xs">
            <Icon name={p.icon} className="h-7 w-7" />
          </span>
          <div>
            <h4 className="text-xl font-bold text-forest transition-colors duration-200 group-hover:text-leaf">
              {p.title}
            </h4>
            <p className="mt-1 text-[15.5px] leading-[1.55] text-slate-600">{p.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function WhyChoose() {
  const w = homeContent.why;
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="container-x">
        <SectionTitle pill eyebrow={w.eyebrow} title={w.title} accent={w.accent} text={w.text} />
        <div className="mt-8 grid items-stretch gap-10 lg:grid-cols-[1fr_362px_1fr]">
          <div className="reveal-left h-full flex flex-col justify-between">
            <Column points={w.left} side="left" />
          </div>
          <div className="reveal-scale relative order-first mx-auto w-full max-w-[362px] lg:order-none flex flex-col justify-center">
            <Image
              src={w.image}
              alt={(w as any).imageAlt || "Young plant growing from fertile soil"}
              width={362}
              height={445}
              className="plant-fade h-auto w-full mix-blend-multiply transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="reveal-right h-full flex flex-col justify-between">
            <Column points={w.right} side="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
