// import { newChapter } from "./content/site";
import { Hero } from "./sections/Hero";
import { Story } from "./sections/Story";
import { Quotes } from "./sections/Quotes";
import { Gallery } from "./sections/Gallery";
import { Letter } from "./sections/Letter";
import { NewChapter } from "./sections/NewChapter";
import { FinalSurpresa } from "./components/finalSurpresa";
import { useState } from "react";
import { Login } from "./sections/login";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [desbloqueado, setDesbloqueado] = useState(false);

  if (!desbloqueado) {
    return <Login onUnlock={() => setDesbloqueado(true)} />;
  }

  return (
    <>
      <main>
        <Analytics />
        <Hero />
        <Story />
        <Quotes />
        <Gallery />
        <Letter />
        <NewChapter />
        <FinalSurpresa />
      </main>
      <footer className="bg-ink px-6 py-10 text-center text-sm text-cream/60">
        {/* {newChapter.footer} */}
      </footer>
    </>
  );
}
