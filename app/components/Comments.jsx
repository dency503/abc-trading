'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { MessageSquare, Headphones, CircleHelp } from 'lucide-react';

export default function Comments() {
  useEffect(() => {
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = 'https://abc-trading-pi.vercel.app';
          this.page.identifier = window.location.pathname;
        },
      });
    }
  }, []);

  return (
    <section className="mt-20 max-w-6xl mx-auto px-6">
      <div className="bg-gradient-to-b from-[#111316] to-[#0b0d10] border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        <div className="mb-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="p-2 rounded-xl bg-yellow-500/10 border border-yellow-500/10">
              <MessageSquare className="text-yellow-500 w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Resuelvo tus dudas antes de inscribirte</h2>
          </div>

          <p className="text-gray-400 max-w-2xl">
            Si todavia no estas listo para entrar, aqui puedes dejar tus preguntas sobre mis clases online o sobre el{' '}
            <span className="text-yellow-400 font-semibold">Indicador PriceLogistic 7</span>.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white mb-5">Algunas dudas frecuentes:</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <CircleHelp className="text-yellow-400 shrink-0 mt-0.5" size={18} />
                <p>Como son mis clases, si son en vivo y si te pueden servir aunque vayas empezando.</p>
              </div>
              <div className="flex items-start gap-3">
                <CircleHelp className="text-yellow-400 shrink-0 mt-0.5" size={18} />
                <p>Que necesitas para comenzar y cuanto tiempo te recomiendo dedicar por semana.</p>
              </div>
              <div className="flex items-start gap-3">
                <Headphones className="text-[#22c55e] shrink-0 mt-0.5" size={18} />
                <p>Si tienes una duda puntual, puedes dejarla aqui o escribirme tambien por WhatsApp.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 blur-xl opacity-40 rounded-2xl"></div>

            <div className="relative bg-[#0f1115] border border-white/10 rounded-2xl p-4 md:p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-gray-500 mb-4">Comentarios y soporte</p>

              <p className="text-xs text-gray-500 mb-4">
                Escribe tu duda con confianza para poder responderte mejor.
              </p>

              <div id="disqus_thread" />
              <Script id="disqus-config" strategy="afterInteractive">
                {`
                  var disqus_config = function () {
                    this.page.url = "https://abc-trading-pi.vercel.app";
                    this.page.identifier = window.location.pathname;
                  };
                `}
              </Script>

              <Script
                src="https://abctrading.disqus.com/embed.js"
                strategy="afterInteractive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
