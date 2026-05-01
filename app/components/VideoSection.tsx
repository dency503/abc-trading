'use client';

import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  MessageCircleMore,
  PlayCircle,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  Pause,
} from 'lucide-react';
import { useState, useRef } from 'react';
import { contact, getWhatsAppUrl } from '../content';
import SectionHeader from './SectionHeader';

const videoFitPoints = [
  {
    icon: ShieldCheck,
    color: 'text-[var(--brand-green)]',
    bgColor: 'bg-[rgba(66,105,109,0.08)]',
    text: 'Quieres entender el trading sin humo, falsas promesas ni ventas agresivas.',
  },
  {
    icon: BookOpen,
    color: 'text-[var(--brand-green)]',
    bgColor: 'bg-[rgba(66,105,109,0.08)]',
    text: 'Estás dispuesto a estudiar, practicar y aprender con estructura.',
  },
  {
    icon: BarChart3,
    color: 'text-[var(--brand-blue)]',
    bgColor: 'bg-[rgba(53,78,82,0.08)]',
    text: 'Buscas una base clara para empezar desde cero y avanzar con criterio.',
  },
];

const videoTakeaways = [
  {
    tone: 'green',
    title: 'Sin falsas expectativas',
    description:
      'Aquí se habla claro: esto no se trata de ganar rápido, sino de aprender bien.',
  },
  {
    tone: 'gray',
    title: 'Formación con estructura',
    description:
      'Se explica el proceso, la metodología y lo que realmente vas a trabajar dentro.',
  },
  {
    tone: 'slate',
    title: 'Para gente que sí quiere aprender',
    description:
      'Si buscas disciplina, criterio y acompañamiento, este video te va a ayudar a decidir.',
  },
];

const toneClasses = {
  green: {
    bg: 'bg-[rgba(66,105,109,0.12)]',
    text: 'text-[var(--brand-green)]',
    border: 'border-[rgba(66,105,109,0.15)]',
  },
  gray: {
    bg: 'bg-[rgba(53,78,82,0.10)]',
    text: 'text-[var(--brand-blue)]',
    border: 'border-[rgba(53,78,82,0.15)]',
  },
  slate: {
    bg: 'bg-[rgba(120,144,148,0.14)]',
    text: 'text-[var(--brand-blue-strong)]',
    border: 'border-[rgba(120,144,148,0.2)]',
  },
};

export default function VideoSection() {
  const [videoReady, setVideoReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <section
      id="video"
      className="relative overflow-hidden border-y border-[rgba(53,78,82,0.08)] bg-gradient-to-b from-white via-[rgba(232,239,238,0.4)] to-white py-20 md:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[rgba(53,78,82,0.02)] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[rgba(96,125,128,0.03)] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 md:mb-24">
            <SectionHeader
              eyebrow="Antes de unirte"
              title={
                <>
                  Quiero que primero entiendas{' '}
                  <span className="relative inline-block">
                    cómo trabajamos
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 100 8"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M0,4 Q25,0 50,4 Q75,8 100,4"
                        fill="none"
                        stroke="rgba(66,105,109,0.4)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{' '}
                  aquí
                </>
              }
              description="Este video no es para impresionarte. Es para que veas cómo explico, qué enseño y qué mentalidad necesitas para aprender trading de verdad."
              className="text-center"
            />
          </div>

          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
            {/* Video Player */}
            <article className="group">
              <div className="brand-shell overflow-hidden rounded-[2rem] border border-[rgba(53,78,82,0.1)] bg-white shadow-2xl shadow-[rgba(53,78,82,0.06)] transition-shadow duration-300 hover:shadow-3xl">
                {/* Video Header */}
                <div className="flex items-center justify-between border-b border-[rgba(53,78,82,0.08)] bg-gradient-to-r from-white to-[rgba(232,239,238,0.5)] px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgba(53,78,82,0.12)] to-[rgba(53,78,82,0.06)] transition-transform duration-300 group-hover:scale-105">
                      {videoReady ? (
                        <Pause size={24} className="text-[var(--brand-blue)]" />
                      ) : (
                        <PlayCircle size={24} className="text-[var(--brand-blue)] animate-pulse" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--ink-main)]">
                        Introducción al programa
                      </p>
                      <p className="text-xs text-[var(--ink-soft)] mt-0.5">
                        {videoReady ? 'Reproduciendo' : 'Cargando video...'}
                      </p>
                    </div>
                  </div>
                  <div className="hidden items-center gap-2 rounded-full border border-[rgba(53,78,82,0.12)] bg-white px-4 py-1.5 text-xs font-semibold text-[var(--ink-muted)] shadow-sm sm:flex">
                    <Sparkles size={12} className="text-[var(--brand-yellow)]" />
                    Explicación real
                  </div>
                </div>

                {/* Video Container */}
                <div className="relative p-4 sm:p-5">
                  <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-gray-900 shadow-inner">
                    <iframe
                      ref={iframeRef}
                      className="absolute inset-0 h-full w-full"
                      src="https://www.youtube.com/embed/3qg1mGl2O2o?rel=0&modestbranding=1"
                      title="ABC del Trading 503 - Introducción al trading"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      onLoad={() => setVideoReady(true)}
                      style={{ border: 'none' }}
                    />
                  </div>
                </div>

                {/* Video Footer */}
                <div className="border-t border-[rgba(53,78,82,0.08)] bg-[rgba(232,239,238,0.3)] px-6 py-4">
                  <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
                    <span className="font-semibold text-[var(--ink-main)]">💡 Tip:</span>{' '}
                    Pausa cuando necesites. Te explico qué es realmente el trading, qué 
                    errores comete la mayoría al iniciar y cómo es el proceso de formación 
                    dentro de ABC del Trading.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              {/* Fit Points Card */}
              <div className="rounded-[2rem] border border-[rgba(53,78,82,0.1)] bg-white p-7 shadow-lg shadow-[rgba(53,78,82,0.04)] transition-shadow duration-300 hover:shadow-xl">
                <div className="mb-5 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[var(--brand-green)]" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
                    Este video es para ti si
                  </p>
                </div>

                <div className="space-y-4">
                  {videoFitPoints.map((point) => (
                    <div
                      key={point.text}
                      className="flex items-start gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-[rgba(53,78,82,0.02)] hover:translate-x-1"
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${point.bgColor} transition-transform duration-200 hover:scale-110`}>
                        <point.icon className={point.color} size={18} />
                      </div>
                      <p className="text-sm leading-relaxed text-[var(--ink-muted)] pt-1.5">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Cards */}
              <div className="space-y-4">
                {/* Primary CTA */}
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[var(--brand-blue)] to-[#1a3a3f] p-7 text-white shadow-xl shadow-[rgba(53,78,82,0.2)] transition-shadow duration-300 hover:shadow-2xl">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                    <Sparkles size={12} />
                    Próximo paso
                  </div>
                  <p className="mb-2 text-lg font-bold leading-tight">
                    Si conectas con esta forma de enseñar
                  </p>
                  <p className="mb-5 text-sm leading-relaxed text-white/80">
                    Escríbeme y te explico horarios, precio y cómo puedes entrar al próximo grupo.
                  </p>
                  <a
                    href={getWhatsAppUrl(contact.whatsappVideoText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[var(--brand-blue)] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--brand-blue)]"
                    aria-label="Contactar por WhatsApp para más información"
                  >
                    <MessageCircleMore size={20} />
                    Quiero saber más por WhatsApp
                    <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Secondary CTA */}
                <a
                  href={contact.whatsappCommunity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-[rgba(53,78,82,0.15)] bg-white/60 px-6 py-4 font-bold text-[var(--ink-main)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-blue)] hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:ring-offset-2"
                  aria-label="Unirse a la comunidad de WhatsApp"
                >
                  <MessageCircleMore size={20} className="text-[var(--brand-green)] transition-transform duration-300 group-hover:scale-110" />
                  Unirme a la comunidad de WhatsApp
                </a>
              </div>
            </aside>
          </div>

          {/* Takeaways Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {videoTakeaways.map((takeaway) => {
              const tone = toneClasses[takeaway.tone as keyof typeof toneClasses];
              return (
                <article
                  key={takeaway.title}
                  className={`group relative overflow-hidden rounded-2xl border ${tone.border} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-opacity-100`}
                >
                  {/* Decorative gradient top */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${tone.bg} transition-all duration-300 group-hover:h-2`} />
                  
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${tone.bg} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <CheckCircle2 size={20} className={tone.text} />
                  </div>
                  
                  <h3 className="mb-2 text-base font-bold text-[var(--ink-main)] transition-colors duration-200 group-hover:text-[var(--brand-blue)]">
                    {takeaway.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                    {takeaway.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Bottom trust indicator */}
          <div className="mt-16 text-center">
            <p className="inline-flex items-center gap-2 text-sm text-[var(--ink-soft)]">
              <ShieldCheck size={16} className="text-[var(--brand-green)]" />
              Video grabado por un trader real, sin ediciones engañosas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}