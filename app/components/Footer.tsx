'use client';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowUpRight, BadgeCheck, HeartHandshake } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040608] pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="mb-10 rounded-[2rem] border border-yellow-500/15 bg-gradient-to-r from-yellow-500/10 via-white/5 to-transparent p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-yellow-300">
                Hablemos claro
              </p>
              <h2 className="mb-3 text-3xl font-black text-white md:text-4xl">
                Comparto desde El Salvador lo que aprendi para ayudarte a empezar mejor
              </h2>
              <p className="max-w-2xl text-gray-300">
                Si quieres conocer mis horarios, el precio o como son las clases, escribeme por WhatsApp y te respondo directamente.
              </p>
            </div>
            <a
              href="https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-yellow-300"
            >
              Solicitar informacion
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 cursor-pointer" onClick={scrollToTop}>
<Image
  src="/logo.png"
  alt="ABC del Trading 503"
  width={300}
  height={90}
  className="h-24 w-auto object-contain 
             drop-shadow-[0_14px_40px_rgba(255,215,0,0.35)]
             hover:scale-105 transition"
/>
</div>
            <p className="text-sm leading-6 text-gray-400">
              Comparto clases online de trading desde El Salvador para personas que quieren aprender con una guia clara y cercana.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Enlaces rapidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-sm text-gray-400 transition hover:text-yellow-400">Inicio</a></li>
              <li><a href="#indicadores" className="text-sm text-gray-400 transition hover:text-yellow-400">Indicadores</a></li>
              <li><a href="#clases" className="text-sm text-gray-400 transition hover:text-yellow-400">Clases</a></li>
              <li><a href="#galeria" className="text-sm text-gray-400 transition hover:text-yellow-400">Resultados</a></li>
              <li><a href="#video" className="text-sm text-gray-400 transition hover:text-yellow-400">Video</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={14} />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={14} />
                <span>info@abc-trading.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} />
                <span>El Salvador</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <BadgeCheck size={14} className="text-yellow-400" />
                <span>Clases online con acompanamiento</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Mi enfoque</h3>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex items-center gap-2 text-yellow-300">
                <HeartHandshake size={16} />
                <span className="text-sm font-semibold">Mas cercano</span>
              </div>
              <p className="text-sm leading-6 text-gray-400">
                No vendo humo. Comparto lo que aprendi, explico con claridad y acompano a quienes quieren empezar con mejor base.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">(c) {currentYear} ABC-TRADING. Todos los derechos reservados.</p>
            <p className="mt-2 text-xs text-gray-600">Hecho en El Salvador</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
