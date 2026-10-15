import { ElementType, ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`w-full max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}
