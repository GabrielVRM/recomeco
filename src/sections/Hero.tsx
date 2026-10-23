import type { CSSProperties } from "react";
import { hero, story } from "../content/site";
import { Handwritten } from "../components/Handwritten";
import { MusicPlayer } from "../libs/musicPlayer";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      {/* <img
        src={hero.image}
        alt={hero.imageAlt}
        fetchPriority="high"
        decoding="async"
        className="hero-image absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center]"
      /> */}
      {/* Escurece a base e a lateral esquerda para o título ler bem */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/35 to-ink/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent"
      />

      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-40 sm:px-10 md:pb-28">
        <p className="hero-line" style={delay(500)}>
          <Handwritten>{hero.lead}</Handwritten>
        </p>

        <p
          id="hero-title"
          aria-label={hero.titleLines.join(" ")}
          className="text-xl mt-2 font-serif text-[clamp(2.6rem,10.5vw,8rem)] font-medium leading-[0.96] tracking-tight text-cream"
        >
          {hero.titleLines.map((line, i) => (
            <span
              key={line}
              aria-hidden="true"
              className="hero-line text-8xl block"
              style={delay(900 + i * 350)}
            >
              {line}
            </span>
          ))}
        </p>

        <MusicPlayer music={"/music/iris.mp3"} />
        <span>
          pode clicar na proxima musica, que a que estiver tocando vai parar
          automaticamente kk{" "}
        </span>
        <br />
        <a
          href={`#${story.id}`}
          className="hero-line group mt-14 inline-flex items-center gap-4"
          style={delay(2200)}
        >
          <Handwritten>{hero.scrollHint}</Handwritten>
          <span
            aria-hidden="true"
            className="h-px w-16 bg-rose-soft/70 transition-[width] duration-700 group-hover:w-24 motion-reduce:transition-none"
          />
        </a>
      </div>
    </section>
  );
}
