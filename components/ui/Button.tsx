import Link from "next/link";
import { ReactNode } from "react";
import { FiChevronRight } from "react-icons/fi";

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  className?: string;
  "aria-label"?: string;
}

const sizeClasses = {
  sm: {
    btn: "py-1 pl-4 pr-1 text-sm gap-2",
    badge: "h-7 w-7 text-xs",
  },
  md: {
    btn: "py-1.5 pl-6 pr-1.5 text-[15px] gap-3 sm:gap-4",
    badge: "h-9 w-9 text-sm",
  },
  lg: {
    btn: "py-2 pl-8 pr-2 text-base sm:text-lg gap-4 sm:gap-8",
    badge: "h-10 w-10 sm:h-11 sm:w-11 text-base",
  },
};

const variantClasses = {
  primary: {
    btn: "bg-forest text-white hover:bg-forest-deep shadow-md hover:shadow-lg",
    badge: "bg-gold text-forest group-hover:bg-gold-light group-hover:scale-105",
  },
  secondary: {
    btn: "bg-gold text-forest hover:bg-gold-light shadow-md hover:shadow-lg",
    badge: "bg-forest text-white group-hover:bg-forest-deep group-hover:scale-105",
  },
  outline: {
    btn: "border-2 border-forest text-forest hover:bg-forest hover:text-white shadow-xs hover:shadow-md",
    badge: "bg-gold text-forest group-hover:bg-gold-light group-hover:scale-105",
  },
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  icon,
  size = "md",
  variant = "primary",
  fullWidth = false,
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const currentSize = sizeClasses[size];
  const currentVariant = variantClasses[variant];
  const iconNode = icon !== undefined ? icon : <FiChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />;

  const hasDisplayOverride = /(^|\s)(hidden|inline-block|block|flex|inline-flex)(\s|$)/.test(className);
  const displayClass = hasDisplayOverride ? "" : "inline-flex";

  const combinedClass = `group ${displayClass} items-center justify-between rounded-full font-ui font-semibold transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed ${
    fullWidth ? "w-full" : ""
  } ${currentSize.btn} ${currentVariant.btn} ${className}`.trim().replace(/\s+/g, " ");

  const innerContent = (
    <>
      <span className="truncate">{children}</span>
      {iconNode && (
        <span
          className={`flex shrink-0 aspect-square items-center justify-center rounded-full transition-all duration-300 ${currentSize.badge} ${currentVariant.badge}`}
        >
          {iconNode}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={combinedClass}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={combinedClass}
    >
      {innerContent}
    </button>
  );
}
