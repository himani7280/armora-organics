import { ReactNode } from "react";
import { FaLeaf } from "react-icons/fa6";

export interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode | boolean;
  variant?: "outline" | "gold" | "mint" | "subtle";
  size?: "sm" | "md";
  className?: string;
}

const variantClasses = {
  outline: "border border-forest/20 text-forest bg-transparent",
  gold: "border border-gold/40 bg-gold/15 text-forest font-semibold",
  mint: "border border-mint bg-mint/70 text-forest",
  subtle: "border border-forest/10 bg-forest/5 text-forest",
};

const sizeClasses = {
  sm: "px-3.5 py-1 text-xs",
  md: "px-4 py-1.5 sm:px-5 sm:py-2 text-sm sm:text-[15px]",
};

export default function Badge({
  children,
  icon = false,
  variant = "outline",
  size = "md",
  className = "",
}: BadgeProps) {
  const iconNode =
    icon === true ? (
      <FaLeaf className="shrink-0 text-forest text-xs sm:text-sm" />
    ) : (
      icon || null
    );

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full font-ui font-medium ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {iconNode}
      <span>{children}</span>
    </span>
  );
}
