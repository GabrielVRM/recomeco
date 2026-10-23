import { gallery } from "../content/site";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";
import { Polaroid } from "../components/Polaroid";
import { Reveal } from "../components/Reveal";
import { MusicPlayer } from "../libs/musicPlayer";

export function Gallery() {
  return (
    <Section
      id={gallery.id}
      labelledBy="gallery-title"
      className="bg-wine-950/60"
    >
      <MusicPlayer music={"/music/AindaExisteAmorEmNós.mp3"} />
      <Reveal>
        <SectionTitle id="gallery-title" note={gallery.note}>
          {gallery.title}
        </SectionTitle>
      </Reveal>

      <ul className="mt-16 columns-1 gap-x-10 md:columns-2 lg:columns-3">
        {gallery.items.map((item, i) => (
          <li key={item.src + i} className="mb-14 break-inside-avoid px-1">
            <Reveal variant="develop" delay={(i % 3) * 120}>
              <Polaroid
                src={item.src}
                alt={item.alt}
                caption={item.caption}
                aspect={item.aspect}
                rotate={item.rotate}
              />
            </Reveal>
          </li>
        ))}
      </ul>

      <div>
        <div className="mx-auto mt-20 w-full max-w-sm px-4">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/30 p-3 shadow-2xl">
              <video
                src="/videoalianca.mp4"
                controls
                playsInline
                preload="metadata"
                className="aspect-[9/16] w-full rounded-xl object-contain"
              >
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>

            <p className="mt-6 text-center font-serif text-lg italic text-white/80">
              Algumas lembranças merecem ser revividas. ❤️
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
