import { FaLeaf } from "react-icons/fa6";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  text?: string;
  align?: "center" | "left";
  pill?: boolean;
  stacked?: boolean;
  size?: "lg" | "md";
};

export default function SectionTitle({ eyebrow, title, accent, text, align = "center", pill = false, stacked = false, size = "lg" }: Props) {
  const center = align === "center";
  return (
    <div className={`reveal-on-scroll ${center ? "mx-auto max-w-[1000px] text-center" : "mx-auto max-w-[640px] text-center lg:mx-0 lg:text-left"}`}>
      <div className={`flex items-center gap-2 sm:gap-3 ${center ? "justify-center" : "justify-center lg:justify-start"}`}>
        {center && <span className="h-[1px] w-6 shrink-0 bg-gold sm:w-11" />}
        <span className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap transition-transform duration-300 hover:scale-105 ${pill ? "rounded-full border border-forest/20 px-4 py-1.5 sm:px-5 sm:py-2 bg-white/60 shadow-xs" : ""}`}>
          <FaLeaf className="shrink-0 text-forest text-sm animate-float-slow" />
          <span className="eyebrow whitespace-nowrap">{eyebrow}</span>
        </span>
        <span className="h-[1px] w-6 shrink-0 bg-gold sm:w-11" />
      </div>
      <h2 className={`mt-5 text-3xl leading-[1.08] sm:text-4xl ${size === "lg" ? "lg:text-[54px]" : "lg:text-[46px]"}`}>
        {title}
        {accent && (
          <>
            {" "}
            <span className={`text-gold ${stacked ? "block" : ""}`}>{accent}</span>
          </>
        )}
      </h2>
      {text && <p className={`mt-4 text-base leading-7 text-slate-600 sm:text-[17px] ${center ? "mx-auto max-w-[740px]" : ""}`}>{text}</p>}
    </div>
  );
}
