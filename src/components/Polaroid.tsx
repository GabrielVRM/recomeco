import type { CSSProperties } from "react";

type Aspect = "portrait" | "square" | "landscape";

const ratios: Record<Aspect, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[3/2]",
};

interface PolaroidProps {
  src: string;
  /** Descreva a foto para quem usa leitor de tela. */
  alt: string;
  caption?: string;
  /** inclinação em graus */
  rotate?: number;
  aspect?: Aspect;
  /** true apenas para imagens visíveis logo ao abrir a página */
  eager?: boolean;
  /** pedaço de fita adesiva no topo */
  tape?: boolean;
  className?: string;
}

/** Foto com moldura estilo Polaroid e legenda manuscrita. */
export function Polaroid({
  src,
  alt,
  caption,
  rotate = 0,
  aspect = "portrait",
  eager = false,
  tape = false,
  className = "",
}: PolaroidProps) {
  return (
    <figure
      className={`polaroid relative bg-paper p-3 pb-4 sm:p-4 sm:pb-5 ${className}`}
      style={{ "--r": `${rotate}deg` } as CSSProperties}
    >
      {tape && <span className="tape" aria-hidden="true" />}
      <div className={`relative w-full overflow-hidden bg-wine-900 ${ratios[aspect]}`}>
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover [filter:sepia(0.12)_contrast(1.03)]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.35)]"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-hand text-xl leading-snug text-wine-900 sm:text-2xl">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
