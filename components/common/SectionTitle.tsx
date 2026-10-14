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
    <div className={center ? "mx-auto max-w-[1000px] text-center" : "mx-auto max-w-[640px] text-center lg:mx-0 lg:text-left"}>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : "justify-center lg:justify-start"}`}>
        {center && <span className="eyebrow-line" />}
        <span className={`flex items-center gap-2 ${pill ? "rounded-full border border-forest/20 px-5 py-2" : ""}`}>
          <FaLeaf className="text-forest" />
          <span className="eyebrow">{eyebrow}</span>
        </span>
        <span className="eyebrow-line" />
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
