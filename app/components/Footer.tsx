"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  BadgeCheck,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";
import { contact, getWhatsAppUrl, navLinks } from "../content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.location.href = "/";
  };

  return (
    <footer className="border-t border-[rgba(53,78,82,0.12)] bg-[var(--petroleum-light)] pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="mb-10 rounded-[2rem] border border-[rgba(53,78,82,0.16)] bg-white p-8 shadow-[0_18px_48px_rgba(53,78,82,0.10)] md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-yellow)]">
                Hablemos claro
              </p>
              <h2 className="mb-3 text-3xl font-black text-[var(--ink-main)] md:text-4xl">
                Tienes todo para empezar tu camino en trading
              </h2>
              <p className="max-w-2xl text-[var(--ink-muted)]">
                Horarios, precio y cómo funcionan las clases. Respondo personalmente en menos de 24 horas.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-cta inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold transition hover:-translate-y-0.5"
              >
                WhatsApp Directo
                <ArrowUpRight size={18} />
              </a>
              <a
                href={contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[rgba(53,78,82,0.18)] bg-white px-6 py-4 font-semibold text-[var(--ink-main)] transition hover:scale-105 hover:border-[var(--brand-blue)] hover:bg-[rgba(53,78,82,0.08)]"
              >
                Telegram Gratis
              </a>
            </div>
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
             drop-shadow-[0_14px_40px_rgba(35,88,147,0.28)]
             hover:scale-105 transition"
              />
            </div>
            <p className="text-sm leading-6 text-[var(--ink-soft)]">
              Comparto clases online de trading desde El Salvador para personas
              que quieren aprender con una guía clara y cercana.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[var(--ink-main)]">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--ink-soft)] transition hover:text-[var(--brand-yellow)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#comentarios"
                  className="text-sm text-[var(--ink-soft)] transition hover:text-[var(--brand-yellow)]"
                >
                  Comentarios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[var(--ink-main)]">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
                <Phone size={14} />
                <span>Teléfono directo: 79587850</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
                <MessageCircle size={14} />
                <a
                  href="https://t.me/Hit_503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--brand-yellow)]"
                >
                  @Hit_503
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
                <Mail size={14} />
                <span>info@abc-trading.com</span>
              </li>

              <li className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
                <MessageCircle size={14} />
                <a
                  href="https://www.tiktok.com/@trader.503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--brand-yellow)]"
                >
                  @trader.503
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
                <MapPin size={14} />
                <span>El Salvador</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
                <BadgeCheck size={14} className="text-[var(--brand-yellow)]" />
                <span>Clases online con acompañamiento</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[var(--ink-main)]">Mi enfoque</h3>
            <div className="brand-panel-soft rounded-2xl p-5">
              <div className="mb-3 flex items-center gap-2 text-[var(--brand-yellow)]">
                <HeartHandshake size={16} />
                <span className="text-sm font-semibold">Más cercano</span>
              </div>
              <p className="text-sm leading-6 text-[var(--ink-soft)]">
                No vendo humo. Comparto lo que aprendí, explico con claridad y
                acompaño a quienes quieren empezar con mejor base.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(53,78,82,0.12)] pt-8">
          <div className="text-center">
            <p className="text-sm text-[var(--ink-soft)]">
              (c) {currentYear} ABC-TRADING. Todos los derechos reservados.
            </p>
            <p className="mt-2 text-xs text-gray-600">Hecho en El Salvador</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


