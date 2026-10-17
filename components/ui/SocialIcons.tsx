import { FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IconType } from "react-icons";

export interface SocialItem {
  label: string;
  href: string;
  icon: IconType;
}

export const defaultSocials: SocialItem[] = [
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebookF },
  { label: "X (Twitter)", href: "https://x.com", icon: FaXTwitter },
  { label: "Dribbble", href: "https://dribbble.com", icon: FaDribbble },
  { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
];

export const footerSocials: SocialItem[] = [
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com", icon: FaYoutube },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn },
];

export interface SocialIconsProps {
  items?: SocialItem[];
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "outline";
  className?: string;
}

const sizeClasses = {
  sm: "h-7 w-7 text-xs",
  md: "h-8 w-8 sm:h-9 sm:w-9 text-sm",
  lg: "h-10 w-10 sm:h-11 sm:w-11 text-base",
};

const variantClasses = {
  light: "bg-[#ece8d0] text-forest hover:bg-leaf hover:text-white hover:scale-110 shadow-xs",
  dark: "bg-forest text-white hover:bg-gold hover:text-white hover:scale-110 hover:shadow-lg",
  outline: "border border-forest/20 text-forest hover:bg-forest hover:text-white hover:scale-110",
};

export default function SocialIcons({
  items = defaultSocials,
  size = "md",
  variant = "light",
  className = "",
}: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`flex shrink-0 aspect-square items-center justify-center rounded-full transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]}`}
          >
            <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        );
      })}
    </div>
  );
}
