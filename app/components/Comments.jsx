'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { MessageSquare } from 'lucide-react';

export default function Comments() {

  useEffect(() => {
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = "https://abc-trading-pi.vercel.app";
          this.page.identifier = window.location.pathname;
        },
      });
    }
  }, []);

  return (
    <section className="mt-16 max-w-5xl mx-auto">

      {/* 🔥 CONTENEDOR PRINCIPAL */}
      <div className="bg-gradient-to-b from-[#111316] to-[#0b0d10] border border-gray-800 rounded-3xl p-6 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">

        {/* HEADER */}
        <div className="mb-10 text-center md:text-left">

          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="p-2 rounded-xl bg-yellow-500/10">
              <MessageSquare className="text-yellow-500 w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Dudas y Soporte
            </h2>
          </div>

          <p className="text-gray-400 max-w-2xl">
            ¿Tienes preguntas sobre el{" "}
            <span className="text-yellow-400 font-semibold">
              Indicador PriceLogistic 7
            </span>{" "}
            o el curso? Escríbelas aquí y te ayudamos 👇
          </p>
        </div>

        {/* 🔥 CAJA DE COMENTARIOS */}
        <div className="relative">

          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 blur-xl opacity-40 rounded-2xl"></div>

          {/* Contenedor real */}
          <div className="relative bg-[#0f1115] border border-gray-800 rounded-2xl p-4 md:p-6">

            {/* Hint UX */}
            <p className="text-xs text-gray-500 mb-4">
              💬 Sé claro con tu duda para recibir mejor ayuda
            </p>

            {/* ⚠️ IMPORTANTE: sin fondo blanco */}
            <div id="disqus_thread" />
<Script id="disqus-config" strategy="afterInteractive">
        {`
          var disqus_config = function () {
            this.page.url = "https://abc-trading-pi.vercel.app";
            this.page.identifier = window.location.pathname;
          };
        `}
      </Script>

      {/* SCRIPT */}
      <Script
        src="https://abctrading.disqus.com/embed.js"
        strategy="afterInteractive"
      />
          </div>
        </div>

      </div>

      {/* CONFIG */}
      

    </section>
  );
}