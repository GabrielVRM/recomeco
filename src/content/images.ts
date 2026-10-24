/**
 * IMAGENS DO SITE
 * ---------------------------------------------------------------
 * Para usar suas próprias fotos:
 *   1. Copie os arquivos para a pasta  public/photos/
 *   2. Troque abaixo o NOME do arquivo (ex.: "hero-sunset.svg" → "nos-dois.jpg")
 *
 * Os arquivos atuais são ilustrações de demonstração (SVG).
 * Formatos aceitos: .jpg, .jpeg, .png, .webp, .avif, .svg
 *
 * Dicas de desempenho:
 *   - Hero: ~2000px de largura, JPG/WebP com menos de 400 KB.
 *   - Demais fotos: ~1200px no lado maior, menos de 250 KB cada.
 *   - Retrato (vertical) funciona melhor na história; a galeria aceita qualquer proporção
 *     definida em `aspect` (ver content/site.ts).
 */
const photo = (file: string) => `${import.meta.env.BASE_URL}photos/${file}`;

export const images = {
  // Seção 1 — Hero (foto do casal ao pôr do sol)
  hero: photo("hero-sunset.svg"),

  // Seção 2 — Nossa história (3 polaroids, de preferência na vertical)
  story1: photo("story-1.jpeg"),
  story2: photo("story-2.jpeg"),
  story3: photo("story-3.jpeg"),

  // Seção 3 — Fundos das frases (use fotos escuras ou de cenas; o texto fica por cima)
  quote1: photo("queotes.jpeg"),
  quote2: photo("diario_paixao1.jpeg"),
  quote3: photo("nn.jpeg"),
  quote4: photo("tt.jpeg"),
  quote5: photo("gallery-15.jpeg"),

  quote6: photo("gallery-16.jpeg"),

  quote7: photo("gallery-17.jpeg"),

  // Seção 4 — Galeria de memórias
  gallery1: photo("gallery-1.jpeg"),
  gallery2: photo("gallery-2.jpeg"),
  gallery3: photo("gallery-3.jpeg"),
  gallery4: photo("gallery-4.jpeg"),
  gallery5: photo("gallery-5.jpeg"),
  gallery6: photo("gallery-6.jpeg"),
  gallery7: photo("gallery-7.jpeg"),
  gallery8: photo("gallery-8.jpeg"),
  gallery9: photo("gallery-9.jpeg"),

  gallery10: photo("gallery-10.jpeg"),

  gallery11: photo("gallery-11.jpeg"),
  gallery12: photo("gallery-12.jpeg"),
  gallery13: photo("gallery-13.jpeg"),
  gallery14: photo("gallery-14.jpeg"),
} as const;
