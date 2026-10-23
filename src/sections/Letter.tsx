import { letter } from "../content/site";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";
import { Handwritten } from "../components/Handwritten";
import { Reveal } from "../components/Reveal";
import { MusicPlayer } from "../libs/musicPlayer";

export function Letter() {
  return (
    <Section
      id={letter.id}
      labelledBy="letter-title"
      className="bg-gradient-to-b from-ink via-wine-900 to-ink"
    >
      <MusicPlayer music={"/music/cliche.mp3"} />
      <div className="mx-auto max-w-3xl">
        {/* <Reveal>
          {/* <SectionTitle id="letter-title">{letter.title && letter.}</SectionTitle> 
        </Reveal> */}

        <Reveal variant="fade" className="mt-12 ">
          <article className="paper bg-amber-100 px-7 py-12 sm:px-14 sm:py-16 md:px-20 md:py-20">
            <Handwritten as="p" tone="dark">
              {letter.salutation}
            </Handwritten>

            <div className="mt-6 space-y-6 font-serif text-xl leading-[1.7] text-wine-950 sm:text-2xl sm:leading-[1.7]">
              {letter.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-rose"
                      : undefined
                  }
                >
                  {text}
                </p>
              ))}
            </div>

            <div className="mt-12 text-right">
              <Handwritten as="p" tone="dark" className="sm:text-4xl">
                {letter.closing}
              </Handwritten>
              <p className="mt-2 text-sm font-normal text-wine-700">
                {letter.date}
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
