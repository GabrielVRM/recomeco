import { useEffect, useRef, useState } from "react";

type MusicPlayerProps = {
  music: string;
};

let musicaTocando: HTMLAudioElement | null = null;

export function MusicPlayer({ music }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [erro, setErro] = useState(false);
  console.log(music);
  const REFRÃO_INICIO =
    music === "/music/AindaExisteAmorEmNós.mp3"
      ? 155
      : music === "/music/iris.mp3"
        ? 210
        : music === "/music/cliche.mp3"
          ? 71
          : music === "/music/casoIndefinido.mp3"
            ? 56
            : 70;

  const REFRÃO_FIM =
    music === "/music/AindaExisteAmorEmNós.mp3"
      ? 280
      : music === "/music/iris.mp3"
        ? 280
        : music === "/music/cliche.mp3"
          ? 200
          : music === "/music/casoIndefinido.mp3"
            ? 400
            : 250;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const iniciarNoRefrão = () => {
      audio.currentTime = REFRÃO_INICIO;
    };

    if (audio.readyState >= 1) {
      iniciarNoRefrão();
    } else {
      audio.addEventListener("loadedmetadata", iniciarNoRefrão);
    }

    return () => {
      audio.removeEventListener("loadedmetadata", iniciarNoRefrão);

      if (musicaTocando === audio) {
        musicaTocando = null;
      }

      audio.pause();
    };
  }, [music, REFRÃO_INICIO]);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    setErro(false);

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      // Para qualquer outra música que esteja tocando.
      if (musicaTocando && musicaTocando !== audio) {
        musicaTocando.pause();
      }

      // Se chegou ao fim do refrão, volta ao início dele.
      if (
        audio.currentTime < REFRÃO_INICIO ||
        audio.currentTime >= REFRÃO_FIM
      ) {
        audio.currentTime = REFRÃO_INICIO;
      }

      await audio.play();
      musicaTocando = audio;
    } catch (error) {
      console.error("Não foi possível iniciar a música:", error);
      setErro(true);
    }
  }

  function controlarRefrão() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.currentTime >= REFRÃO_FIM) {
      audio.currentTime = REFRÃO_INICIO;
    }
  }

  return (
    <div className="flex items-center gap-3">
      <audio
        ref={audioRef}
        src={music}
        preload="metadata"
        onTimeUpdate={controlarRefrão}
        onPlay={() => setPlaying(true)}
        onPause={() => {
          setPlaying(false);

          if (musicaTocando === audioRef.current) {
            musicaTocando = null;
          }
        }}
      />

      <button type="button" onClick={toggleMusic}>
        <span className="animate-pulse cursor-pointer">
          {playing ? "Ⅱ Pausar música" : "♫ Ouvir música"}
        </span>
      </button>

      {erro && (
        <span className="text-sm text-red-500">
          Não foi possível tocar. Tente novamente.
        </span>
      )}
    </div>
  );
}
