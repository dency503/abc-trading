'use client';

import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
          ABC TRADING
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Aprende trading desde cero con clases prácticas y estrategias reales, sin humo ni promesas falsas.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <button
            onClick={() => scrollToSection('clases')}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 flex items-center gap-2"
          >
            Comenzar Ahora
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection('video')}
            className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 flex items-center gap-2"
          >
            <Play size={20} />
            Ver Demo
          </button>
        </div>
      </div>
    </section>
  );
}