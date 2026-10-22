import { story } from "../content/site";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";
import { Polaroid } from "../components/Polaroid";
import { Reveal } from "../components/Reveal";

/**
 * Posição de cada Polaroid. No celular elas se sobrepõem em coluna;
 * no desktop ficam espalhadas, como fotos soltas sobre uma mesa.
 */
const placement = [
  "z-10 w-[72%] sm:w-[58%] lg:absolute lg:left-0 lg:top-0 lg:w-[58%]",
  "z-20 ml-auto -mt-10 w-[66%] sm:-mt-16 sm:w-[54%] lg:absolute lg:right-0 lg:top-[22%] lg:mt-0 lg:w-[54%]",
  "z-30 -mt-8 w-[70%] sm:-mt-12 sm:w-[56%] lg:absolute lg:bottom-0 lg:left-[14%] lg:mt-0 lg:w-[56%]",
];

export function Story() {
  return (
    <Section id={story.id} labelledBy="story-title">
      <div className="grid items-center gap-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionTitle id="story-title" note={story.note}>
              {story.title}
            </SectionTitle>
          </Reveal>

          <div className="mt-10 max-w-[34rem] space-y-6 text-lg sm:text-xl">
            {story.paragraphs.map((text, i) => (
              <Reveal as="p" key={i} delay={i * 120}>
                {text}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative pb-6 lg:col-span-6 lg:h-[46rem] lg:pb-0">
          {story.polaroids.map((p, i) => (
            <Reveal key={p.caption} variant="develop" delay={i * 150} className={placement[i]}>
              <Polaroid src={p.src} alt={p.alt} caption={p.caption} rotate={p.rotate} tape={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
