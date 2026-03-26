'use client';

import {
  BookOpen,
  CheckCircle2,
  MonitorPlay,
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
  Target,
  Zap,
  MapPin,
  MessageCircle,
  Play,
  Star,
  TrendingUp,
  ListChecks,
  Gift,
  Bot,
  ActivitySquare,
  Users
} from "lucide-react";

export default function TradingClass() {
  const scrollToWhatsApp = () => {
    window.open(
      "https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t",
      "_blank"
    );
  };

  const temario = [
    "Uso de TradingView básico y para operar",
    "Estructura de mercado profesional",
    "Líneas de tendencia y canales paralelos",
    "Uso avanzado de Fibonacci",
    "RSI, CCI y detección de Divergencias",
    "Estrategia con Indicador PriceLogistic 7",
    "Gestión de riesgo (Stop Loss y Take Profit)",
    "Análisis general y Examen final",
  ];

  const features = [
    {
      icon: MonitorPlay,
      title: "Clases en vivo",
      description: "Explico con claridad, ejemplos y espacio para preguntas reales.",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
    },
    {
      icon: ShieldCheck,
      title: "Desde 0 o Avanzados",
      description: "Ideal si empiezas de cero o si ya buscas una estrategia rentable.",
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
    },
  ];

  const bonos = [
    {
      icon: Bot,
title: "Alertas de Trading en Tiempo Real",
desc: "Señales precisas directo a tu Telegram."
    },
    {
      icon: ActivitySquare,
      title: "Indicador de Divergencias",
      desc: "Herramienta extra de regalo.",
    },
    {
      icon: Users,
      title: "Seguimiento Cercano",
      desc: "Te unes al estudio directamente conmigo.",
    },
  ];

  return (
    <section
      id="clases"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a0c10] via-[#0d1016] to-[#0b0e14] py-24 text-white md:py-32"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,200,76,0.1),transparent_60%)]" />
      <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-3xl md:h-[800px] md:w-[800px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-3xl" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dotPattern' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.03)' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dotPattern)' /%3E%3C/svg%3E')] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <div className="animate-in slide-in-from-top-5 fade-in duration-700 mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-gradient-to-r from-yellow-500/15 to-amber-500/15 px-5 py-2.5 text-sm font-semibold text-yellow-400 shadow-lg backdrop-blur-sm">
            <BadgeDollarSign size={16} className="animate-pulse" />
            <span>🔥 Inscripciones abiertas - Cupos limitados</span>
          </div>
          <h1 className="animate-in slide-in-from-bottom-5 fade-in duration-700 mb-6 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-6xl lg:text-7xl">
            Aprende Trading
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                con Estructura y Lógica
              </span>
            </span>
          </h1>
          <p className="animate-in slide-in-from-bottom-5 fade-in delay-100 mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Tanto si empiezas desde cero como si buscas una estrategia definitiva. Te acompaño paso a paso hasta que seas capaz de analizar y operar el mercado por tu cuenta.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Tarjeta Izquierda - Temario y Clases */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#11151f] via-[#0f121c] to-[#0c0f16] shadow-2xl transition-all duration-500 hover:border-yellow-500/30">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="grid md:grid-cols-1">
              <div className="relative h-64 overflow-hidden md:h-80">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c0f16] via-[#0c0f16]/40 to-transparent" />
                <img
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format"
                  alt="Clases de trading online"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-yellow-500/30 bg-black/60 px-4 py-2 backdrop-blur-md">
                  <MapPin size={12} className="text-yellow-400" />
                  <span className="text-xs font-semibold">Desde El Salvador al Mundo</span>
                </div>
              </div>

              <div className="relative z-20 p-6 md:p-8 lg:p-10 -mt-20">
                <div className="mb-8 flex items-end gap-4 border-b border-white/10 pb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 shadow-lg shadow-yellow-500/20">
                    <ListChecks className="text-black" size={30} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Programa Completo
                    </h3>
                    <p className="mt-1 text-sm text-yellow-400 font-medium">
                      De principiante a trader independiente
                    </p>
                  </div>
                </div>

                {/* Features Rápidos */}
                <div className="mb-10 grid gap-4 sm:grid-cols-2">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/5 p-4">
                      <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${feature.bgColor}`}>
                        <feature.icon className={feature.color} size={20} />
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-bold text-white">{feature.title}</p>
                        <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Temario Grid */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen size={18} className="text-yellow-500" />
                    ¿Qué aprenderás en el curso?
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {temario.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 rounded-lg p-2 hover:bg-white/5 transition-colors">
                        <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300 font-medium leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Panel Lateral Derecho - Oferta y Bonos */}
          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-[#0f1119] to-[#090b10] p-6 shadow-2xl md:p-8 lg:p-10">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />
            
            <div className="relative z-10 flex flex-col h-full">
              
              {/* Header Precio y Duración */}
              <div className="mb-6 text-center border-b border-gray-800 pb-6">
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-400 border border-yellow-500/20">
                    <Zap size={14} /> Curso Completo
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-400 border border-sky-500/20">
                    <Clock3 size={14} /> Duración: 2 Meses
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-gray-400">$</span>
                  <span className="text-6xl font-black text-white">149<span className="text-3xl text-gray-400">.99</span></span>
                </div>
                <p className="text-sm text-gray-400 mt-2">Pago único • 8 semanas de formación intensiva</p>
              </div>

              {/* Bonos Adicionales */}
              <div className="mb-8 flex-grow">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                  <Gift size={16} className="text-amber-500" />
                  Bonos Adicionales Incluidos
                </h4>
                <div className="space-y-3">
                  {bonos.map((bono, idx) => (
                    <div key={idx} className="flex items-center gap-4 rounded-xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/5 to-transparent p-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                        <bono.icon size={20} className="text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{bono.title}</p>
                        <p className="text-xs text-gray-400">{bono.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats rápidos */}
              <div className="mb-6 flex items-center justify-center gap-6 text-center text-sm">
                <div>
                  <div className="flex items-center justify-center gap-1 text-yellow-400 mb-1">
                    <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                  </div>
                  <span className="text-gray-400 text-xs">Alta Valoración</span>
                </div>
                <div className="w-px h-8 bg-gray-800"></div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-white font-bold mb-1">
                    <Target size={14} className="text-emerald-400" /> Desde 0
                  </div>
                  <span className="text-gray-400 text-xs">Paso a paso</span>
                </div>
              </div>

              {/* CTA Final */}
              <div className="mt-auto">
                <button
                  onClick={scrollToWhatsApp}
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(245,200,76,0.2)]"
                >
                  <MessageCircle size={20} />
                  Inscribirme Ahora
                </button>
                <p className="mt-4 text-center text-xs text-gray-500">
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