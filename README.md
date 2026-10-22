# Algumas histórias merecem ser lembradas

Site romântico em formato de álbum de memórias. React + Vite + TypeScript + Tailwind CSS.

## Como rodar localmente

Requisitos: Node.js 20 ou superior.

```bash
cd recomeco
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção:

```bash
npm run build     # gera a pasta dist/
npm run preview   # testa a versão de produção localmente
```

## O que editar

| Quero mudar…              | Arquivo                      |
| ------------------------- | ---------------------------- |
| Todos os textos           | `src/content/site.ts`        |
| Quais fotos aparecem      | `src/content/images.ts`      |
| Para onde o botão leva    | `src/content/site.ts` → `newChapter.button.href` |
| Cores e fontes            | `src/index.css` (bloco `@theme`) |

### Trocar as fotos de demonstração

1. Copie suas fotos para `public/photos/`.
2. Em `src/content/images.ts`, troque o nome do arquivo (ex.: `"hero-sunset.svg"` por `"nos-dois.jpg"`).
3. Em `src/content/site.ts`, atualize o `alt` de cada foto com uma descrição curta (ajuda quem usa leitor de tela).

Tamanhos recomendados: hero com ~2000 px de largura; demais fotos com ~1200 px no lado maior. Prefira JPG/WebP e mantenha cada arquivo abaixo de ~300 KB.

### Configurar o botão final

O botão "Você toparia conversar comigo?" abre o link definido em `newChapter.button.href`.
Hoje ele aponta para um número fictício de WhatsApp. **Troque antes de publicar.**

- WhatsApp: `https://wa.me/55DDDNUMERO?text=Oi!%20Vi%20o%20site%20e%20topo%20conversar.`
- E-mail: `mailto:seu@email.com?subject=Topo%20conversar`

## Estrutura

```
public/photos/            fotos (demonstração em SVG)
src/
  content/                textos e mapa de imagens (o que você edita)
  components/             Reveal, Polaroid, Handwritten, QuoteBlock, Section, SectionTitle
  sections/               Hero, Story, Quotes, Gallery, Letter, NewChapter
  index.css               tema, animações e moldura Polaroid
```

## Acessibilidade e desempenho

- HTML semântico (`main`, `section`, `figure`, `blockquote`, `footer`) e um `h1` com `h2` por seção.
- `alt` em todas as fotos; fundos decorativos têm `alt=""`.
- Foco visível no teclado e contraste de texto de pelo menos 4,5:1 nas cores de texto.
- Animações desativadas automaticamente para quem usa "reduzir movimento" no sistema.
- Imagens abaixo da dobra com `loading="lazy"`; a imagem do hero tem prioridade alta.
- Sem bibliotecas de animação: só IntersectionObserver e CSS.
