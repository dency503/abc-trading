'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs, getWhatsAppUrl } from '../content';
import SectionHeader from './SectionHeader';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden border-y border-[rgba(53,78,82,0.10)] py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff,rgba(232,239,238,0.66))]" />

      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Aclaremos tus dudas"
          description="Si tu pregunta no está aquí, escríbeme por WhatsApp. Respondo personalmente."
          className="mb-16"
        />

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[rgba(53,78,82,0.16)] bg-white shadow-[0_10px_30px_rgba(53,78,82,0.07)] transition"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-[var(--petroleum-light)] md:px-8 md:py-5"
                >
                  <h3 className="pr-4 font-semibold text-[var(--ink-main)]">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[var(--brand-yellow)] transition ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen ? (
                  <div
                    id={`faq-panel-${index}`}
                    className="border-t border-[rgba(53,78,82,0.10)] bg-[rgba(232,239,238,0.72)] px-6 py-4 md:px-8 md:py-5"
                  >
                    <p className="leading-7 text-[var(--ink-muted)]">{faq.answer}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-[rgba(53,78,82,0.18)] bg-white p-8 text-center shadow-[0_18px_48px_rgba(53,78,82,0.10)]">
          <p className="mb-4 text-lg font-semibold text-[var(--ink-main)]">¿Aún tienes dudas?</p>
          <p className="mb-6 text-[var(--ink-muted)]">
            Escríbeme por WhatsApp para revisar tu caso y explicarte qué opción tiene más sentido para ti.
          </p>
          <a
            href={getWhatsAppUrl('Tengo una pregunta sobre las clases de trading')}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-cta inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition hover:scale-105"
          >
            Escribirme por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}


