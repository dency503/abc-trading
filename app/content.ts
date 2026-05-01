export const contact = {
  whatsappPhone: '50379587850',
  whatsappClassText: 'Hola quiero información sobre las clases de trading',
  whatsappQuestionText: 'Tengo una pregunta sobre las clases de trading',
  whatsappVideoText:
    'Vi tu video de introduccion y quiero saber mas sobre las clases',
  whatsappCommunity:
    'https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t',
  telegram: 'https://t.me/Trading503SV',
};

export const getWhatsAppUrl = (text = contact.whatsappClassText) =>
  `https://api.whatsapp.com/send?phone=${contact.whatsappPhone}&text=${encodeURIComponent(text)}`;

export const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/#video', label: 'Video' },
  { href: '/clases', label: 'Clases' },
  { href: '/indicador', label: 'Indicador' },
];

export const trustReasons = [
  {
    icon: 'zap',
    title: 'Trading real, no teoría',
    description:
      'No vendemos cursos repetidos. Enseñamos lo que realmente funciona con price action y herramientas que usamos en mercado real.',
    stat: 'Desde 2020 operando en real',
  },
  {
    icon: 'users',
    title: 'Acompañamiento cercano',
    description:
      'No eres un número. Clases en vivo, dudas resueltas directamente y comunidad activa que aprende contigo.',
    stat: 'Comunidad latinoamericana',
  },
  {
    icon: 'trophy',
    title: 'Indicadores propios',
    description:
      'Price Logistic 7 es una herramienta propia para leer estructura, pivotes y zonas clave del mercado.',
    stat: 'Creados con experiencia',
  },
  {
    icon: 'check',
    title: 'Mentalidad de trader',
    description:
      'Aprendes a pensar como trader, no como apostador: gestión de riesgo, disciplina y consistencia.',
    stat: 'Base sólida para avanzar',
  },
];

export const benefits = [
  {
    icon: 'book',
    title: 'Clases estructuradas',
    description:
      'Desde cero: mercados, price action, estructura y lógica operacional.',
  },
  {
    icon: 'zap',
    title: 'Indicador Price Logistic 7',
    description:
      'Herramienta exclusiva para identificar oportunidades dentro de la estructura del mercado.',
  },
  {
    icon: 'chart',
    title: 'Bots automatizados',
    description:
      'Aprende a usar bots para optimizar entradas y ejecutar con más disciplina.',
  },
  {
    icon: 'users',
    title: 'Comunidad activa',
    description:
      'Interactúa con otros traders en tiempo real, comparte análisis y experiencias.',
  },
  {
    icon: 'message',
    title: 'Soporte directo',
    description:
      'Tus dudas no quedan sin responder. Comunicación cercana conmigo y el equipo.',
  },
  {
    icon: 'target',
    title: 'Plan de consistencia',
    description:
      'Metodología para operar con disciplina y gestionar riesgos correctamente.',
  },
];

export const ctaSteps = [
  'Chatea conmigo por WhatsApp',
  'Cuéntame tu experiencia en trading',
  'Te presento las opciones disponibles',
  'Comienzas a aprender con estructura',
];

export const testimonials = [
  {
    name: 'Carlos M.',
    role: 'Trader en USD',
    comment:
      'Empecé sin experiencia y en 3 meses ya operaba con más confianza. Price Logistic 7 cambió mi forma de ver el mercado.',
    rating: 5,
  },
  {
    name: 'María L.',
    role: 'Trader desde Guatemala',
    comment:
      'Lo que me gustó fue que ABC no vende falsas promesas. Te enseña la realidad: disciplina, riesgo y consistencia.',
    rating: 5,
  },
  {
    name: 'Jorge P.',
    role: 'Trader autónomo',
    comment:
      'Las clases son dinámicas y puedes hacer preguntas reales. No es un video grabado, es acompañamiento real.',
    rating: 5,
  },
  {
    name: 'Diana R.',
    role: 'Trading en BingX',
    comment:
      'La comunidad es lo mejor. Gente real compartiendo análisis, tips y experiencias. No es marketing, es genuino.',
    rating: 5,
  },
  {
    name: 'Andrés T.',
    role: 'Trader en futuros',
    comment:
      'Pasé de perder dinero a operar con criterio. ABC me enseñó a pensar como trader, no como apostador.',
    rating: 5,
  },
  {
    name: 'Sofía C.',
    role: 'Trader desde El Salvador',
    comment:
      'El precio es accesible y la calidad de enseñanza no tiene comparación. Lo recomiendo a cualquiera que sea serio.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: '¿Necesito experiencia en trading para entrar?',
    answer:
      'No. Las clases están diseñadas desde cero. Lo único que necesitas es disciplina, disposición para aprender y ganas de hacer trading de verdad.',
  },
  {
    question: '¿Cuánto cuesta y cuáles son los horarios?',
    answer:
      'Los precios y horarios varían según el programa. Escríbeme por WhatsApp y te muestro las opciones disponibles.',
  },
  {
    question: '¿Puedo usar los indicadores en cualquier broker?',
    answer:
      'Price Logistic 7 funciona con TradingView y puede ayudarte a analizar activos disponibles en brokers como BingX, Bybit y Binance Futures.',
  },
  {
    question: '¿Las clases son en vivo o grabadas?',
    answer:
      'Las clases son en vivo para responder dudas en tiempo real, adaptar el contenido y mantener un acompañamiento cercano.',
  },
  {
    question: '¿Garantizan ganancias?',
    answer:
      'No. Nadie honesto puede garantizar ganancias. Lo que ofrecemos es educación clara, herramientas reales y una metodología ordenada.',
  },
  {
    question: '¿Hay soporte después de las clases?',
    answer:
      'Sí. La comunidad permanece activa para hacer preguntas, compartir análisis y reforzar lo aprendido.',
  },
  {
    question: '¿Puedo obtener el indicador sin tomar las clases?',
    answer:
      'El indicador funciona mejor con la mentalidad y conocimientos que enseño. Por eso normalmente se ofrece dentro del proceso formativo.',
  },
];

export const communityPlatforms = [
  {
    icon: 'youtube',
    name: 'YouTube',
    description: 'Análisis de mercado, trading en vivo y tutoriales.',
    link: 'https://youtube.com/@abctrading503',
    color: 'from-red-600 to-red-700',
  },
  {
    icon: 'telegram',
    name: 'Telegram',
    description: 'Canal gratuito con señales e información diaria.',
    link: contact.telegram,
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: 'whatsapp',
    name: 'WhatsApp',
    description: 'Comunidad oficial de ABC del Trading 503.',
    link: 'https://whatsapp.com/channel/0029VbCAwvr2kNFzCxv5fk1q',
    color: 'from-green-600 to-green-700',
  },
  {
    icon: 'tiktok',
    name: 'TikTok',
    description: 'Tips cortos y análisis rápidos del mercado.',
    link: 'https://www.tiktok.com/@pricelogic7',
    color: 'from-gray-900 to-black',
  },
  {
    icon: 'indicator',
    name: 'Indicador',
    description: 'Detalles, planes y preview de Price Logistic 7.',
    link: '/indicador',
    color: 'from-purple-600 to-purple-700',
  },
  {
    icon: 'broker',
    name: 'BingX',
    description: 'Opera conmigo y accede a beneficios exclusivos.',
    link: 'https://bingxdao.com/partner/ABCTrading503/',
    color: 'from-yellow-500 to-yellow-600',
  },
];
