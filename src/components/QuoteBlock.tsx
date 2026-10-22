import { Reveal } from "./Reveal";
import { Handwritten } from "./Handwritten";

interface QuoteBlockProps {
  text: string;
  cite?: string | null;
  /** imagem de fundo (decorativa) */
  image: string;
  align?: "left" | "center" | "right";
}

const alignment = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
} as const;

/** Frase em destaque sobre um fundo de cena, como um frame de filme. */
export function QuoteBlock({
  text,
  cite,
  image,
  align = "left",
}: QuoteBlockProps) {
  return (
    <figure className="relative isolate flex min-h-[78svh] items-center overflow-hidden bg-ink">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute opacity-40 inset-0 -z-20 h-full w-full object-cover object-center
      [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_82%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_82%,transparent_100%)]"
      />

      {/* Escurece apenas o necessário para manter a leitura */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b
      from-ink/15 via-ink/25 to-ink/35"
      />

      <div
        className={`mx-auto flex w-full max-w-5xl flex-col px-6 py-24 sm:px-10 ${alignment[align]}`}
      >
        <Reveal variant="fade">
          <blockquote className="max-w-3xl">
            <p
              className="font-serif text-3xl italic leading-[1.25] text-cream
          drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]
          sm:text-5xl md:text-6xl"
            >
              “{text}”
            </p>
          </blockquote>
        </Reveal>

        <Reveal variant="fade" delay={400}>
          <figcaption className="mt-8">
            <Handwritten>{cite}</Handwritten>
          </figcaption>
        </Reveal>
      </div>
    </figure>
  );
}
