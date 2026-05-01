'use client';

import { ArrowRight, Play, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const isVisible = true;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      aria-labelledby="home-heading"
      className="relative flex min-h-screen items-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(232,239,238,0.98)] via-white to-white" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[rgba(53,78,82,0.08)] to-[rgba(96,125,128,0.04)] blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-[10%] h-48 w-48 rounded-full bg-[rgba(53,78,82,0.06)] blur-3xl animate-float" />
        <div className="absolute right-[5%] top-1/3 h-36 w-36 rounded-full bg-[rgba(96,125,128,0.08)] blur-3xl animate-float-delayed" />
      </div>

      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]">
        <div className="h-full w-full bg-[linear-gradient(rgba(53,78,82,1)_1px,transparent_1px),linear-gradient(90deg,rgba(53,78,82,1)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => scrollToSection('video')}
          className="group flex flex-col items-center gap-2 text-xs font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--brand-blue)]"
          aria-label="Scroll para ver más"
        >
          <span className="uppercase tracking-widest">Explorar</span>
          <ChevronDown size={20} className="transition-transform group-hover:translate-y-1" />
        </button>
      </div>

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-5xl text-center">
          {/* Location badge */}
          <div
            className={`mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(53,78,82,0.12)] bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <MapPin size={15} className="text-[var(--brand-blue)]" />
            <span className="text-sm font-medium text-[var(--ink-main)]">
              Clases de trading e indicador desde El Salvador
            </span>
            <Sparkles size={14} className="text-[var(--brand-yellow)]" />
          </div>

          {/* Main heading */}
          <h1
            id="home-heading"
            className={`space-y-4 transition-all duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="block text-5xl font-black leading-tight tracking-tight text-[var(--ink-main)] sm:text-6xl md:text-7xl lg:text-8xl">
              Aprende trading
            </span>
            <span className="block text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="gradient-text">con estructura real</span>
            </span>
            <span className="block text-3xl font-bold leading-tight tracking-tight text-[var(--ink-main)] sm:text-4xl md:text-5xl lg:text-6xl">
              ABC del Trading 503
            </span>
          </h1>

          {/* Divider */}
          <div
            className={`mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--brand-yellow)] to-[var(--brand-blue)] transition-all duration-700 delay-200 ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
          />

          {/* Description */}
          <p
            className={`mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[var(--ink-main)] sm:text-xl md:text-2xl md:leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Clases online desde cero, acompañamiento real y el indicador{' '}
            <span className="font-semibold text-[var(--brand-blue)]">Price Logistic 7</span>
            {' '}como herramienta de apoyo para leer mejor el mercado.
          </p>

          {/* Subtitle */}
          <div
            className={`mx-auto mt-6 max-w-2xl transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-3 rounded-2xl border border-[rgba(53,78,82,0.08)] bg-[rgba(232,239,238,0.5)] px-6 py-3 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-[var(--brand-yellow)]" />
              <p className="text-sm text-[var(--ink-soft)] md:text-base">
                No somos academia ni vendemos cursos. Somos un trader real de El Salvador que enseña lo que funciona.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Link
              href="/clases"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-dark)] px-8 py-4 font-bold text-white shadow-lg shadow-[rgba(53,78,82,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[rgba(53,78,82,0.2)] sm:w-auto"
            >
              Ver clases disponibles
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            
            <button
              onClick={() => scrollToSection('video')}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-[rgba(53,78,82,0.15)] bg-white/80 px-8 py-4 font-bold text-[var(--ink-main)] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[var(--brand-blue)] hover:bg-white hover:shadow-xl sm:w-auto"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(53,78,82,0.08)] transition-colors duration-300 group-hover:bg-[var(--brand-blue)]">
                <Play
                  size={16}
                  className="fill-current text-[var(--brand-blue)] transition-colors duration-300 group-hover:text-white"
                />
              </span>
              Ver cómo enseño
            </button>
          </div>

          {/* Stats or social proof */}
          <div
            className={`mt-16 flex flex-wrap items-center justify-center gap-8 transition-all duration-700 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl font-black text-[var(--brand-blue)]">+500</div>
              <div className="text-sm text-[var(--ink-soft)]">Estudiantes activos</div>
            </div>
            <div className="h-8 w-px bg-[rgba(53,78,82,0.15)]" />
            <div className="text-center">
              <div className="text-2xl font-black text-[var(--brand-blue)]">3 años</div>
              <div className="text-sm text-[var(--ink-soft)]">De experiencia</div>
            </div>
            <div className="h-8 w-px bg-[rgba(53,78,82,0.15)]" />
            <div className="text-center">
              <div className="text-2xl font-black text-[var(--brand-blue)]">SV</div>
              <div className="text-sm text-[var(--ink-soft)]">Desde El Salvador</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
