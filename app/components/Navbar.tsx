'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ShieldCheck, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#indicadores', label: 'Indicadores' },
    { href: '#clases', label: 'Clases' },
    { href: '#galeria', label: 'Resultados' },
    { href: '#video', label: 'Video' },
  ];

  const whatsappUrl = 'https://api.whatsapp.com/send?phone=50379587850&text=Hola%20quiero%20informacion%20sobre%20las%20clases%20de%20trading';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080d]/90 border-b border-yellow-400/10 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ABC del Trading 503"
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl object-contain ring-1 ring-white/10"
            />
            <div>
              <div className="text-lg font-bold tracking-[0.22em] text-white">ABC DEL TRADING 503</div>
              <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gray-400">
                <MapPin size={12} className="text-yellow-400" />
                Desde El Salvador para latinoamerica
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-200 transition-colors hover:text-yellow-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-right">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-yellow-300">
                <ShieldCheck size={12} />
                Mentor independiente
              </div>
              <div className="text-xs text-gray-300">El Salvador</div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(34,197,94,0.25)]"
            >
              <MessageCircle size={18} />
              Escribeme por WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-[#0b1017]/95 shadow-2xl md:hidden">
            <div className="border-b border-white/10 px-5 py-4">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-yellow-300">
                <MapPin size={12} />
                 Desde El Salvador para latinoamerica
              </p>
              <p className="mt-2 text-sm text-gray-300">
                Comparto clases online de trading con un enfoque claro, cercano y real.
              </p>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-5 py-3 text-sm text-gray-200 transition-colors hover:bg-white/5 hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="m-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] px-4 py-3 text-center font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle size={18} />
              Quiero informacion
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
