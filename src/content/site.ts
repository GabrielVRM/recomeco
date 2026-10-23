/**
 * TEXTOS DO SITE
 * ---------------------------------------------------------------
 * Tudo o que aparece escrito na página está aqui. Edite à vontade.
 *
 * Os textos abaixo são uma base sincera, mas genérica: troque por
 * lembranças, nomes e detalhes que só vocês dois conhecem. Quanto mais
 * específico e verdadeiro, mais forte fica.
 *
 * IMPORTANTE: descreva cada foto em `alt` (para leitores de tela).
 */
import { images } from "./images";

/* ── 1. Hero ─────────────────────────────────────────────────── */
export const hero = {
  image: images.hero,
  imageAlt:
    "Casal em silhueta diante do mar ao pôr do sol (imagem de demonstração)",
  lead: "para minha princesa! ",
  // Cada item é uma linha do título. Juntas formam: "Algumas histórias merecem ser lembradas"
  titleLines: [
    "Se eu pudesse voltar no tempo, não mudaria o nosso começo. Mudaria as escolhas que nos fizeram chegar ao fim",
  ],
  scrollHint: "role devagar",
};

/* ── 2. Nossa história ───────────────────────────────────────── */
export const story = {
  id: "nossa-historia",
  title: "Nosso começo",
  note: "o dia que meu mundo ganhou cor!",
  paragraphs: [
    "Tudo começou do jeito mais simples, com alguns chutes por debaixo da mesa kkk sem expectativa de algo serio, mas aos poucos você foi me mudando, e meu deu até animo de querer ir a empresa kkk pois, sabia que te veria lá. ",
    "Aos poucos, o comum foi ganhando outra luz. O caminho de volta ficou mais curto, as horas ao seu lado passaram mais depressa, e eu comecei a guardar detalhes sem perceber: o seu jeito extremamente fofo, o sorriso lindo, que vi poucas vezes... a famosa dancinha da comida, a forma como você me olhava, com esses olhinhos de jabuticaba kk que alias são perfeitos!",
    "Posso te contar uma coisa? naquele dia, onde você disse que queria algo serio, eu fiquei meio relutante né?! kk parecia até que eu não queria, mas posso te contar um segredo? eu não me achava bom o suficiente para você, e nunca havia chegado naquela parte, mas eu só ficava contigo, contava de você para todos os meus amigos, eu já te namorava sem você saber, ah e eu tive medo da sua mãe não gostar de mim kkk   ",
    "Bom... não foi uma história de cinema. Foi melhor, porque foi real: feita de dias comuns que, vistos de longe, viraram a parte mais bonita.",
  ],
  polaroids: [
    {
      src: images.story1,
      alt: "Casal em silhueta ao entardecer, com luzes desfocadas ao fundo (demonstração)",
      caption: "o começo",
      rotate: -4,
    },
    {
      src: images.story2,
      alt: "Casal sob um céu estrelado com a lua ao fundo (demonstração)",
      caption: "voce me assumindo!! 🤬",
      rotate: 3,
    },
    {
      src: images.story3,
      alt: "Casal caminhando junto ao pôr do sol (demonstração)",
      caption: "antes tarde do que nunca, a aliança veio!",
      rotate: -2,
    },
  ],
};

/* ── 3. Frases (inspiradas em filmes românticos; textos autorais) ─ */
export interface QuoteItem {
  text: string;
  cite: string | null;
  image: string;
  align: "left" | "center" | "right";
}

export const quotes = {
  id: "frases",
  title: "Cenas que ficaram",
  items: [
    {
      text: "Eu quero você, eu quero você para sempre, voce e eu, todos os dias!",
      cite: null,
      image: images.quote3,
      align: "right",
    },

    {
      text: "Se eu pudesse escolher de novo, ainda gostaria de conhecer você.",
      cite: null,
      image: images.quote1,
      align: "left",
    },
    {
      text: "será que pode imaginar sua vida daqui 30 anos, 40 anos? por que eu imagino... ",
      cite: null,
      image: images.quote4,
      align: "left",
    },
    {
      text: "Se existe algo que eu escolheria viver outra vez, seria a oportunidade de conhecer você.",
      cite: null,
      image: images.quote2,
      align: "center",
    },
  ] satisfies QuoteItem[],
};

/* ── 4. Galeria de memórias ──────────────────────────────────── */
export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  aspect: "portrait" | "square" | "landscape";
  rotate: number;
}

export const gallery = {
  id: "memorias",
  title: "Memórias",
  note: "vou leva-las para o resto de minha vida! obs(me perdoe as fotos, sei que você vai falar que está feia, mas acredite em mim, voce está PERFEITA!",
  items: [
    {
      src: images.gallery1,
      alt: "Luzes douradas desfocadas ao entardecer (demonstração)",
      caption: "onde comecei a me apaixonar, todos os dias por ti",
      aspect: "portrait",
      rotate: -2,
    },
    {
      src: images.gallery2,
      alt: "Casal em silhueta ao pôr do sol, à esquerda da imagem (demonstração)",
      caption: "nossa primeira viagem, com o filhinho de papai",
      aspect: "landscape",
      rotate: 2,
    },
    {
      src: images.gallery3,
      alt: "Luzes quentes desfocadas sobre fundo vinho (demonstração)",
      caption: "meu coração, sempre será seu!",
      aspect: "landscape",
      rotate: -1.5,
    },
    {
      src: images.gallery4,
      alt: "Céu estrelado sobre uma colina escura (demonstração)",
      caption: "nosso lugar favorito",
      aspect: "portrait",
      rotate: 2.5,
    },
    {
      src: images.gallery5,
      alt: "Casal em silhueta sob um céu rosado (demonstração)",
      caption: "um dia aleatorio, que lembrei que voce disse que amava flores",
      aspect: "portrait",
      rotate: -3,
    },
    {
      src: images.gallery6,
      alt: "Casal em silhueta à direita, com céu alaranjado (demonstração)",
      caption: "apenas um casal lindo em ilhabela",
      aspect: "landscape",
      rotate: 1.5,
    },
    {
      src: images.gallery7,
      alt: "Luzes desfocadas em tons de pêssego e rosa (demonstração)",
      caption: "você me assumindo kkk",
      aspect: "portrait",
      rotate: -2,
    },
    {
      src: images.gallery8,
      alt: "Céu noturno com estrelas sobre uma linha de colinas (demonstração)",
      caption: "na cidade mais romantica, com esse sorriso lindo!",
      aspect: "landscape",
      rotate: 2,
    },
    {
      src: images.gallery9,
      alt: "Céu noturno com estrelas sobre uma linha de colinas (demonstração)",
      caption:
        "aqui estava começando a planejar kkk (mandei pro matheus a foto e contei meu plano) ",
      aspect: "landscape",
      rotate: 2,
    },
    {
      src: images.gallery10,
      alt: "Céu noturno com estrelas sobre uma linha de colinas (demonstração)",
      caption:
        "a gente morto no parque, depois de 10 minutos, e ainda faltavam 50 😑 ",
      aspect: "landscape",
      rotate: 2,
    },
    {
      src: images.gallery11,
      alt: "Céu noturno com estrelas sobre uma linha de colinas (demonstração)",
      caption: "nossa primeira vez (com fortes emoções kk) ",
      aspect: "landscape",
      rotate: 2,
    },
    {
      src: images.gallery12,
      alt: "Céu noturno com estrelas sobre uma linha de colinas (demonstração)",
      caption: "apenas uma foto linda em ubatuba!",
      aspect: "landscape",
      rotate: 2,
    },
    {
      src: images.gallery13,
      alt: "Céu noturno com estrelas sobre uma linha de colinas (demonstração)",
      caption: "mais uma em ubatuba!",
      aspect: "landscape",
      rotate: 2,
    },
    {
      src: images.gallery14,
      alt: "Céu noturno com estrelas sobre uma linha de colinas (demonstração)",
      caption: "você e nosso filhinho não podia faltar né 🥺 ",
      aspect: "landscape",
      rotate: 2,
    },
  ] satisfies GalleryItem[],
};

/* ── 5. O que eu aprendi (carta) ─────────────────────────────── */
export const letter = {
  id: "o-que-eu-aprendi",
  // title: "Bom..",
  salutation: "Para minha primeira e unica princesa!!",
  paragraphs: [
    "Escrevo sem a pretensão de justificar nada. confesso, que foi bem dificil, não sei se você vai sentir algo vendo isso, mas confesso que não pude me conter algumas vezes, mas foi bom relembrar..",
    "Não sei, nem por onde começar, talvez com um, Eu te amo? acho que não! depois de tudo que fiz.. seriam apenas palavras.. me desculpe, se isso parece que novamente estou me culpando, mas afinal, por que não me culparia, perdi a mulher que amo, que sou apaixonado e que até hoje tenho sonhos, onde você veste um lindo vestido branco, e entra na igreja, e estou lá... te esperando no altar...",
    "Bom, mas aprendi a reconhecer meus erros e a assumir minhas responsabilidades sem esperar nada em troca. Entendi que pedir desculpas não significa pedir alguém de volta, mas ter coragem de reconhecer o que fiz e dizer, com sinceridade, aquilo que essa pessoa merece ouvir. Em pensar que uma simples conversa teria resolvido tudo!",
    `Aprendi com você a dar valor ao que parecia pequeno: nossas noites assistindo filmes, o bom dia sincero, as vezes que te buscava, os beijos nos terminais de trem, ${"obs(com gatos nos atrapalhando 😸)"} , o jeito que voce me olhava, e claro,  não podia faltar, nossas noites no cinema!`,
    "Não espero que nada disso apague o que aconteceu. Só queria que você soubesse que eu cresci com o que vivemos, e que levo comigo, com gratidão, cada parte dessa história, inclusive as difíceis,  Nunca vou te esquecer, espero que você seja feliz! e espero estar ao seu lado, mas se eu não estiver... ainda estarei aqui, te amando!",
    "Você deve pensar que nosso caminhos estão em lados opostos, mas não estão, por que você é minha direção, você sempre será a minha direção. Eu sei de um milhão de motivos para não ficarmos juntos, mas eu to cansado deles, to cansado de cada um deles, todos temos que fazer uma escolha e eu escolhe você um milhão de vezes... pelo resto da minha vida!! ",
  ],
  closing: "como amor, seu principe.",
  date: "Outubro de 2026",
};

/* ── 6. Um novo capítulo ─────────────────────────────────────── */
export const newChapter = {
  id: "um-novo-capitulo",
  title: "...",
  paragraphs: [
    "Não sei o que o futuro nos reserva, nem espero que tudo seja perfeito. Só aprendi que algumas histórias merecem, pelo menos, uma conversa sincera antes de ficarem para trás.",
    "Se um dia você também sentir que faz sentido, eu gostaria de ter a oportunidade de escrever uma nova página com você. Sem pressa, sem cobranças e sem promessas vazias. Apenas com sinceridade, carinho e a vontade de fazer diferente.",
  ],
  nerd: "um pouco de nerdice kk",
  reassurance:
    "não sei se existe outras versões nossas, em outros universos, mas se existir, saiba que EU TE AMO em cada UNIVERSO!",
  button: {
    // label: "Você toparia conversar comigo?",
    /**
     * PARA ONDE O BOTÃO LEVA — TROQUE ANTES DE PUBLICAR.
     * Exemplos:
     *   WhatsApp: "https://wa.me/55DDDNUMERO?text=Oi!%20Vi%20o%20site%20e%20topo%20conversar."
     *   E-mail:   "mailto:seu@email.com?subject=Topo%20conversar"
     * (WhatsApp: código do país + DDD + número, só dígitos, ex.: 5571999999999)
     */
    // href: "https://wa.me/5500000000000?text=Oi!%20Vi%20o%20site%20e%20topo%20conversar.",
  },
  // footer: "Feito com carinho, em outubro de 2026.",
};
