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
      className={`reveal-on-scroll rounded-2xl border border-slate-100 bg-white shadow-[0_6px_24px_rgba(11,59,31,0.08)] transition-all duration-400 ease-out ${
        hoverEffect ? "hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(11,59,31,0.12)] hover:border-mint/80" : ""
      } ${className}`}
    >
      {children}
    </Component>
  );
}
