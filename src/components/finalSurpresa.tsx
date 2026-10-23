import { useState } from "react";

export function FinalSurpresa() {
  const [mostrarVideo, setMostrarVideo] = useState(false);

  return (
    <section className="flex flex-col items-center gap-6 px-6 py-20 text-center">
      <h2 className="text-3xl font-serif">
        só uma explicação rapída do porque do site 🙂
      </h2>

      <button
        onClick={() => setMostrarVideo(true)}
        className="rounded-full bg-rose-600 px-8 py-4
        text-white shadow-lg transition hover:scale-105"
      >
        clique aqui
      </button>

      {mostrarVideo && (
        <div className="w-full max-w-2xl animate-fade-in">
          <video
            src="/photos/video1.mp4"
            controls
            autoPlay
            playsInline
            className="w-full rounded-2xl shadow-xl"
          >
            Seu navegador não suporta vídeos.
          </video>
        </div>
      )}
    </section>
  );
}
