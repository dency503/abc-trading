import { ArrowUpRight, BadgeCheck, ShieldCheck, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';

const bingXPartnerUrl = 'https://bingxdao.com/partner/ABCTrading503/';

const partnerBenefits = [
  {
    icon: BadgeCheck,
    title: 'Partner verificado',
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
      className="relative overflow-hidden border-y border-[rgba(53,78,82,0.08)] bg-gradient-to-b from-white via-[rgba(232,239,238,0.3)] to-white py-16 md:py-28"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[rgba(53,78,82,0.03)] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[rgba(53,78,82,0.02)] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section badge */}
        <div className="mb-12 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(53,78,82,0.12)] bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)] backdrop-blur-sm">
            <Sparkles size={14} className="text-[var(--brand-yellow)]" />
            Broker aliado oficial
          </span>
        </div>

        {/* Main content grid */}
        <div className="brand-shell overflow-hidden rounded-[2.5rem] border border-[rgba(53,78,82,0.08)] bg-white/60 shadow-xl shadow-[rgba(53,78,82,0.04)] backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
            {/* Left column - Logo card */}
            <div className="relative flex items-center justify-center border-b border-[rgba(53,78,82,0.06)] bg-gradient-to-br from-[rgba(232,239,238,0.6)] to-[rgba(53,78,82,0.02)] p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <div className="w-full max-w-sm">
                <div className="mb-8 overflow-hidden rounded-2xl border border-[rgba(53,78,82,0.1)] bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <Image
                    src="/images/bingx-logo.svg"
                    alt="Logo de BingX"
                    width={720}
                    height={220}
                    className="h-auto w-full"
                    priority
                  />
                </div>
                <div className="space-y-3 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(53,78,82,0.06)] px-4 py-2">
                    <BadgeCheck size={16} className="text-[var(--brand-blue)]" />
                    <span className="text-sm font-semibold text-[var(--brand-blue)]">
                      Partner oficial
                    </span>
                  </div>
                  <p className="text-sm text-[var(--ink-muted)]">
                    Plataforma reconocida internacionalmente
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="p-8 sm:p-12 lg:p-14">
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-[var(--brand-yellow)]" />
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--brand-yellow)]">
                  Trading responsable
                </span>
              </div>

              <h2
                id="bingx-partner-heading"
                className="mb-6 text-3xl font-black leading-tight text-[var(--ink-main)] sm:text-4xl md:text-5xl lg:text-5xl"
              >
                ABC del Trading 503{' '}
                <span className="relative inline-block">
                  es partner
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,4 Q25,0 50,4 Q75,8 100,4"
                      fill="none"
                      stroke="var(--brand-yellow)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                de BingX
              </h2>

              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[var(--ink-muted)]">
                Si vas a practicar o abrir cuenta, hazlo desde nuestro enlace de partner.
                Te acompañamos con educación estructurada, comunidad activa y una lectura
                más ordenada del mercado.
              </p>

              {/* Benefits grid */}
              <div className="mb-10 grid gap-5 sm:grid-cols-3">
                {partnerBenefits.map((benefit) => (
                  <article
                    key={benefit.title}
                    className="group relative rounded-2xl border border-[rgba(53,78,82,0.08)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[rgba(53,78,82,0.15)]"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(53,78,82,0.04)] transition-colors duration-300 group-hover:bg-[rgba(53,78,82,0.08)]">
                      <benefit.icon
                        size={22}
                        className="text-[var(--brand-blue)]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mb-2 text-sm font-bold text-[var(--ink-main)]">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                      {benefit.description}
                    </p>
                  </article>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={bingXPartnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--brand-blue)] px-8 py-5 font-bold text-white shadow-lg shadow-[rgba(53,78,82,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-blue-dark)] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:ring-offset-2 sm:w-auto"
              >
                <span>Abrir BingX con ABC Trading 503</span>
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <p className="mt-4 text-xs text-[var(--ink-soft)]">
                Al usar nuestro enlace, apoyas a la comunidad sin costo adicional para ti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}