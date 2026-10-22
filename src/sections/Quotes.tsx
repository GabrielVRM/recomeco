import { quotes } from "../content/site";
import { QuoteBlock } from "../components/QuoteBlock";

export function Quotes() {
  return (
    <section id={quotes.id} aria-labelledby="quotes-title">
      {/* Título só para leitores de tela: a seção é feita de frases em tela cheia */}
      <h2 id="quotes-title" className="sr-only">
        {quotes.title}
      </h2>
      {quotes.items.map((q) => (
        <QuoteBlock
          key={q.cite}
          text={q.text}
          cite={q.cite}
          image={q.image}
          align={q.align}
        />
      ))}
    </section>
  );
}
