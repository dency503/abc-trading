'use client';

import { BookOpen, CheckCircle } from 'lucide-react';

export default function TradingClass() {
  const scrollToWhatsApp = () => {
    window.open(
      'https://wa.me/1234567890?text=Hola,%20quiero%20información%20sobre%20la%20membresía%20de%20trading',
      '_blank'
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Aprende Trading Desde Cero
          </h2>
          <p className="text-yellow-400 text-lg md:text-xl font-semibold">
            Membresía mensual · Aprende a tu ritmo
          </p>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Accede a clases continuas donde aprenderás a analizar el mercado paso a paso hasta sentirte capaz de operar por tu cuenta.
          </p>
        </div>

        {/* Card */}
        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

          {/* Image */}
          <div className="h-64 md:h-full">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800"
              alt="Trading"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-between">

            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-yellow-400" />
                <span className="text-yellow-400 font-semibold">
                  Acceso mensual continuo
                </span>
              </div>

              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" />
                  Empieza sin experiencia previa
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" />
                  Aprende paso a paso a tu ritmo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" />
                  Clases continuas hasta que te sientas capaz
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" />
                  Aprende a analizar el mercado real
                </li>
              </ul>
            </div>

            <div>
              <button
                onClick={scrollToWhatsApp}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-xl font-bold text-lg transition transform hover:scale-105"
              >
                Quiero más información
              </button>

              <p className="text-xs text-gray-500 mt-3 text-center">
                Cancelas cuando quieras · Sin compromiso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
