import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Variant = "fade" | "rise" | "develop";

interface RevealProps {
  children: ReactNode;
  /** fade: só opacidade · rise: sobe suavemente · develop: foto "revelada" */
  variant?: Variant;
  /** atraso em ms, útil para escalonar elementos irmãos */
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Faz o conteúdo aparecer suavemente quando entra na tela.
 * Os estilos ficam em index.css ([data-reveal]) e respeitam prefers-reduced-motion.
 */
export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-shown={shown}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
