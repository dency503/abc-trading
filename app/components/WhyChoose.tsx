'use client';

import { CheckCircle2, Trophy, Users, Zap, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { trustReasons } from '../content';
import SectionHeader from './SectionHeader';

const icons = {
  zap: Zap,
  users: Users,
  trophy: Trophy,
  check: CheckCircle2,
};

// Esquemas de color actualizados para mayor suavidad y cohesión
const cardSchemes = [
  {
    gradient: 'from-[var(--brand-blue)] to-[var(--brand-blue-dark)]',
    accent: 'bg-[var(--brand-blue)]',
    statBg: 'bg-[rgba(53,78,82,0.06)]',
    glow: 'shadow-[var(--brand-blue)]/20',
  },
  {
    gradient: 'from-[var(--brand-green)] to-[#2d5a5e]',
    accent: 'bg-[var(--brand-green)]',
    statBg: 'bg-[rgba(66,105,109,0.06)]',
    glow: 'shadow-[var(--brand-green)]/20',
  },
  {
    gradient: 'from-[var(--brand-yellow)] to-[#e6a817]',
    accent: 'bg-[var(--brand-yellow)]',
    statBg: 'bg-[rgba(230,168,23,0.08)]',
    glow: 'shadow-[var(--brand-yellow)]/20',
  },
  {
    gradient: 'from-[#6b8e91] to-[var(--brand-blue-strong)]',
    accent: 'bg-[var(--brand-blue-strong)]',
    statBg: 'bg-[rgba(53,78,82,0.06)]',
    glow: 'shadow-[var(--brand-blue-strong)]/20',
  },
];

export default function WhyChoose() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Fondo mejorado: gradiente suave + blobs + grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[rgba(232,239,238,0.15)] to-white" />
        
        {/* Blobs decorativos más sutiles */}
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[rgba(53,78,82,0.02)] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-[rgba(96,125,128,0.03)] blur-3xl" />
        
        {/* Patrón de cuadrícula */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="h-full w-full bg-[linear-gradient(rgba(53,78,82,1)_1px,transparent_1px),linear-gradient(90deg,rgba(53,78,82,1)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-yellow)] animate-pulse" />
                ¿Por qué ABC del Trading 503?
              </span>
            }
            title={
              <>
                Somos diferentes porque{' '}
                <span className="relative inline-block">
                  somos reales
                  {/* Subrayado con gradiente */}
                  <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[var(--brand-yellow)]/40 to-[var(--brand-blue)]" />
                </span>
              </>
            }
            description="No somos una academia tradicional. Enseñamos desde la práctica, los errores reales y la disciplina que el mercado exige."
            className="mb-16 md:mb-20 text-center"
          />

          {/* Cuadrícula de tarjetas */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {trustReasons.map((reason, index) => {
              const Icon = icons[reason.icon as keyof typeof icons];
              const scheme = cardSchemes[index % cardSchemes.length];
              const isHovered = hoveredCard === index;

              return (
                <article
                  key={reason.title}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Tarjeta con glassmorfismo */}
                  <div
                    className={`relative h-full overflow-hidden rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md p-6 shadow-lg transition-all duration-500 hover:shadow-2xl ${
                      isHovered ? 'scale-[1.02] -translate-y-2 border-[var(--brand-blue)]/20' : ''
                    }`}
                  >
                    {/* Línea de gradiente superior que se expande */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${scheme.gradient} origin-left transition-transform duration-500 ${
                        isHovered ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />

                    {/* Contenedor del icono */}
                    <div className="relative mb-6">
                      <div
                        className={`inline-flex rounded-xl p-3.5 transition-all duration-500 ${
                          isHovered
                            ? `${scheme.accent} text-white shadow-lg scale-110 -rotate-6`
                            : 'bg-[rgba(53,78,82,0.06)] text-[var(--brand-blue)]'
                        }`}
                      >
                        <Icon size={24} />
                      </div>
                      
                      {/* Número decorativo de fondo */}
                      <div className="absolute -top-2 -right-2 text-6xl font-black text-[rgba(53,78,82,0.02)] select-none transition-opacity duration-500 group-hover:opacity-0">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Contenido textual */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-[var(--ink-main)] transition-colors duration-300 group-hover:text-[var(--brand-blue)]">
                        {reason.title}
                      </h3>
                      
                      <p className="text-sm leading-relaxed text-[var(--ink-soft)]/80">
                        {reason.description}
                      </p>
                    </div>

                    {/* Sección estadística con flecha emergente */}
                    <div className="mt-6">
                      <div
                        className={`flex items-center justify-between rounded-xl ${scheme.statBg} p-4 transition-all duration-500 ${
                          isHovered ? 'scale-105 bg-opacity-100' : ''
                        }`}
                      >
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--ink-main)]">
                          {reason.stat}
                        </p>
                        
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-500 ${
                            isHovered
                              ? 'opacity-100 translate-x-0 rotate-0'
                              : 'opacity-0 -translate-x-2 rotate-45'
                          }`}
                        >
                          <ArrowUpRight size={14} className="text-[var(--brand-blue)]" />
                        </div>
                      </div>
                    </div>

                    {/* Brillo decorativo en esquina inferior derecha */}
                    <div
                      className={`absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-gradient-to-br ${scheme.gradient} opacity-0 blur-2xl transition-opacity duration-500 ${
                        isHovered ? 'opacity-20' : ''
                      }`}
                    />
                  </div>
                </article>
              );
            })}
          </div>

          {/* Insignia de confianza inferior con diseño glass */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/60 backdrop-blur-md px-6 py-3 shadow-sm">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-green)] shadow-sm"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-[var(--ink-main)]">
                +100 traders nos eligieron este año
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}