import { Globe, MessageCircle, Music, Play, Send, Users } from 'lucide-react';
import Link from 'next/link';
import { communityPlatforms } from '../content';
import SectionHeader from './SectionHeader';

const icons = {
  youtube: Play,
  telegram: Send,
  whatsapp: MessageCircle,
  tiktok: Music,
  indicator: Globe,
  broker: Users,
};

export default function CommunityLinks() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Fondo degradado */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(232,239,238,0.64),#ffffff)]" />

      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Únete a la comunidad"
          title="Sígueme donde comparto contenido activo"
          description="Recibe análisis, señales de apoyo y recursos para aprender trading con una comunidad seria en Latinoamérica."
          className="mb-16"
        />

        {/* GRID DE PLATAFORMAS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communityPlatforms.map((platform) => {
            const Icon = icons[platform.icon as keyof typeof icons];
            const isInternal = platform.link.startsWith('/');
            const classes =
              'group relative overflow-hidden rounded-2xl border border-[rgba(53,78,82,0.16)] bg-white p-6 shadow-[0_14px_40px_rgba(53,78,82,0.08)] transition hover:border-[var(--brand-blue)] hover:bg-[var(--petroleum-light)]';

            const content = (
              <>
                {/* Fondo hover */}
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${platform.color} opacity-0 transition-opacity group-hover:opacity-10`}
                />

                {/* Icono */}
                <div className="mb-4 inline-flex rounded-xl bg-[var(--petroleum-light)] p-3 text-[var(--brand-blue)] transition-transform group-hover:scale-110">
                  <Icon size={24} />
                </div>

                {/* Título y descripción */}
                <h3 className="mb-2 text-lg font-bold text-[var(--ink-main)]">{platform.name}</h3>
                <p className="mb-4 text-sm text-[var(--ink-soft)]">{platform.description}</p>

                {/* CTA "Ir ahora" */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--brand-yellow)] opacity-0 transition-opacity group-hover:opacity-100">
                  Ir ahora
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </>
            );

            return isInternal ? (
              <Link key={platform.name} href={platform.link} className={classes}>
                {content}
              </Link>
            ) : (
              <a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
              >
                {content}
              </a>
            );
          })}
        </div>

        {/* BLOQUE INFORMATIVO */}
        <div className="mt-16 rounded-2xl border border-[rgba(53,78,82,0.18)] bg-white p-8 text-center shadow-[0_18px_48px_rgba(53,78,82,0.10)]">
          <p className="mb-4 text-sm text-[var(--ink-muted)]">
            <span className="font-semibold text-[var(--ink-main)]">Comunidad activa</span> de
            traders compartiendo análisis y experiencias diariamente.
          </p>
          <p className="text-xs text-[var(--ink-soft)]">
            No es marketing. Es gente real aprendiendo trading de verdad.
          </p>
        </div>
      </div>
    </section>
  );
}