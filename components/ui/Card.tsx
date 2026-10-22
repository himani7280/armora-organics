import { ElementType, ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = "",
  as: Component = "article",
  hoverEffect = true,
}: CardProps) {
  return (
    <Component
      className={`reveal-on-scroll rounded-2xl border border-slate-100 bg-white shadow-[0_6px_24px_rgba(11,59,31,0.06)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${
        hoverEffect ? "hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(11,59,31,0.16)] hover:border-forest/20 cursor-pointer active:scale-[0.98] active:duration-150 active:shadow-md" : ""
      } ${className}`}
    >
      {children}
    </Component>
  );
}
