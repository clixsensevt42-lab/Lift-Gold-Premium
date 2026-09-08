const WOMAN_IMAGE = "/hero/mulher-hero.jpg";

const iconProps = {
  className: "h-10 w-10",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
} as const;

const FEATURES = [
  {
    title: "Pele mais firme",
    description: "Ajuda a melhorar a firmeza e elasticidade da pele.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Hidratação profunda",
    description: "Mantém a pele hidratada durante todo o dia.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    title: "Redução das linhas",
    description: "Ajuda a suavizar linhas finas e marcas de expressão.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Luminosidade",
    description: "Proporciona uma aparência mais iluminada e saudável.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
  },
  {
    title: "Uso diário",
    description: "Fácil de aplicar e ideal para sua rotina de cuidados.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Sensação de rejuvenescimento",
    description: "Pele com aspecto renovado e mais bonito.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    name: "Maria",
    age: "52 anos",
    city: "São Paulo",
    text: "Minha pele ficou muito mais firme e hidratada. Recebo elogios constantemente.",
    image: "/clientes/maria.jpg",
  },
  {
    name: "Ana",
    age: "48 anos",
    city: "Curitiba",
    text: "As linhas de expressão diminuíram bastante. Estou muito feliz com o resultado.",
    image: "/clientes/ana.jpg",
  },
  {
    name: "Rosana",
    age: "57 anos",
    city: "Belo Horizonte",
    text: "Foi o melhor cuidado que já tive com minha pele. Recomendo para todas.",
    image: "/clientes/rosana.jpg",
  },
];

const KITS = [
  {
    title: "Kit 1 – 1 + 1 DE BRINDE",
    href: "https://www.makepages.com.br/r/AHK401300?u=c&pl=AX256632",
    badge: null,
    items: [
      { label: "1 Frasco de Lift Gold" },
      { label: "+ 1 Frasco de Lift Gold de Brinde", brinde: true },
      { label: "Frete Grátis para todo o Brasil" },
      { label: "Pagamento em até 12x" },
    ],
    price: "R$ 147,85",
    total: "2 Frascos de Lift Gold",
    breakdown: "1 Frasco + 1 de Brinde",
    bonus: "1 + 1 DE BRINDE",
    bottles: 2,
    featured: false,
  },
  {
    title: "Kit 2 – 2 + 2 DE BRINDE",
    href: "https://www.makepages.com.br/r/AHK401300?u=c&pl=QN256633",
    badge: "⭐ MAIS VENDIDO",
    items: [
      { label: "2 Frascos de Lift Gold" },
      { label: "+ 2 Frascos de Lift Gold de Brinde", brinde: true },
      { label: "Frete Grátis para todo o Brasil" },
      { label: "Pagamento em até 12x" },
    ],
    price: "R$ 269,90",
    total: "4 Frascos de Lift Gold",
    breakdown: "2 Frascos + 2 de Brinde",
    bonus: "2 + 2 DE BRINDE",
    bottles: 4,
    featured: true,
  },
  {
    title: "Kit 3 – 3 + 3 DE BRINDE",
    href: "https://www.makepages.com.br/r/AHK401300?u=c&pl=PN256634",
    badge: "👑 MELHOR OFERTA",
    items: [
      { label: "3 Frascos de Lift Gold" },
      { label: "+ 3 Frascos de Lift Gold de Brinde", brinde: true },
      { label: "Frete Grátis para todo o Brasil" },
      { label: "Pagamento em até 12x" },
    ],
    price: "R$ 379,85",
    total: "6 Frascos de Lift Gold",
    breakdown: "3 Frascos + 3 de Brinde",
    bonus: "3 + 3 DE BRINDE",
    bottles: 6,
    featured: false,
  },
];
const STEPS = [
  {
    number: 1,
    title: "Limpe a pele",
    description: "Lave e seque o rosto antes da aplicação.",
  },
  {
    number: 2,
    title: "Aplique o Lift Gold",
    description: "Aplique uma pequena quantidade no rosto.",
  },
  {
    number: 3,
    title: "Massageie suavemente",
    description: "Espalhe o produto até sua completa absorção.",
  },
  {
    number: 4,
    title: "Mantenha sua rotina",
    description: "Use diariamente conforme a orientação do produto.",
  },
];

const SECURE_ITEMS = [
  {
    title: "Compra Segura",
    description: "Ambiente protegido com tecnologia de segurança.",
    icon: (
      <svg {...iconProps}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Pagamento em até 12x",
    description: "Cartão, Pix e outras formas de pagamento, em até 12x.",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: "Frete Grátis para todo o Brasil",
    description: "Entrega gratuita para todo o Brasil.",
    icon: (
      <svg {...iconProps}>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    question: "O que é o Lift Gold?",
    answer:
      "O Lift Gold é um produto de cuidado com a pele desenvolvido para ajudar a manter a pele hidratada, firme e com aparência radiante.",
  },
  {
    question: "Como devo usar o produto?",
    answer:
      "Use diariamente conforme a orientação do produto. Limpe a pele, aplique uma pequena quantidade no rosto e espalhe até completa absorção.",
  },
  {
    question: "Em quanto tempo vou ver resultados?",
    answer:
      "Os resultados podem variar de pessoa para pessoa, pois cada pele é única. O uso contínuo conforme a recomendação é importante.",
  },
  {
    question: "Como faço o pagamento?",
    answer:
      "Você pode pagar com cartão, Pix e outras formas de pagamento, em até 12x. Tudo em um ambiente seguro.",
  },
];

const FOOTER_NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "FAQs", href: "#faq" },
];

const PURCHASE_SAFETY = [
  {
    title: "Compra Segura",
    description: "Ambiente protegido com tecnologia de segurança.",
    icon: (
      <svg {...iconProps}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Pagamento em até 12x",
    description: "Cartão, Pix e outras formas de pagamento, em até 12x.",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: "Frete Grátis para todo o Brasil",
    description: "Entrega gratuita para todo o Brasil.",
    icon: (
      <svg {...iconProps}>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: "Compra com Confiança",
    description: "Tenha mais tranquilidade durante sua compra.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const BEFORE_AFTER_ITEMS = [
  {
    name: "Cliente 1",
    image: "/antes-depois/cliente-1.jpg",
    beforeAlt: "Foto da cliente antes do uso do Lift Gold",
    afterAlt: "Foto da cliente depois do uso do Lift Gold",
    caption: "Registro real compartilhado por uma cliente.",
  },
  {
    name: "Cliente 2",
    image: "/antes-depois/cliente-2.jpg",
    beforeAlt: "Foto da cliente antes do uso do Lift Gold",
    afterAlt: "Foto da cliente depois do uso do Lift Gold",
    caption: "Registro real compartilhado por uma cliente.",
  },
  {
    name: "Cliente 3",
    image: "/antes-depois/cliente-3.png",
    beforeAlt: "Foto da cliente antes do uso do Lift Gold",
    afterAlt: "Foto da cliente depois do uso do Lift Gold",
    caption: "Registro real compartilhado por uma cliente.",
  },
  {
    name: "Cliente 4",
    image: "/antes-depois/cliente-4.png.webp",
    beforeAlt: "Foto da cliente antes do uso do Lift Gold",
    afterAlt: "Foto da cliente depois do uso do Lift Gold",
    caption: "Registro real compartilhado por uma cliente.",
  },
  {
    name: "Cliente 5",
    image: "/antes-depois/cliente-5.png.webp",
    beforeAlt: "Foto da cliente antes do uso do Lift Gold",
    afterAlt: "Foto da cliente depois do uso do Lift Gold",
    caption: "Registro real compartilhado por uma cliente.",
  },
];

export default function Home() {
  return (
    <>
      <main
        id="inicio"
        className="grid min-h-screen grid-cols-1 items-center gap-14 bg-[#090909] px-6 py-16 text-white lg:grid-cols-2 lg:gap-20 lg:px-20"
      >
        <section>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium tracking-wide text-[#D4AF37]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            CUIDADO PREMIUM PARA MULHERES 40+
          </span>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Sua pele merece voltar a{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
              brilhar
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            Uma rotina de cuidado premium para ajudar a manter a pele
            hidratada, firme e com aparência mais radiante.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#ofertas"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] px-8 py-4 text-center font-semibold uppercase tracking-wide text-[#090909] shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]"
            >
              Quero Garantir Meu Lift Gold
            </a>
            <a
              href="#ofertas"
              className="inline-flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#D4AF37]/5 px-8 py-4 text-center font-semibold uppercase tracking-wide text-[#D4AF37] transition-all duration-300 hover:scale-105 hover:bg-[#D4AF37]/15"
            >
              Ver Ofertas
            </a>
          </div>

          <ul className="mt-9 space-y-3">
            <li className="flex items-center gap-3 text-neutral-300">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-xs text-[#D4AF37]">
                ✔
              </span>
              Compra Segura
            </li>
            <li className="flex items-center gap-3 text-neutral-300">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-xs text-[#D4AF37]">
                ✔
              </span>
              Frete para todo o Brasil
            </li>
            <li className="flex items-center gap-3 text-neutral-300">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-xs text-[#D4AF37]">
                ✔
              </span>
              Pagamento em até 12x
            </li>
          </ul>
        </section>

        <section className="flex items-center justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 shadow-[0_0_80px_rgba(212,175,55,0.18)]">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-80 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <div className="relative h-80 overflow-hidden rounded-3xl">
              <img
                src={WOMAN_IMAGE}
                alt="Mulher elegante com pele bonita e expressão feliz"
                className="h-full w-full rounded-3xl object-cover object-top"
              />
            </div>

            <div className="mx-auto mt-6 h-px w-16 bg-[#D4AF37]/40" />

            <div className="relative mt-5 flex items-center justify-center">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/35 blur-2xl sm:h-72 sm:w-72" />
              <img
                src="/images/lift-gold.png"
                alt="Frasco Lift Gold com acabamento dourado"
                className="relative aspect-square w-full max-w-[260px] object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.8)]"
              />
            </div>

            <p className="mt-4 text-center text-lg font-semibold text-[#D4AF37]">
              Frasco Lift Gold
            </p>
          </div>
        </section>
      </main>

      <section
        id="beneficios"
        className="bg-[#090909] px-6 py-20 text-white lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Por que escolher{" "}
            <span className="text-[#D4AF37]">Lift Gold</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-neutral-400">
            Uma fórmula desenvolvida para cuidar da sua pele diariamente.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_45px_rgba(212,175,55,0.25)]"
              >
                <div className="text-[#D4AF37]">{feature.icon}</div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="depoimentos"
        className="bg-[#090909] px-6 py-20 text-white lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Veja o que nossas clientes estão dizendo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-neutral-400">
            Experiências reais de mulheres que escolheram cuidar da pele com
            Lift Gold.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-[#D4AF37]/20 bg-[#111111] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_45px_rgba(212,175,55,0.25)]"
              >
                <div className="flex items-center gap-4">
                  <div className="h-[80px] w-[80px] overflow-hidden rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/15 sm:h-24 sm:w-24">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={`Foto de ${testimonial.name}`}
                        className="h-full w-full object-cover object-center"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-lg font-bold text-[#D4AF37]">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold uppercase tracking-wide text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-neutral-400">
                      {testimonial.age} • {testimonial.city}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1 text-lg tracking-wider text-[#D4AF37]">
                  ★★★★★
                </div>
                <p className="mt-4 leading-relaxed text-neutral-300">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="video-depoimentos"
        className="bg-[#090909] px-6 py-20 text-white lg:px-20"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Histórias reais.{" "}
            <span className="text-[#D4AF37]">Experiências reais.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-neutral-400">
            Veja o depoimento de quem já conhece o Lift Gold.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="rounded-2xl border border-[#D4AF37]/30 bg-black p-3 shadow-[0_0_60px_rgba(212,175,55,0.15)] sm:p-4">
                <video
                  src="/EDILENE_DEPOIMENTO_LG_PRONTO.mp4"
                  className="aspect-video w-full rounded-xl object-contain"
                  controls
                  preload="metadata"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold text-white">Edilene</p>
                <p className="mt-1 text-sm text-neutral-400">
                  Depoimento de cliente
                </p>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-[#D4AF37]/30 bg-black p-3 shadow-[0_0_60px_rgba(212,175,55,0.15)] sm:p-4">
                <video
                  src="/DORA_DEPOIMENTO_LIFT_GOLD_PRONTO.mp4"
                  className="aspect-video w-full rounded-xl object-contain"
                  controls
                  preload="metadata"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold text-white">Dora</p>
                <p className="mt-1 text-sm text-neutral-400">
                  Depoimento de cliente
                </p>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-[#D4AF37]/30 bg-black p-3 shadow-[0_0_60px_rgba(212,175,55,0.15)] sm:p-4">
                <video
                  src="/F%C3%81TIMA_DEPOIMENTO_CLIENTE_LG_CORTADO.mp4"
                  className="aspect-video w-full rounded-xl object-contain"
                  controls
                  preload="metadata"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold text-white">Fátima</p>
                <p className="mt-1 text-sm text-neutral-400">
                  Depoimento de cliente
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-[#D4AF37]/30 bg-black p-3 shadow-[0_0_60px_rgba(212,175,55,0.15)] sm:p-4">
                <video
                  src="/SILVIA_DEPOIMENTO_LG.mp4"
                  className="aspect-video w-full rounded-xl object-contain"
                  controls
                  preload="metadata"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold text-white">Silvia</p>
                <p className="mt-1 text-sm text-neutral-400">
                  Depoimento de cliente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="antes-depois"
        className="bg-[#090909] px-6 py-20 text-white lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Experiências <span className="text-[#D4AF37]">reais</span> de nossas clientes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-neutral-400">
            Confira alguns registros de antes e depois compartilhados por nossas clientes.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BEFORE_AFTER_ITEMS.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#111111] transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_45px_rgba(212,175,55,0.25)]"
              >
                {item.image ? (
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={`${item.beforeAlt} / ${item.afterAlt}`}
                      className="w-full object-contain"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-300 backdrop-blur-sm">
                      Antes
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-300 backdrop-blur-sm">
                      Depois
                    </span>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex aspect-[4/5] items-center justify-center border-b border-[#D4AF37]/10 bg-neutral-900 sm:border-b-0 sm:border-r">
                      <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                        Foto Antes
                      </p>
                    </div>
                    <div className="flex aspect-[4/5] items-center justify-center bg-neutral-900">
                      <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                        Foto Depois
                      </p>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <p className="text-lg font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="mt-2 text-neutral-400">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ofertas"
        className="bg-[#090909] px-6 py-20 text-white lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Escolha o kit ideal para você
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-neutral-400">
            Quanto maior o kit, maior a economia.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-center text-neutral-300">
            Em todos os kits, você recebe{" "}
            <span className="font-semibold text-[#D4AF37]">
              frascos extras de Lift Gold como brinde
            </span>
            .
          </p>

          <div className="mt-14 grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
            {KITS.map((kit) => (
              <div
                key={kit.title}
                className={`relative flex flex-col rounded-2xl border bg-[#111111] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_45px_rgba(212,175,55,0.25)] sm:p-8 ${
                  kit.badge ? "pt-12" : ""
                } ${
                  kit.featured
                    ? "border-[#D4AF37]/40 md:-translate-y-4 md:scale-[1.04]"
                    : "border-[#D4AF37]/20"
                }`}
              >
                {kit.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#D4AF37] px-4 py-1 text-sm font-bold text-[#090909] shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    {kit.badge}
                  </span>
                )}

                <h3 className="text-center text-2xl font-bold text-white">
                  {kit.title}
                </h3>

                <div className="mt-5 rounded-xl border border-[#D4AF37]/20 bg-gradient-to-b from-neutral-900 to-neutral-950 px-4 pb-5 pt-3">
                  <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                    Você Recebe
                  </p>

                  <div
                    className={`mt-3 grid grid-cols-2 auto-rows-fr gap-3 ${
                      kit.bottles <= 2
                        ? "h-32 sm:h-64"
                        : kit.bottles <= 4
                          ? "h-60 sm:h-80"
                          : "h-[20rem] sm:h-[26rem]"
                    }`}
                  >
                    {Array.from({ length: kit.bottles }).map((_, i) => (
                      <img
                        key={i}
                        src="/images/lift-gold.png"
                        alt="Frasco Lift Gold com acabamento dourado"
                        className="h-full w-full object-contain drop-shadow-[0_0_18px_rgba(212,175,55,0.45)]"
                      />
                    ))}
                  </div>

                  <div className="mt-4 rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-3 text-center">
                    <p className="text-lg font-extrabold uppercase tracking-wide text-white">
                      {kit.total}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-[#D4AF37]">
                      {kit.bonus}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {kit.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-start gap-2.5 text-neutral-300"
                    >
                      <span className="mt-0.5 text-[#D4AF37]">✔</span>
                      <span
                        className={
                          item.brinde
                            ? "font-semibold text-[#D4AF37]"
                            : undefined
                        }
                      >
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    Por apenas
                  </p>
                  <p className="mt-1 text-4xl font-extrabold text-[#D4AF37] drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                    {kit.price}
                  </p>
                </div>

                {kit.featured && (
                  <p className="mt-2 text-center text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                    Melhor Custo-Benefício
                  </p>
                )}

                <div className="mt-auto pt-8">
                  <a
                    href={kit.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full bg-[#D4AF37] px-4 py-4 text-center text-sm font-semibold uppercase tracking-wide text-[#090909] sm:px-6 sm:text-base"
                  >
                    Quero Aproveitar Essa Oferta
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="como-funciona"
        className="bg-[#090909] px-6 py-20 text-white lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Como funciona o <span className="text-[#D4AF37]">Lift Gold</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-neutral-400">
            Uma rotina simples de cuidados para ajudar a manter sua pele
            hidratada, firme e com aparência radiante.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#D4AF37]/20 bg-[#111111] p-8 text-center transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_45px_rgba(212,175,55,0.25)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#D4AF37] text-2xl font-bold text-[#D4AF37]">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-neutral-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#090909] px-6 py-20 text-white lg:px-20">
        <div className="mx-auto max-w-6xl">
          <span className="mx-auto flex w-fit items-center gap-2.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium tracking-wide text-[#D4AF37]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            Compra 100% Segura
          </span>

          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Compre com <span className="text-[#D4AF37]">Tranquilidade</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-neutral-400">
            Tudo pensado para você comprar com segurança, praticidade e
            tranquilidade.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PURCHASE_SAFETY.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 text-center transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_45px_rgba(212,175,55,0.25)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#ofertas"
              className="w-full max-w-sm rounded-full bg-[#D4AF37] px-10 py-4 text-center font-semibold uppercase tracking-wide text-[#090909] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] sm:w-auto"
            >
              Quero Aproveitar a Oferta
            </a>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="bg-[#090909] px-6 py-20 text-white lg:px-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[#D4AF37] sm:text-4xl lg:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-neutral-400">
            Tire suas principais dúvidas antes de comprar.
          </p>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#D4AF37]/20 bg-[#111111] transition-colors duration-300 hover:border-[#D4AF37]/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-semibold text-white">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 text-2xl leading-none text-[#D4AF37]">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-neutral-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="secure-reveal" className="bg-[#090909] px-6 py-20 text-white lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Compra <span className="text-[#D4AF37]">100% Segura</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-neutral-400">
            Compre com tranquilidade. Seus dados são protegidos e sua compra é
            realizada em ambiente seguro.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECURE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="reveal-card rounded-2xl border border-[#D4AF37]/20 bg-[#111111] p-8 transition-all duration-500 ease-out hover:border-[#D4AF37]/50 hover:shadow-[0_0_45px_rgba(212,175,55,0.25)]"
              >
                <div className="text-[#D4AF37]">{item.icon}</div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-neutral-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#ofertas"
              className="w-full max-w-sm rounded-full bg-[#D4AF37] px-10 py-4 text-center font-semibold uppercase tracking-wide text-[#090909] sm:w-auto"
            >
              Quero Garantir Meu Lift Gold
            </a>
          </div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){var grid=document.getElementById("secure-reveal");if(!grid||!("IntersectionObserver" in window)){return;}var cards=grid.querySelectorAll(".reveal-card");cards.forEach(function(el,i){el.style.opacity="0";el.style.transform="translateY(1.5rem)";el.style.transitionDelay=(i*80)+"ms";});var o=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){cards.forEach(function(el){el.style.opacity="1";el.style.transform="translateY(0)";});o.disconnect();}});},{threshold:0.15});o.observe(grid);})();',
          }}
        />
      </section>

      <section className="relative overflow-hidden bg-[#090909] px-6 py-24 text-white lg:px-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium tracking-wide text-[#D4AF37]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            LIFT GOLD
          </span>

          <h2 className="mt-8 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Sua pele merece{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
              esse cuidado.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
            Cuide da sua pele, valorize sua beleza e escolha o cuidado que
            combina com você.
          </p>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              "Cuidado premium para a pele",
              "Pele mais firme e hidratada",
              "Frete grátis para todo o Brasil",
              "Pagamento em até 12x",
            ].map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2.5 text-neutral-200"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15 text-xs text-[#D4AF37]">
                  ✔
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <a
            href="#ofertas"
            className="mt-12 w-full max-w-md rounded-full bg-[#D4AF37] px-12 py-5 text-center text-lg font-semibold uppercase tracking-wide text-[#090909] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(212,175,55,0.55)] sm:w-auto"
          >
            Quero Garantir Meu Lift Gold
          </a>
        </div>
      </section>

      <footer className="border-t border-[#D4AF37]/30 bg-[#030303] px-6 pt-16 text-white lg:px-20">
        <style>{`html { scroll-behavior: smooth; }`}</style>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-12 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-left">
            <div>
              <p className="text-2xl font-bold tracking-wide text-[#D4AF37]">
                LIFT GOLD
              </p>
              <p className="mt-3 text-neutral-400">
                Beleza • Elegância • Autoestima
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                Navegação
              </h4>
              <ul className="mt-4 space-y-3">
                {FOOTER_NAV.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-block py-2 text-neutral-400 transition-colors hover:text-[#D4AF37] sm:py-0"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                Atendimento
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="https://wa.me/5514991179584"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 text-neutral-400 transition-colors hover:text-[#D4AF37] sm:py-0"
                  >
                    Fale conosco
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5514991179584"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 text-neutral-400 transition-colors hover:text-[#D4AF37] sm:py-0"
                  >
                    Atendimento pelo WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                Compra
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#ofertas"
                    className="inline-block py-2 text-neutral-400 transition-colors hover:text-[#D4AF37] sm:py-0"
                  >
                    Escolha seu kit
                  </a>
                </li>
                <li>
                  <a
                    href="#ofertas"
                    className="inline-block py-2 text-neutral-400 transition-colors hover:text-[#D4AF37] sm:py-0"
                  >
                    Comprar Lift Gold
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 border-t border-[#D4AF37]/30 pt-8 text-center">
            <p className="text-sm text-neutral-400">
              © 2026 Lift Gold. Todos os direitos reservados.
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Beleza, elegância e autoestima.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}


