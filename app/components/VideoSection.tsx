'use client';

import {
  CheckCircle2,
  MessageCircleMore,
  PlayCircle,
  ShieldCheck,
  BookOpen,
  BarChart3,
} from 'lucide-react';

export default function VideoSection() {
  return (
    <section
      id="video"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_24%)]" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">
              Antes de unirte
            </p>

            <h2 className="mb-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Quiero que primero entiendas cómo trabajamos aquí
            </h2>

            <p className="text-base leading-7 text-gray-300 md:text-lg">
              Este video no es para impresionarte. Es para que veas con claridad
              cómo explico, qué enseño y qué tipo de mentalidad necesitas si de
              verdad quieres aprender trading.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-500/15 text-yellow-400">
                    <PlayCircle size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Introducción al programa
                    </p>
                    <p className="text-sm text-gray-400">
                      Mira primero esto antes de tomar una decisión
                    </p>
                  </div>
                </div>

                <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 sm:block">
                  Explicación real
                </div>
              </div>

              <div className="p-3 sm:p-4">
                <div className="relative aspect-video overflow-hidden rounded-[1.6rem] bg-black ring-1 ring-white/10">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/3qg1mGl2O2o"
                    title="ABC Trading - Introducción"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="border-t border-white/10 px-5 py-5 sm:px-6">
                <p className="text-sm leading-6 text-gray-300 md:text-base">
                  Aquí te explico qué es realmente el trading, qué errores comete
                  la mayoría al iniciar y cómo es el proceso de formación dentro
                  de ABC Trading.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-7">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-yellow-400">
                  Este video es para ti si
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 shrink-0 text-green-500" size={20} />
                    <p className="text-sm leading-6 text-gray-300 md:text-base">
                      Quieres entender el trading sin humo, sin falsas promesas y sin venderte sueños.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 shrink-0 text-green-500" size={20} />
                    <p className="text-sm leading-6 text-gray-300 md:text-base">
                      Estás dispuesto a estudiar, practicar y aprender con estructura.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <BarChart3 className="mt-0.5 shrink-0 text-green-500" size={20} />
                    <p className="text-sm leading-6 text-gray-300 md:text-base">
                      Buscas una base clara para empezar desde cero y avanzar con criterio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-yellow-500/20 bg-yellow-500/10 p-6">
                <p className="mb-2 text-sm font-medium text-yellow-200">
                  Si conectas con esta forma de enseñar
                </p>

                <p className="text-lg font-semibold leading-7 text-white">
                  Escríbeme y te explico horarios, precio y cómo puedes entrar al próximo grupo.
                </p>
              </div>

              <a
                href="https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] px-6 py-4 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(34,197,94,0.28)] md:text-base"
              >
                <MessageCircleMore size={20} />
                Quiero más información
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-yellow-400">
                <CheckCircle2 size={18} />
              </div>
              <h3 className="mb-2 text-base font-bold text-white">
                Sin falsas expectativas
              </h3>
              <p className="text-sm leading-6 text-gray-400">
                Aquí se habla claro: esto no se trata de ganar rápido, sino de aprender bien.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-yellow-400">
                <CheckCircle2 size={18} />
              </div>
              <h3 className="mb-2 text-base font-bold text-white">
                Formación con estructura
              </h3>
              <p className="text-sm leading-6 text-gray-400">
                Se explica el proceso, la metodología y lo que realmente vas a trabajar dentro.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-yellow-400">
                <CheckCircle2 size={18} />
              </div>
              <h3 className="mb-2 text-base font-bold text-white">
                Para gente que sí quiere aprender
              </h3>
              <p className="text-sm leading-6 text-gray-400">
                Si buscas disciplina, criterio y acompañamiento, este video te va a ayudar a decidir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}