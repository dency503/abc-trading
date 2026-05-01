'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { MessageSquare, Headphones, CircleHelp } from 'lucide-react';

export default function Comments() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = window.location.href;
          this.page.identifier = window.location.pathname;
          this.page.theme = "light"; // 👈 FORZADO
        },
      });
    }
  }, []);

  return (
    <section id="comentarios" className="mt-20 max-w-6xl mx-auto px-6">
      <div className="brand-panel rounded-[2rem] p-6 md:p-10">
        
        {/* HEADER */}
        <div className="mb-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="rounded-xl border border-[rgba(243,198,47,0.14)] bg-[rgba(243,198,47,0.10)] p-2">
              <MessageSquare className="h-6 w-6 text-[var(--brand-yellow)]" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[var(--ink-main)]">
              Resuelvo tus dudas antes de inscribirte
            </h2>
          </div>

          <p className="text-[var(--ink-soft)] max-w-2xl">
            Si todavía no estás listo para entrar, aquí puedes dejar tus preguntas sobre mis clases online o sobre el{' '}
            <span className="text-yellow-400 font-semibold">
              Indicador PriceLogistic 7
            </span>.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          
          {/* FAQ */}
          <div className="brand-panel-soft rounded-[1.75rem] p-6">
            <h3 className="text-xl font-semibold text-[var(--ink-main)] mb-5">
              Algunas dudas frecuentes:
            </h3>

            <div className="space-y-4 text-sm text-[var(--ink-muted)]">
              <div className="flex items-start gap-3">
                <CircleHelp className="mt-0.5 shrink-0 text-[var(--brand-yellow)]" size={18} />
                <p>
                  Cómo son mis clases, si son en vivo y si te pueden servir aunque vayas empezando.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CircleHelp className="mt-0.5 shrink-0 text-[var(--brand-yellow)]" size={18} />
                <p>
                  Qué necesitas para comenzar y cuánto tiempo te recomiendo dedicar por semana.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Headphones className="mt-0.5 shrink-0 text-[var(--brand-blue)]" size={18} />
                <p>
                  Si tienes una duda puntual, puedes dejarla aquí o escribirme también por WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* DISQUS */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[rgba(243,198,47,0.12)] via-transparent to-[rgba(35,88,147,0.14)] opacity-50 blur-xl"></div>

            <div className="relative rounded-2xl border border-[rgba(53,78,82,0.14)] bg-white p-4 shadow-sm md:p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)] mb-4">
                Comentarios y soporte
              </p>

              <p className="text-xs text-[var(--ink-soft)] mb-4">
                Escribe tu duda con confianza para poder responderte mejor.
              </p>

              <div id="disqus_thread" />

              {/* CONFIG */}
              <Script id="disqus-config" strategy="afterInteractive">
                {`
                  window.disqus_config = function () {
                    this.page.url = window.location.href;
                    this.page.identifier = window.location.pathname;
                    this.page.theme = "light";
                  };
                `}
              </Script>

              {/* EMBED */}
              <Script
                src="https://abctrading.disqus.com/embed.js"
                data-timestamp={+new Date()}
                strategy="afterInteractive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}