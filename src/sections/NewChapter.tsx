import { newChapter } from "../content/site";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";
import { Handwritten } from "../components/Handwritten";
import { Reveal } from "../components/Reveal";

export function NewChapter() {
  const { button } = newChapter;

  return (
    <Section
      id={newChapter.id}
      labelledBy="chapter-title"
      className="bg-[radial-gradient(ellipse_at_50%_100%,var(--color-wine-700),var(--color-ink)_70%)] md:py-44"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <SectionTitle id="chapter-title">{newChapter.title}</SectionTitle>
        </Reveal>

        <div className="mt-10 space-y-6 font-serif text-2xl leading-relaxed text-cream/90 sm:text-3xl sm:leading-relaxed">
          {newChapter.paragraphs.map((text, i) => (
            <Reveal as="p" key={i} delay={i * 150}>
              {text}
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delay={300} className="mt-14">
          {/* <a
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-rose-soft/60 bg-rose px-8 py-4 text-lg font-normal text-cream shadow-[0_12px_30px_-10px_rgba(0,0,0,0.7)] transition-colors duration-500 hover:bg-wine-700 motion-reduce:transition-none"
          >
            {button.label}
            <span className="sr-only"> (abre em uma nova aba)</span>
          </a> */}
          <p> {newChapter.nerd}</p>
          <Handwritten as="p" className="mt-8">
            {newChapter.reassurance}
          </Handwritten>
        </Reveal>
      </div>
    </Section>
  );
}
