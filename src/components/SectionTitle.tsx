import type { ReactNode } from "react";
import { Handwritten } from "./Handwritten";

interface SectionTitleProps {
  id: string;
  children: ReactNode;
  /** anotação manuscrita que acompanha o título */
  note?: string;
  className?: string;
}

/** Título de seção: serifado, com uma anotação manuscrita logo abaixo. */
export function SectionTitle({ id, children, note, className = "" }: SectionTitleProps) {
  return (
    <header className={className}>
      <h2
        id={id}
        className="font-serif text-5xl font-medium leading-[1.02] tracking-tight text-cream sm:text-6xl md:text-7xl"
      >
        {children}
      </h2>
      {note && (
        <Handwritten as="p" className="mt-2 -rotate-2">
          {note}
        </Handwritten>
      )}
    </header>
  );
}
