import { ArrowRight, Clock3 } from 'lucide-react';
import { ctaSteps, getWhatsAppUrl } from '../content';
import SectionHeader from './SectionHeader';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Fondo degradado */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff,rgba(232,239,238,0.70),#ffffff)]" />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* IZQUIERDA: TÍTULO Y CTA */}
            <div>
              <SectionHeader
                align="left"
                eyebrow="El siguiente paso"
                title="Empieza hoy tu camino en el trading"
                description="No necesitas experiencia. Necesitas disciplina, acompañamiento y una estructura clara para aprender diferente."
                className="mb-8"
              />

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-cta mb-6 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold transition-transform hover:scale-105"
              >
                Hablar conmigo por WhatsApp
                <ArrowRight size={20} />
              </a>

              <p className="text-sm text-[var(--ink-soft)]">
                Respondo personalmente en menos de 24 horas.
              </p>
            </div>

            {/* DERECHA: PASOS SIMPLES Y HORARIOS */}
            <div className="space-y-6">

              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-yellow)]">
                Es muy simple
              </p>

              {ctaSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1 font-semibold text-[var(--ink-main)]">{step}</p>
                </div>
              ))}

              <div className="mt-8 rounded-xl border border-[rgba(53,78,82,0.16)] bg-white p-4 shadow-sm">
                <p className="flex items-center gap-2 text-sm text-[var(--ink-muted)]">
                  <Clock3 size={16} className="text-[var(--brand-yellow)]" />
                  <span>
                    <strong className="text-[var(--brand-blue)]">Próximas clases:</strong>{' '}
                    pregunta los horarios disponibles.
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}