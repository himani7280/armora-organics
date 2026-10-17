import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import { Icon } from "@/components/common/icons";
import { homeContent } from "@/lib/content";

type Point = { icon: string; title: string; text: string };

function Column({ points, side }: { points: Point[]; side: "left" | "right" }) {
  return (
    <div className="flex flex-col justify-between gap-8 lg:gap-0">
      {points.map((p) => (
        <div key={p.title} className={`flex items-center gap-4 lg:py-6 ${side === "right" ? "" : ""}`}>
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
            <Icon name={p.icon} className="h-7 w-7" />
          </span>
          <div>
            <h4 className="text-xl">{p.title}</h4>
            <p className="mt-1 text-[15.5px] leading-[1.55] text-slate-600">{p.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// thin gold curves ending in a dark dot, linking each point to the plant (desktop only)
function Connectors() {
  const curves = [
    "M-100 31 Q-50 20 -31 71", "M-100 183 Q-60 183 -40 200", "M-7 267 Q-30 285 -36 311",
    "M386 71 Q400 28 470 31", "M396 200 Q420 183 470 183", "M365 267 Q385 285 392 311",
  ];
  const dots = [[-31, 71], [-40, 200], [-36, 311], [386, 71], [396, 200], [392, 311]];
  return (
    <svg viewBox="-120 0 602 445" className="pointer-events-none absolute left-[-120px] top-0 hidden h-full w-[602px] max-w-none lg:block" aria-hidden="true">
      {curves.map((d) => (
        <path key={d} d={d} fill="none" stroke="#c08a2e" strokeWidth="1.5" />
      ))}
      {dots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#0b3b1f" />
      ))}
    </svg>
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
            <Image src={w.image} alt={(w as any).imageAlt || "Young plant growing from fertile soil"} width={362} height={445} className="plant-fade h-auto w-full mix-blend-multiply transition-transform duration-700 hover:scale-105" />
            <Connectors />
          </div>
          <div className="reveal-right h-full flex flex-col justify-between">
            <Column points={w.right} side="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
