import type { ElementType, ReactNode } from "react";

interface HandwrittenProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** light: sobre fundo escuro · dark: sobre papel/Polaroid claro */
  tone?: "light" | "dark";
}

const tones = {
  light: "text-rose-soft",
  dark: "text-rose",
} as const;

/** Texto "escrito à mão" para anotações, legendas e assinaturas. */
export function Handwritten({
  children,
  as: Tag = "span",
  className = "",
  tone = "light",
}: HandwrittenProps) {
  return (
    <Tag
      className={`font-hand text-2xl leading-relaxed sm:text-3xl ${tones[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}
