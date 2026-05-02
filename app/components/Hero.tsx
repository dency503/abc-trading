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
      {/* Background layers - simplified gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f7f6] via-white to-white" />
      
      {/* Animated gradient orbs - softer and fewer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[rgba(53,78,82,0.06)] to-[rgba(96,125,128,0.03)] blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-[5%] h-72 w-72 rounded-full bg-[rgba(53,78,82,0.04)] blur-3xl animate-float" />
        <div className="absolute right-[8%] top-1/4 h-56 w-56 rounded-full bg-[rgba(96,125,128,0.06)] blur-3xl animate-float-delayed" />
      </div>

      {/* Grid pattern overlay - subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(rgba(53,78,82,1)_1px,transparent_1px),linear-gradient(90deg,rgba(53,78,82,1)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Scroll indicator - restyled */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('video')}
          className="group flex flex-col items-center gap-2.5"
          aria-label="Scroll para ver más"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--ink-soft)]/60 transition-colors group-hover:text-[var(--brand-blue)]">
            Explorar
          </span>
          <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[var(--ink-soft)]/20 p-1.5 transition-colors group-hover:border-[var(--brand-blue)]/40">
            <ChevronDown size={14} className="text-[var(--ink-soft)]/50 animate-bounce-subtle transition-colors group-hover:text-[var(--brand-blue)]" />
          </span>
        </button>
      </div>

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-5xl text-center">
          
          {/* Location badge - refined glass effect */}
          <div
            className={`mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/50 bg-white/60 px-5 py-2.5 shadow-sm backdrop-blur-md transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <MapPin size={15} className="text-[var(--brand-blue)]" strokeWidth={2} />
            <span className="text-sm font-medium text-[var(--ink-main)]">
              Clases de trading e indicador desde El Salvador
            </span>
            <Sparkles size={14} className="text-[var(--brand-yellow)]" />
          </div>

          {/* Main heading - improved typography scale */}
          <h1
            id="home-heading"
            className={`space-y-2 transition-all duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="block text-[clamp(3rem,8vw,7rem)] font-black leading-[0.95] tracking-tight text-[var(--ink-main)]">
              Aprende trading
            </span>
            <span className="block text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-blue-dark)] to-[var(--ink-main)] bg-clip-text text-transparent">
                con estructura real
              </span>
            </span>
            <span className="block text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--ink-main)]/80">
              ABC del Trading 503
            </span>
          </h1>

          {/* Divider - shorter, more elegant */}
          <div
            className={`mx-auto mt-10 h-[3px] w-32 rounded-full bg-gradient-to-r from-[var(--brand-yellow)] to-[var(--brand-blue)] transition-all duration-700 delay-200 ${
              isVisible ? 'scale-x-100 opacity-80' : 'scale-x-0 opacity-0'
            }`}
          />

          {/* Description - improved readability */}
          <p
            className={`mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-[var(--ink-main)]/80 sm:text-xl md:text-2xl md:leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Clases online desde cero, acompañamiento real y el indicador{' '}
            <span className="font-bold text-[var(--brand-blue)]">Price Logistic 7</span>
            {' '}como herramienta de apoyo para leer mejor el mercado.
          </p>

          {/* Subtitle - cleaner design */}
          <div
            className={`mx-auto mt-8 max-w-2xl transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-3 rounded-2xl border border-[var(--ink-main)]/5 bg-[var(--ink-main)]/[0.02] px-6 py-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--brand-yellow)] shadow-[0_0_8px_rgba(247,182,54,0.4)]" />
              <p className="text-sm font-medium text-[var(--ink-soft)] md:text-base">
                No somos academia ni vendemos cursos. Somos un trader real de El Salvador que enseña lo que funciona.
              </p>
            </div>
          </div>

          {/* CTA Buttons - improved contrast and hover states */}
          <div
            className={`mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <Link
              href="/clases"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[#1d3b40] px-8 py-4 font-bold text-white shadow-lg shadow-[rgba(53,78,82,0.15)] transition-all duration-300 hover:shadow-xl hover:shadow-[rgba(53,78,82,0.25)] hover:translate-y-[-2px] sm:w-auto"
            >
              Ver clases disponibles
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
            
            <button
              onClick={() => scrollToSection('video')}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-[var(--ink-main)]/10 bg-white/70 px-8 py-4 font-bold text-[var(--ink-main)] shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[var(--brand-blue)]/30 hover:bg-white hover:shadow-md hover:translate-y-[-2px] sm:w-auto"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink-main)]/5 transition-all duration-300 group-hover:bg-[var(--brand-blue)] group-hover:scale-110">
                <Play
                  size={18}
                  className="fill-[var(--brand-blue)] text-[var(--brand-blue)] transition-all duration-300 group-hover:fill-white group-hover:text-white"
                />
              </span>
              Ver cómo enseño
            </button>
          </div>

          {/* Stats - improved visual hierarchy */}
          <div
            className={`mt-20 flex flex-wrap items-center justify-center gap-10 transition-all duration-700 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {[
              { value: '+100', label: 'Estudiantes activos' },
              { value: '8 años', label: 'De experiencia' },
              { value: 'SV', label: 'Desde El Salvador' },
            ].map((stat, index, array) => (
              <div key={stat.label} className="flex items-center gap-10">
                <div className="text-center group cursor-default">
                  <div className="text-2xl font-black text-[var(--brand-blue)] transition-transform duration-300 group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-[var(--ink-soft)]/70">
                    {stat.label}
                  </div>
                </div>
                {index < array.length - 1 && (
                  <div className="h-10 w-px bg-gradient-to-b from-transparent via-[var(--ink-main)]/10 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add this to your global CSS if not present */}
      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}