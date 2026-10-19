import type { IconType } from "react-icons";
import {
  LuApple,
  LuCarrot,
  LuHandHeart,
  LuLeaf,
  LuRefreshCw,
  LuShieldCheck,
  LuSprout,
  LuTruck,
  LuUsers,
  LuWheat,
} from "react-icons/lu";

// JSON files refer to icons by name, 
export const iconMap: Record<string, IconType> = {
  leaf: LuLeaf,
  sprout: LuSprout,
  seed: LuSprout,
  users: LuUsers,
  truck: LuTruck,
  apple: LuApple,
  hand: LuHandHeart,
  cycle: LuRefreshCw,
  shield: LuShieldCheck,
  wheat: LuWheat,
  veg: LuCarrot,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = iconMap[name] ?? LuLeaf;
  return <C className={className} />;
}
