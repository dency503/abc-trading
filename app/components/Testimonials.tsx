import { Star } from 'lucide-react';
import { getWhatsAppUrl, testimonials } from '../content';
import SectionHeader from './SectionHeader';

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff,rgba(232,239,238,0.58))]" />

      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Historias reales"
          title="Qué dicen quienes ya están dentro"
          description="Testimonios de traders que ordenaron su forma de analizar, practicar y operar."
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.role}`}
              className="rounded-2xl border border-[rgba(53,78,82,0.16)] bg-white p-6 shadow-[0_14px_40px_rgba(53,78,82,0.08)] transition hover:border-[var(--brand-blue)] hover:bg-[var(--petroleum-light)]"
            >
              <div className="mb-4 flex gap-1" aria-label={`${testimonial.rating} de 5 estrellas`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-[var(--brand-yellow)] text-[var(--brand-yellow)]"
                  />
                ))}
              </div>

              <p className="mb-4 text-base leading-7 text-[var(--ink-muted)]">
                â€œ{testimonial.comment}â€
              </p>

              <div className="border-t border-[rgba(163,184,207,0.10)] pt-4">
                <p className="font-semibold text-[var(--ink-main)]">{testimonial.name}</p>
                <p className="text-sm text-[var(--brand-yellow)]">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-[var(--ink-soft)]">
            <span className="font-semibold text-[var(--ink-main)]">Únete a nuestra comunidad</span>{' '}
            de traders reales y comparte tu progreso.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand-blue)] bg-white px-6 py-3 font-semibold text-[var(--brand-blue)] transition hover:bg-[var(--brand-blue)] hover:text-white"
          >
            Quiero ser parte de esto
          </a>
        </div>
      </div>
    </section>
  );
}


