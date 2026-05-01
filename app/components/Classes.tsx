'use client';

import {
  BookOpen,
  CheckCircle2,
  MonitorPlay,
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
  Zap,
  MapPin,
  MessageCircle,
  Star,
  ListChecks,
  Gift,
  Bot,
  ActivitySquare,
  Users,
} from 'lucide-react';

export default function TradingClass() {
  const scrollToWhatsApp = () => {
    window.open(
      'https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t',
      '_blank'
    );
  };

  const temario = [
    'Uso de TradingView básico y para operar',
    'Estructura de mercado profesional',
    'Líneas de tendencia y canales paralelos',
    'Uso avanzado de Fibonacci',
    'RSI, CCI y detección de divergencias',
    'Cómo usar el indicador Price Logistic 7 en tu estrategia',
    'Gestión de riesgo: Stop Loss y Take Profit',
    'Análisis general y examen final',
  ];

  const features = [
    {
      icon: MonitorPlay,
      title: 'Clases en vivo',
      description: 'Explico con claridad, ejemplos reales y espacio para preguntas concretas.',
      color: 'text-[var(--brand-blue)]',
      bgColor: 'bg-[rgba(35,88,147,0.12)]',
    },
    {
      icon: ShieldCheck,
      title: 'Desde cero o con base',
      description: 'Funciona si comienzas hoy o si quieres ordenar mejor tu análisis.',
      color: 'text-[var(--brand-yellow)]',
      bgColor: 'bg-[rgba(243,198,47,0.12)]',
    },
    {
      icon: Users,
      title: 'Seguimiento cercano',
      description: 'Después de clase seguimos conectados para reforzar lo aprendido.',
      color: 'text-[var(--brand-green)]',
      bgColor: 'bg-[rgba(57,168,87,0.12)]',
    },
  ];

  const bonos = [
    {
      icon: Bot,
      title: 'Bot de señales +1',
      desc: 'Recibe señales de apoyo como referencia directa en Telegram.',
    },
    {
      icon: ActivitySquare,
      title: 'Indicador de divergencias',
      desc: 'Herramienta extra de regalo para complementar tu lectura.',
    },
    {
      icon: Users,
      title: 'Seguimiento en comunidad',
      desc: 'Seguimos trabajando juntos y operando con más contexto.',
    },
  ];

  return (
    <section
      id="clases"
      className="relative overflow-hidden py-24 text-[var(--ink-main)] md:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff,rgba(232,239,238,0.72),#ffffff)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center md:mb-20">
          <div className="brand-badge mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg backdrop-blur-sm">
            <BadgeDollarSign size={16} />
            <span>Inscripciones abiertas y cupos limitados</span>
          </div>

          <h1 className="mb-6 text-5xl font-black tracking-tight md:text-6xl lg:text-7xl">
            Aprende trading
            <br />
            <span className="gradient-text">con estructura y lógica</span>
          </h1>

          <div className="brand-divider mx-auto mb-6 h-1.5 w-32" />

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[var(--ink-muted)] md:text-xl">
            Tanto si empiezas desde cero como si buscas una estrategia más clara,
            te acompaño paso a paso hasta que seas capaz de analizar y operar con criterio.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:gap-10">
          <div className="brand-shell overflow-hidden rounded-3xl">
            <div className="relative h-64 overflow-hidden md:h-80">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(10,16,23,0.06), rgba(10,16,23,0.55)), url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format')",
                }}
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0d141d] via-[#0d141d]/35 to-transparent" />
              <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-[rgba(243,198,47,0.18)] bg-[rgba(10,16,23,0.72)] px-4 py-2 backdrop-blur-md">
                <MapPin size={12} className="text-[var(--brand-yellow)]" />
                <span className="text-xs font-semibold">Desde El Salvador para toda Latinoamérica</span>
              </div>
            </div>

            <div className="relative z-20 -mt-16 p-6 md:p-8 lg:p-10">
              <div className="mb-8 flex items-end gap-4 border-b border-[rgba(163,184,207,0.12)] pb-6">
                <div className="brand-cta flex h-16 w-16 items-center justify-center rounded-2xl">
                  <ListChecks className="text-white" size={30} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--ink-main)]">
                    Programa completo
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--brand-yellow)]">
                    De principiante a trader con criterio
                  </p>
                </div>
              </div>

              <div className="mb-10 grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="brand-panel-soft flex items-start gap-4 rounded-xl p-4"
                  >
                    <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${feature.bgColor}`}>
                      <feature.icon className={feature.color} size={20} />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-bold text-[var(--ink-main)]">{feature.title}</p>
                      <p className="text-xs leading-relaxed text-[var(--ink-soft)]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-[var(--ink-main)]">
                  <BookOpen size={18} className="text-[var(--brand-yellow)]" />
                  ¿Qué aprenderás en el curso?
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {temario.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-lg border border-transparent p-2 transition-colors hover:border-[rgba(163,184,207,0.10)] hover:bg-[var(--petroleum-light)]"
                    >
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--brand-green)]" />
                      <span className="text-sm font-medium leading-tight text-[var(--ink-muted)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="brand-panel relative overflow-hidden rounded-3xl p-6 md:p-8 lg:p-10">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[rgba(35,88,147,0.16)] blur-3xl" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-6 border-b border-[rgba(163,184,207,0.12)] pb-6 text-center">
                <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(243,198,47,0.20)] bg-[rgba(243,198,47,0.10)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--brand-yellow)]">
                    <Zap size={14} /> Curso completo
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(35,88,147,0.22)] bg-[rgba(35,88,147,0.10)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8eb6e3]">
                    <Clock3 size={14} /> Duración: 2 meses
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-[var(--ink-soft)]">$</span>
                  <span className="text-6xl font-black text-[var(--ink-main)]">
                    129<span className="text-3xl text-[var(--ink-soft)]">.99</span>
                  </span>
                </div>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">
                  Puedes pagar en 2 partes • 8 semanas de formación intensiva
                </p>
              </div>

              <div className="brand-panel-soft mb-6 rounded-2xl p-4">
                <p className="text-sm font-semibold text-[var(--ink-main)]">Forma de pago</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                  Primer pago antes de la primera clase y segundo pago antes de la quinta clase.
                </p>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--ink-main)]">
                  <Gift size={16} className="text-[var(--brand-yellow)]" />
                  Bonos adicionales incluidos
                </h4>
                <div className="space-y-3">
                  {bonos.map((bono, index) => {
                    const accent = [
                      'bg-[rgba(243,198,47,0.10)] text-[var(--brand-yellow)]',
                      'bg-[rgba(35,88,147,0.12)] text-[var(--brand-blue)]',
                      'bg-[rgba(57,168,87,0.12)] text-[var(--brand-green)]',
                    ][index] || 'bg-[var(--petroleum-light)] text-[var(--ink-main)]';

                    return (
                      <div
                        key={bono.title}
                        className="flex items-center gap-4 rounded-xl border border-[rgba(163,184,207,0.10)] bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent)] p-3.5"
                      >
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${accent}`}>
                          <bono.icon size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[var(--ink-main)]">{bono.title}</p>
                          <p className="text-xs text-[var(--ink-soft)]">{bono.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-lg border border-[rgba(243,198,47,0.20)] bg-[rgba(243,198,47,0.08)] p-3">
                  <p className="text-xs text-[var(--ink-muted)]">
                    <span className="font-semibold text-[var(--brand-yellow)]">Nota:</span> Te enseñamos cómo usar el indicador Price Logistic 7, pero se compra por separado. Consulta nuestra <a href="/indicador" className="underline hover:text-[var(--brand-yellow)]">sección de indicadores</a> para más detalles.
                  </p>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-center gap-6 text-center text-sm">
                <div>
                  <div className="mb-1 flex items-center justify-center gap-1 text-[var(--brand-yellow)]">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <span className="text-xs text-[var(--ink-soft)]">Alta valoración</span>
                </div>
                <div className="h-8 w-px bg-[rgba(163,184,207,0.12)]"></div>
                <div>
                  <div className="mb-1 flex items-center justify-center gap-1 font-bold text-[var(--ink-main)]">
                    <ShieldCheck size={14} className="text-[var(--brand-green)]" /> Desde 0
                  </div>
                  <span className="text-xs text-[var(--ink-soft)]">Paso a paso</span>
                </div>
              </div>

              <div className="mt-auto">
                <button
                  onClick={scrollToWhatsApp}
                  className="brand-cta flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold transition-all duration-300 hover:scale-[1.02]"
                >
                  <MessageCircle size={20} />
                  Inscribirme ahora
                </button>
                <p className="mt-4 text-center text-xs text-[var(--ink-soft)]">
                  Haz clic para escribirme por WhatsApp y resolver cualquier duda antes de empezar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

