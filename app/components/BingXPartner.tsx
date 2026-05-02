import { ArrowUpRight, BadgeCheck, ShieldCheck, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';

const bingXPartnerUrl = 'https://bingxdao.com/partner/ABCTrading503/';

const partnerBenefits = [
  {
    icon: BadgeCheck,
    title: 'Partner verificado de BingX',
    description:
      'Acceso directo a BingX desde un partner oficial, con respaldo y transparencia.',
  },
  {
    icon: ShieldCheck,
    title: 'Enfoque responsable',
    description:
      'Aprende gestión de riesgo, disciplina y análisis antes que otra cosa.',
  },
  {
    icon: Users,
    title: 'Comunidad conectada',
    description:
      'Únete desde el enlace de partner y recibe orientación dentro de la comunidad.',
  },
];

export default function BingXPartner() {
  return (
    <section
      aria-labelledby="bingx-partner-heading"
      className="relative overflow-hidden border-y border-[rgba(53,78,82,0.06)] bg-gradient-to-b from-white via-[rgba(232,239,238,0.15)] to-white py-16 md:py-28"
    >
      {/* Background decorative elements – más suaves */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-20 -top-20 h-[28rem] w-[28rem] rounded-full bg-[rgba(53,78,82,0.02)] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-[rgba(53,78,82,0.02)] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge – más ligero */}
        <div className="mb-14 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)] backdrop-blur-md shadow-sm">
            <Sparkles size={14} className="text-[var(--brand-yellow)]" />
            Broker aliado oficial
          </span>
        </div>

        {/* Tarjeta principal – glass mejorado */}
        <div className="brand-shell overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/70 shadow-2xl shadow-[rgba(53,78,82,0.04)] backdrop-blur-xl backdrop-saturate-150">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
            
            {/* Columna izquierda – Logo card con efecto hover */}
            <div className="relative flex items-center justify-center border-b border-[rgba(53,78,82,0.04)] bg-gradient-to-br from-[rgba(232,239,238,0.8)] to-[rgba(255,255,255,0.6)] p-8 sm:p-12 lg:border-b-0 lg:border-r transition-colors duration-500">
              <div className="w-full max-w-sm">
                <div className="mb-8 overflow-hidden rounded-2xl border border-[rgba(53,78,82,0.08)] bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:border-[rgba(53,78,82,0.15)] group">
                  <Image
                    src="/images/bingx-logo.svg"
                    alt="Logo de BingX"
                    width={720}
                    height={220}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
                <div className="space-y-3 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(53,78,82,0.05)] px-4 py-2 ring-1 ring-[rgba(53,78,82,0.04)]">
                    <BadgeCheck size={16} className="text-[var(--brand-blue)]" />
                    <span className="text-sm font-bold text-[var(--brand-blue)]">
                      Partner oficial
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[var(--ink-soft)]/70">
                    Plataforma reconocida internacionalmente
                  </p>
                </div>
              </div>
            </div>

            {/* Columna derecha – Contenido */}
            <div className="p-8 sm:p-12 lg:p-14">
              {/* Línea decorativa + etiqueta */}
              <div className="mb-3 flex items-center gap-3">
                <span className="block h-px w-8 bg-gradient-to-r from-[var(--brand-yellow)] to-transparent" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-yellow)]">
                  Trading responsable
                </span>
              </div>

              {/* Título con subrayado CSS animado */}
              <h2
                id="bingx-partner-heading"
                className="mb-6 text-3xl font-black leading-tight text-[var(--ink-main)] sm:text-4xl md:text-5xl lg:text-5xl"
              >
                ABC del Trading 503{' '}
                <span className="relative inline-block">
                  es partner
                  {/* Subrayado con gradiente que se revela en hover */}
                  <span className="absolute -bottom-1.5 left-0 h-[4px] w-full origin-left scale-x-100 rounded-full bg-gradient-to-r from-[var(--brand-yellow)] to-[var(--brand-blue)] transition-transform duration-300 group-hover:scale-x-100" />
                </span>{' '}
                de BingX
              </h2>

              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]/80">
                Si vas a practicar o abrir cuenta, hazlo desde nuestro enlace de partner.
                Te acompañamos con educación estructurada, comunidad activa y una lectura
                más ordenada del mercado.
              </p>

              {/* Beneficios – tarjetas con micro‑interacción mejorada */}
              <div className="mb-10 grid gap-5 sm:grid-cols-3">
                {partnerBenefits.map((benefit) => (
                  <article
                    key={benefit.title}
                    className="group relative rounded-2xl border border-[rgba(53,78,82,0.06)] bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[rgba(53,78,82,0.12)]"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[rgba(53,78,82,0.04)] to-[rgba(53,78,82,0.01)] transition-all duration-300 group-hover:from-[rgba(53,78,82,0.08)] group-hover:to-[rgba(53,78,82,0.03)]">
                      <benefit.icon
                        size={22}
                        className="text-[var(--brand-blue)] transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mb-1.5 text-sm font-bold text-[var(--ink-main)]">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)]/80">
                      {benefit.description}
                    </p>
                  </article>
                ))}
              </div>

              {/* CTA con efecto glow */}
              <a
                href={bingXPartnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[var(--brand-blue)] px-8 py-5 font-bold text-white shadow-lg shadow-[rgba(53,78,82,0.15)] transition-all duration-300 hover:shadow-xl hover:shadow-[rgba(53,78,82,0.25)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:ring-offset-2 sm:w-auto"
              >
                {/* Efecto de brillo sutil */}
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span>Acceder a BingX con ABC Trading 503</span>
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <p className="mt-4 text-xs text-[var(--ink-soft)]/70">
                Al usar nuestro enlace, apoyas a la comunidad sin costo adicional para ti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}