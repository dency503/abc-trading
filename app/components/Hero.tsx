'use client';

import { ArrowRight, Play, MapPin, Sparkles } from 'lucide-react';

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
          Clases de trading desde El Salvador
        </div>

        <h1 className="animate-fade-in text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
          <span className="block text-white">Clases de trading online</span>
          <span className="mt-2 block gradient-text">ABC Trading</span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-4xl animate-fade-in text-xl text-gray-200 opacity-0 md:text-2xl"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Aprende trading desde cero con clases online, acompanamiento real y una guia
          clara para avanzar paso a paso con mas criterio y confianza.
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
            Desde El Salvador
          </div>
        </div>

        <div
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row animate-fade-in opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <button
            onClick={() => scrollToSection('clases')}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_18px_40px_rgba(245,200,76,0.24)]"
          >
            Quiero mas informacion
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection('video')}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-yellow-500/70 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-yellow-500 hover:text-black hover:scale-105"
          >
            <Play size={20} />
            Ver como enseno
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
            No soy una academia grande. Soy alguien de El Salvador que aprendio trading y ahora quiere compartir lo que le funciono para ayudar a otros a empezar mejor.
          </p>
        </div>
      </div>
    </section>
  );
}
