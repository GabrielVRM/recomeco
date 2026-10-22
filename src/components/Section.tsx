import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  /** id do título (h2) que nomeia a seção */
  labelledBy: string;
  className?: string;
  children: ReactNode;
}

/** Contêiner padrão de seção: espaçamento, largura máxima e âncora. */
export function Section({ id, labelledBy, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative px-6 py-24 sm:px-10 md:py-36 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
