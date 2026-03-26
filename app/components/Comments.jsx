'use client';

import { DiscussionEmbed } from 'disqus-react';
import { useEffect } from 'react';

export default function Comments() {
  const disqusConfig = {
    url: 'abc-trading-pi.vercel.app', // luego cambias a tu dominio real
    identifier: 'trading-membership',
    title: 'Comentarios sobre la membresía',
    language: 'es',
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Comentarios de la comunidad
          </h2>
          <p className="text-gray-400">
            ¿Ya eres estudiante? Cuéntanos tu experiencia 👇
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <DiscussionEmbed
            shortname="abctrading" // 🔥 tu shortname aquí
            config={disqusConfig}
          />
        </div>

      </div>
    </section>
  );
}