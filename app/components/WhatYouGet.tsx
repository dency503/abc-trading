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

// Visual themes for cards
const cardThemes = [
  {
    gradient: 'from-emerald-400 to-teal-600',
    accent: '#10b981',
    shadow: 'rgba(16,185,129,0.15)',
  },
  {
    gradient: 'from-blue-400 to-indigo-600',
    accent: '#3b82f6',
    shadow: 'rgba(59,130,246,0.15)',
  },
  {
    gradient: 'from-amber-400 to-orange-600',
    accent: '#f59e0b',
    shadow: 'rgba(245,158,11,0.15)',
  },
  {
    gradient: 'from-violet-400 to-purple-600',
    accent: '#8b5cf6',
    shadow: 'rgba(139,92,246,0.15)',
  },
  {
    gradient: 'from-rose-400 to-pink-600',
    accent: '#f43f5e',
    shadow: 'rgba(244,63,94,0.15)',
  },
  {
    gradient: 'from-cyan-400 to-sky-600',
    accent: '#06b6d4',
    shadow: 'rgba(6,182,212,0.15)',
  },
];

export default function WhatYouGet() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden border-y border-[rgba(53,78,82,0.08)] py-24 md:py-32">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(232,239,238,0.8)] via-white to-white" />
        
        {/* Animated background orbs */}
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-[rgba(53,78,82,0.04)] to-transparent blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-[rgba(96,125,128,0.05)] to-transparent blur-3xl" />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[radial-gradient(circle,rgba(53,78,82,1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow={
              <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(53,78,82,0.06)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
                <Sparkles size={14} className="text-[var(--brand-yellow)]" />
                Qué recibes en ABC del Trading
              </span>
            }
            title={
              <span className="block space-y-2">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-black text-[var(--ink-main)]">
                  Todo lo que necesitas
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                  para empezar a operar
                </span>
              </span>
            }
            description="Un proceso completo para pasar de la confusión inicial a una forma de operar más ordenada y con criterio propio."
            className="mb-16 md:mb-20 text-center"
          />

          {/* Benefits Grid */}
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
                    className={`relative h-full overflow-hidden rounded-2xl border-2 bg-white p-6 sm:p-7 transition-all duration-500 ${
                      isActive
                        ? 'border-transparent shadow-2xl -translate-y-1.5'
                        : 'border-[rgba(53,78,82,0.1)] shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                    }`}
                    style={
                      isActive
                        ? { boxShadow: `0 20px 60px ${theme.shadow}` }
                        : undefined
                    }
                  >
                    {/* Gradient border on hover */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${theme.gradient} opacity-0 transition-opacity duration-500 -z-10 ${
                        isActive ? 'opacity-[0.03]' : ''
                      }`}
                    />

                    {/* Icon with animated background */}
                    <div className="relative mb-5">
                      <div
                        className={`inline-flex rounded-xl p-3.5 transition-all duration-500 ${
                          isActive
                            ? 'bg-gradient-to-br text-white shadow-lg scale-110 -rotate-3'
                            : 'bg-[rgba(53,78,82,0.06)] text-[var(--brand-blue)]'
                        }`}
                        style={
                          isActive
                            ? { backgroundImage: `linear-gradient(135deg, ${theme.accent}dd, ${theme.accent})` }
                            : undefined
                        }
                      >
                        <Icon size={24} />
                      </div>
                      
                      {/* Floating sparkle on hover */}
                      <Sparkles
                        size={16}
                        className={`absolute -top-1 -right-1 text-yellow-400 transition-all duration-500 ${
                          isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-[var(--ink-main)] transition-colors duration-300 group-hover:text-[var(--brand-blue)]">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div
                      className={`mt-5 flex items-center gap-2 text-xs font-semibold text-[var(--brand-blue)] transition-all duration-500 ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <span>Descubrir más</span>
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    {/* Corner decoration */}
                    <div
                      className={`absolute -bottom-3 -right-3 h-20 w-20 rounded-full bg-gradient-to-br ${theme.gradient} opacity-0 blur-xl transition-opacity duration-500 ${
                        isActive ? 'opacity-20' : ''
                      }`}
                    />

                    {/* Number indicator */}
                    <div className="absolute top-4 right-4 text-5xl font-black text-[rgba(53,78,82,0.03)] select-none transition-opacity duration-300 group-hover:opacity-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-[rgba(53,78,82,0.12)] bg-white/80 backdrop-blur-sm p-4 sm:p-6 shadow-lg">
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