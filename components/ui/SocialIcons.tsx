import { FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IconType } from "react-icons";
import content from "@/data/content.json";

export interface SocialItem {
  label: string;
  href: string;
  icon: IconType;
}

const iconMap: Record<string, IconType> = {
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  dribbble: FaDribbble,
  instagram: FaInstagram,
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
};

const headerJson = content.Farmora.sections.SiteChrome.variants.FarmoraHeader1;
const footerJson = content.Farmora.sections.SiteChrome.variants.FarmoraFooter1;

export const defaultSocials: SocialItem[] = (headerJson.socials || []).map((s: any) => ({
  label: s.label,
  href: s.href,
  icon: iconMap[s.icon] || FaFacebookF,
}));

export const footerSocials: SocialItem[] = ((footerJson as any).socials || []).map((s: any) => ({
  label: s.label,
  href: s.href,
  icon: iconMap[s.icon] || FaFacebookF,
}));

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
