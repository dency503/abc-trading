'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ShieldCheck, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppUrl, navLinks } from '../content';

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

  const whatsappUrl = getWhatsAppUrl();

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[rgba(53,78,82,0.12)] bg-white/88 shadow-[0_12px_40px_rgba(53,78,82,0.12)] backdrop-blur-xl'
          : 'bg-white/65 backdrop-blur'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ABC del Trading 503"
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl object-contain ring-1 ring-[rgba(53,78,82,0.12)] shadow-[0_10px_24px_rgba(53,78,82,0.16)]"
            />
            <div>
              <div className="text-lg font-bold tracking-[0.22em] text-[var(--ink-main)]">ABC DEL TRADING 503</div>
              <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                <MapPin size={12} className="text-[var(--brand-yellow)]" />
                Desde El Salvador para Latinoamérica
              </div>
            </div>
          </Link>

          <div className="hidden items-center space-x-8 rounded-full border border-[rgba(53,78,82,0.14)] bg-white/80 px-6 py-3 shadow-sm backdrop-blur md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--ink-main)] transition-colors hover:text-[var(--brand-yellow)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="rounded-full border border-[rgba(53,78,82,0.14)] bg-white/80 px-4 py-2 text-right shadow-sm">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[var(--brand-yellow)]">
                <ShieldCheck size={12} />
                Mentor independiente
              </div>
              <div className="text-xs text-[var(--ink-muted)]">El Salvador</div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-cta-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Escríbeme por WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--ink-main)] focus:outline-none md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 overflow-hidden rounded-3xl border border-[rgba(53,78,82,0.14)] bg-white/95 shadow-2xl md:hidden">
            <div className="border-b border-[rgba(53,78,82,0.12)] px-5 py-4">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--brand-yellow)]">
                <MapPin size={12} />
                 Desde El Salvador para Latinoamérica
              </p>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">
                Comparto clases online de trading con un enfoque claro, cercano y real.
              </p>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-5 py-3 text-sm text-[var(--ink-main)] transition-colors hover:bg-[var(--petroleum-light)] hover:text-[var(--brand-blue-strong)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-cta-secondary m-4 flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle size={18} />
              Quiero información
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}


