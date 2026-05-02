'use client';

import {
  BarChart3,
  BookOpen,
  MessageSquare,
  Target,
  Users,
  Zap,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useState } from 'react';
import { benefits } from '../content';
import SectionHeader from './SectionHeader';

const icons = {
  book: BookOpen,
  zap: Zap,
  chart: BarChart3,
  users: Users,
  message: MessageSquare,
  target: Target,
};

// Temas con paleta de marca (brand colors)
const cardThemes = [
  {
    gradient: 'from-[var(--brand-green)] to-[#1d4a4f]',
    accent: 'var(--brand-green)',
    shadow: 'rgba(66,105,109,0.1)',
    iconBg: 'bg-[rgba(66,105,109,0.08)]',
  },
  {
    gradient: 'from-[var(--brand-blue)] to-[var(--brand-blue-dark)]',
    accent: 'var(--brand-blue)',
    shadow: 'rgba(53,78,82,0.1)',
    iconBg: 'bg-[rgba(53,78,82,0.08)]',
  },
  {
    gradient: 'from-[var(--brand-yellow)] to-[#e6a817]',
    accent: 'var(--brand-yellow)',
    shadow: 'rgba(247,182,54,0.12)',
    iconBg: 'bg-[rgba(247,182,54,0.1)]',
  },
  {
    gradient: 'from-[var(--brand-blue-strong)] to-[var(--brand-blue)]',
    accent: 'var(--brand-blue-strong)',
    shadow: 'rgba(53,78,82,0.1)',
    iconBg: 'bg-[rgba(53,78,82,0.08)]',
  },
  {
    gradient: 'from-[var(--brand-green)] to-[var(--brand-blue)]',
    accent: 'var(--brand-green)',
    shadow: 'rgba(66,105,109,0.08)',
    iconBg: 'bg-[rgba(66,105,109,0.06)]',
  },
  {
    gradient: 'from-[var(--brand-yellow)] to-[var(--brand-green)]',
    accent: 'var(--brand-yellow)',
    shadow: 'rgba(247,182,54,0.1)',
    iconBg: 'bg-[rgba(247,182,54,0.08)]',
  },
];

export default function WhatYouGet() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden border-y border-[rgba(53,78,82,0.06)] py-24 md:py-32">
      {/* Fondo suave + grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[rgba(232,239,238,0.15)] to-white" />
        <div className="absolute top-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[rgba(53,78,82,0.02)] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-[rgba(96,125,128,0.03)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="h-full w-full bg-[linear-gradient(rgba(53,78,82,1)_1px,transparent_1px),linear-gradient(90deg,rgba(53,78,82,1)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={
              <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)] backdrop-blur-md shadow-sm">
                <Sparkles size={14} className="text-[var(--brand-yellow)]" />
                Qué recibes en ABC del Trading
              </span>
            }
            title={
              <span className="block space-y-2">
                <span className="block text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight text-[var(--ink-main)]">
                  Todo lo que necesitas
                </span>
                <span className="relative inline-block text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-blue-dark)] to-[var(--brand-green)]">
                  para empezar a operar
                  <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[var(--brand-yellow)]/60 via-[var(--brand-blue)] to-[var(--brand-green)]" />
                </span>
              </span>
            }
            description="Un proceso completo para pasar de la confusión inicial a una forma de operar más ordenada y con criterio propio."
            className="mb-16 md:mb-20 text-center"
          />

          {/* Grid de beneficios */}
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = icons[benefit.icon as keyof typeof icons];
              const theme = cardThemes[index % cardThemes.length];
              const isActive = activeCard === index;

              return (
                <article
                  key={benefit.title}
                  className="group relative"
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div
                    className={`relative h-full overflow-hidden rounded-2xl border bg-white/70 backdrop-blur-md p-6 sm:p-7 transition-all duration-500 ${
                      isActive
                        ? 'border-transparent shadow-2xl -translate-y-1.5'
                        : 'border-white/40 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                    }`}
                    style={
                      isActive
                        ? { boxShadow: `0 25px 50px -12px ${theme.shadow}` }
                        : undefined
                    }
                  >
                    {/* Relleno de gradiente sutil en hover */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.gradient} opacity-0 transition-opacity duration-500 -z-10 ${
                        isActive ? 'opacity-[0.03]' : ''
                      }`}
                    />

                    {/* Icono con fondo animado */}
                    <div className="relative mb-5">
                      <div
                        className={`inline-flex rounded-xl p-3.5 transition-all duration-500 ${
                          isActive
                            ? 'text-white shadow-lg scale-110 -rotate-3'
                            : `${theme.iconBg} text-[var(--brand-blue)]`
                        }`}
                        style={
                          isActive
                            ? { backgroundColor: theme.accent }
                            : undefined
                        }
                      >
                        <Icon size={24} />
                      </div>
                      <Sparkles
                        size={16}
                        className={`absolute -top-1 -right-1 text-[var(--brand-yellow)] transition-all duration-500 ${
                          isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                      />
                    </div>

                    {/* Contenido textual */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-[var(--ink-main)] transition-colors duration-300 group-hover:text-[var(--brand-blue)]">
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--ink-soft)]/80">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Indicador de hover "Descubrir más" */}
                    <div
                      className={`mt-5 flex items-center gap-2 text-xs font-semibold text-[var(--brand-blue)] transition-all duration-500 ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <span>Descubrir más</span>
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    {/* Brillo decorativo en esquina */}
                    <div
                      className={`absolute -bottom-3 -right-3 h-20 w-20 rounded-full bg-gradient-to-br ${theme.gradient} opacity-0 blur-xl transition-opacity duration-500 ${
                        isActive ? 'opacity-20' : ''
                      }`}
                    />

                    {/* Número de fondo */}
                    <div className="absolute top-4 right-4 text-5xl font-black text-[rgba(53,78,82,0.03)] select-none transition-opacity duration-300 group-hover:opacity-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CTA inferior con glassmorfismo */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md p-4 sm:p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-yellow)] to-[var(--brand-blue)] text-white">
                  <Zap size={20} />
                </div>
                <p className="text-sm font-semibold text-[var(--ink-main)] text-left">
                  ¿Listo para empezar tu formación?
                </p>
              </div>
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-dark)] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Quiero inscribirme ahora
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}