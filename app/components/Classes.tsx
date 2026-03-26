'use client';

import { BookOpen, CheckCircle, MonitorPlay, AlertTriangle, Clock } from 'lucide-react';

export default function TradingClass() {
  // Función corregida y dentro del alcance correcto
  const scrollToWhatsApp = () => {
    window.open(
      'https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t',
      '_blank'
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0c10] to-[#111316] text-white selection:bg-yellow-500/30">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 font-semibold text-sm mb-4">
            🔥 Inscripciones Abiertas
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Aprende Trading Desde Cero
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Membresía mensual. Accede a clases continuas donde aprenderás a analizar el mercado paso a paso hasta sentirte capaz de operar por tu cuenta.
          </p>
        </div>

        {/* Card Principal */}
        <div className="bg-[#0f1115] border border-gray-800 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 group hover:border-gray-700 transition-colors duration-500">

          {/* Image */}
          <div className="h-64 md:h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-transparent md:hidden z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800"
              alt="Trading Educativo"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-between relative z-20">

            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-800/60">
                <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="text-yellow-500" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Sesión Educativa en Vivo</h3>
                  <p className="text-gray-500 text-xs">Acceso continuo mensual</p>
                </div>
              </div>

              {/* Lista actualizada con los textos de la imagen */}
              <ul className="space-y-4 text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#089981] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Introducción al Trading:</strong> Descubre desde las bases cómo funciona el mercado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MonitorPlay size={20} className="text-[#089981] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Lectura de Mercado:</strong> Aprende cómo se mueve el precio y cómo interpretarlo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-yellow-500 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Errores Comunes:</strong> Evita las trampas típicas de principiantes y protege tu capital.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-[#089981] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Sesión Informativa Abierta:</strong> Con horarios accesibles para que aprendas a tu ritmo.</span>
                </li>
              </ul>
            </div>

            <div>
              <button
                onClick={scrollToWhatsApp}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(234,179,8,0.2)]"
              >
                Quiero más información
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center font-medium">
                🔒 Cancelas cuando quieras · Sin compromisos forzosos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}