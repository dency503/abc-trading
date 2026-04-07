'use client';

import { ArrowRight, Play, MapPin, Sparkles, CandlestickChart } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,200,76,0.14),transparent_28%)]" />
      <div className="absolute top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="container relative mx-auto text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300">
          <MapPin size={16} />
          Clases de trading e indicador desde El Salvador
        </div>

        <h1 className="animate-fade-in text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
          <span className="block text-white">Clases online e indicador</span>
          <span className="mt-2 block gradient-text">ABC del Trading 503</span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-4xl animate-fade-in text-xl text-gray-200 opacity-0 md:text-2xl"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Aprende trading desde cero con clases en vivo, acompanamiento real y el
          indicador Price Logistic 7 para ayudarte a leer mejor el mercado y tomar
          decisiones con mas criterio.
        </p>

        <div
          className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-in opacity-0"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
            Experiencia real
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
            Trato cercano
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
            Indicador Price Logistic 7
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
            Desde El Salvador
          </div>
        </div>

        <div
          className="mx-auto mt-10 grid max-w-5xl gap-4 animate-fade-in opacity-0 md:grid-cols-2"
          style={{ animationDelay: '0.42s', animationFillMode: 'forwards' }}
        >
          <button
            onClick={() => scrollToSection('clases')}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-left backdrop-blur transition hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/10"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/15 text-yellow-300">
              <Sparkles size={22} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">Clases</p>
            <p className="mt-2 text-2xl font-bold text-white">Aprende conmigo y con mas personas en vivo</p>
            <p className="mt-3 text-sm text-gray-300">
              Entra a sesiones online con explicacion clara, practica guiada y espacio para preguntas reales.
            </p>
          </button>

          <button
            onClick={() => scrollToSection('indicadores')}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-left backdrop-blur transition hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/10"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/15 text-yellow-300">
              <CandlestickChart size={22} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">Indicador</p>
            <p className="mt-2 text-2xl font-bold text-white">Usa Price Logistic 7 como herramienta de apoyo</p>
            <p className="mt-3 text-sm text-gray-300">
              Dale estructura a tu analisis con señales, contexto visual y una lectura de mercado mas ordenada.
            </p>
          </button>
        </div>

        <div
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row animate-fade-in opacity-0"
          style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
        >
          <button
            onClick={() => scrollToSection('clases')}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_18px_40px_rgba(245,200,76,0.24)]"
          >
            Ver clases
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection('indicadores')}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-yellow-500/70 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-yellow-500 hover:text-black hover:scale-105"
          >
            Ver indicador
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection('video')}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/70 hover:bg-yellow-500/10 hover:scale-105"
          >
            <Play size={20} />
            Ver como enseño
          </button>
        </div>

        <div
          className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur animate-fade-in opacity-0"
          style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}
        >
          <div className="mb-2 flex items-center justify-center gap-2 text-yellow-300">
            <Sparkles size={16} />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">Mi historia</span>
          </div>
          <p className="text-sm text-gray-300 md:text-base">
            No soy una academia. No es esquema ponzi, no es una esquema piramidal. Soy alguien de El Salvador que aprendio trading y ahora quiere compartir lo que le funciono para ayudar a otros a empezar mejor.
          </p>
                  </div>
      </div>
    </section>
  );
}
