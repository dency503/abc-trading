import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BadgeAlert, ChartCandlestick, MessageCircleMore } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  description: 'La página que buscas no existe o fue movida dentro de ABC del Trading 503.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-20 pt-32 text-[var(--ink-main)] md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,198,47,0.12),transparent_26%),radial-gradient(circle_at_85%_18%,rgba(35,88,147,0.18),transparent_18%),radial-gradient(circle_at_18%_82%,rgba(214,58,43,0.10),transparent_16%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="brand-badge mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
              <BadgeAlert size={16} />
              Ruta no disponible
            </div>

            <p className="mb-4 text-[clamp(4.5rem,16vw,9rem)] font-black leading-none tracking-[-0.06em] text-[var(--ink-main)]/95">
              404
            </p>

            <h1 className="mx-auto max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Esta página <span className="gradient-text">ya no está aquí</span>
            </h1>

            <div className="brand-divider mx-auto my-6 h-1.5 w-32" />

            <p className="mx-auto max-w-2xl text-base leading-8 text-[var(--ink-muted)] md:text-xl">
              Puede que el enlace esté roto, la ruta haya cambiado o simplemente hayas llegado a una zona fuera del gráfico.
              Lo mejor es volver al inicio o ir directo a la información importante.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="brand-shell overflow-hidden rounded-[2rem]">
              <div className="p-8 md:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(35,88,147,0.18)] text-[var(--brand-yellow)]">
                    <ChartCandlestick size={28} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-yellow)]">
                      Vuelve al camino
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-[var(--ink-main)]">
                      Te dejo tres rutas útiles
                    </h2>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <Link
                    href="/"
                    className="brand-panel-soft rounded-2xl p-5 text-left transition-transform hover:-translate-y-1"
                  >
                    <p className="mb-2 text-sm font-semibold text-[var(--brand-yellow)]">Inicio</p>
                    <p className="text-sm leading-6 text-[var(--ink-muted)]">
                      Regresa a la portada y encuentra el video, comentarios y enlaces principales.
                    </p>
                  </Link>

                  <Link
                    href="/clases"
                    className="brand-panel-soft rounded-2xl p-5 text-left transition-transform hover:-translate-y-1"
                  >
                    <p className="mb-2 text-sm font-semibold text-[var(--brand-green)]">Clases</p>
                    <p className="text-sm leading-6 text-[var(--ink-muted)]">
                      Ve directo al programa, precio, bonos y detalles de formación.
                    </p>
                  </Link>

                  <Link
                    href="/indicador"
                    className="brand-panel-soft rounded-2xl p-5 text-left transition-transform hover:-translate-y-1"
                  >
                    <p className="mb-2 text-sm font-semibold text-[var(--brand-blue)]">Indicador</p>
                    <p className="text-sm leading-6 text-[var(--ink-muted)]">
                      Consulta Price Logistic 7, planes de acceso y vista previa interactiva.
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="brand-panel rounded-[2rem] p-8 md:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-yellow)]">
                ¿Buscabas ayuda?
              </p>
              <h2 className="text-2xl font-bold text-[var(--ink-main)] md:text-3xl">
                Si el enlace te llevó mal, escríbeme y te mando la ruta correcta
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)] md:text-base">
                También te puedo orientar si buscabas información sobre clases, el indicador o próximas transmisiones.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/"
                  className="brand-cta inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold transition hover:-translate-y-0.5"
                >
                  <ArrowLeft size={18} />
                  Volver al inicio
                </Link>

                <a
                  href="https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-cta-secondary inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold transition hover:-translate-y-0.5"
                >
                  <MessageCircleMore size={18} />
                  Pedir ayuda por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

