"use client";

import {
  BookOpen,
  CheckCircle,
  MonitorPlay,
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
  Users,
  Target,
  Zap,
  Award,
  MapPin,
  MessageCircle,
  Play,
  Star,
  TrendingUp,
} from "lucide-react";

export default function TradingClass() {
  const scrollToWhatsApp = () => {
    window.open(
      "https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t",
      "_blank"
    );
  };

  const benefits = [
    "Aprende desde cero con una guía pensada para personas que van empezando.",
    "Te acompaño en vivo para resolver dudas reales mientras avanzas.",
    "Trabajo contigo lectura de mercado, gestión del riesgo y ejecución paso a paso.",
    "Ideal si quieres aprender con alguien que ya pasó por ese proceso.",
  ];

  const features = [
    {
      icon: MonitorPlay,
      title: "Clases en vivo",
      description: "Explico con claridad, ejemplos y espacio para preguntas.",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "group-hover:border-emerald-400/30",
    },
    {
      icon: ShieldCheck,
      title: "Enfoque honesto",
      description:
        "Sin promesas falsas; todo lo comparto con criterio y paciencia.",
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      borderColor: "group-hover:border-amber-400/30",
    },
    {
      icon: Clock3,
      title: "A tu ritmo",
      description: "Ideal para estudiar aunque trabajes o estés empezando.",
      color: "text-sky-400",
      bgColor: "bg-sky-400/10",
      borderColor: "group-hover:border-sky-400/30",
    },
  ];

  return (
    <section
      id="clases"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a0c10] via-[#0d1016] to-[#0b0e14] py-24 text-white md:py-32"
    >
      {/* Fondo decorativo mejorado */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,200,76,0.1),transparent_60%)]" />
      <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-3xl md:h-[800px] md:w-[800px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-3xl" />
      
      {/* Patrón de puntos decorativo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dotPattern' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.03)' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dotPattern)' /%3E%3C/svg%3E')] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header mejorado */}
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
                con Experiencia Real
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C50 2.5 150 0 299 5"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <p className="animate-in slide-in-from-bottom-5 fade-in delay-100 mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            No aprendes solo. Son clases en vivo donde avanzas junto a otras
            personas que también están empezando, con explicaciones claras,
            ejemplos reales y acompañamiento constante.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Tarjeta principal - Mejorada */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#11151f] via-[#0f121c] to-[#0c0f16] shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-yellow-500/30">
            {/* Efecto de brillo mejorado */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            
            {/* Borde brillante animado */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="grid md:grid-cols-[1fr_1.1fr]">
              {/* Sección de imagen mejorada */}
              <div className="relative h-80 overflow-hidden md:h-full">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c0f16] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0c0f16]" />
                <img
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format"
                  alt="Clases de trading online"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge de video mejorado 
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 backdrop-blur-md">
                  <Play size={12} className="text-yellow-400" />
                  <span className="text-xs font-medium">Clase demostrativa</span>
                </div>*/}
                {/* Badge de ubicación */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-yellow-500/30 bg-black/60 px-4 py-2 backdrop-blur-md">
                  <MapPin size={12} className="text-yellow-400" />
                  <span className="text-xs font-semibold">Desde El Salvador</span>
                </div>
              </div>

              {/* Contenido mejorado */}
              <div className="relative z-20 p-6 md:p-8 lg:p-10">
                <div className="mb-8 flex items-center gap-4 border-b border-white/10 pb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 shadow-lg">
                    <BookOpen className="text-yellow-400" size={26} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Mis Clases de Trading
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Acompañamiento cercano y explicación paso a paso
                    </p>
                  </div>
                </div>

                {/* Features grid mejorado */}
                <div className="mb-10 grid gap-4 sm:grid-cols-2">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`group/feature rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-${feature.color.split('-')[1]}/30 hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5`}
                    >
                      <div
                        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${feature.bgColor} transition-all duration-300 group-hover/feature:scale-110 group-hover/feature:shadow-lg`}
                      >
                        <feature.icon className={feature.color} size={20} />
                      </div>
                      <p className="mb-1 text-sm font-semibold text-white">
                        {feature.title}
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Beneficios con iconos mejorados */}
                <div className="mb-10 space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="group/benefit flex items-start gap-3 rounded-lg p-2 transition-all duration-300 hover:bg-white/5"
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        <div className="rounded-full bg-emerald-400/10 p-1 transition-all duration-300 group-hover/benefit:scale-110">
                          <CheckCircle
                            size={16}
                            className="text-emerald-400"
                          />
                        </div>
                      </div>
                      <span className="text-sm leading-relaxed text-gray-300 transition-colors group-hover/benefit:text-white">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Botones CTA mejorados */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={scrollToWhatsApp}
                    className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 px-6 py-4 text-base font-bold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <MessageCircle size={18} />
                      Quiero información
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                  </button>
                  <a
                    href="#video"
                    className="group/btn flex-1 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:shadow-lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Play size={16} />
                      Ver cómo enseño
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Panel lateral mejorado */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1119] to-[#090b10] p-6 shadow-2xl transition-all duration-500 hover:border-yellow-500/30 md:p-8 lg:p-10">
            {/* Efectos decorativos */}
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-yellow-500/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 shadow-lg">
                  <Zap className="text-yellow-400" size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400/80">
                    Todo incluido
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Acceso Completo
                  </h3>
                </div>
              </div>

              {/* Badge de ubicación */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-yellow-300">
                <MapPin size={13} />
                Experiencia desde El Salvador
              </div>

              {/* Stats adicionales */}
              <div className="mb-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                  <Star size={16} className="mx-auto mb-1 text-yellow-400" />
                  <p className="text-lg font-bold text-white">4.9</p>
                  <p className="text-xs text-gray-400">Valoración</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                  <TrendingUp size={16} className="mx-auto mb-1 text-emerald-400" />
                  <p className="text-lg font-bold text-white">+200</p>
                  <p className="text-xs text-gray-400">Estudiantes</p>
                </div>
              </div>

              {/* Información principal */}
              <div className="mb-8 space-y-4">
                {[
                  {
                    icon: Users,
                    label: "Modalidad",
                    value: "Clases online en vivo + apoyo cercano",
                    gradient: "from-blue-500/10 to-cyan-500/10",
                  },
                  {
                    icon: Target,
                    label: "Ideal para",
                    value: "Personas que quieren aprender con alguien real",
                    gradient: "from-purple-500/10 to-pink-500/10",
                  },
                  {
                    icon: Award,
                    label: "Objetivo",
                    value: "Entender el mercado con más orden y confianza",
                    gradient: "from-yellow-500/10 to-amber-500/10",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`group rounded-xl border border-white/10 bg-gradient-to-r ${item.gradient} p-5 transition-all duration-300 hover:border-yellow-500/30 hover:shadow-lg hover:-translate-y-0.5`}
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <item.icon size={18} className="text-yellow-400" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-yellow-400/80">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-base font-semibold text-white transition-colors group-hover:text-yellow-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA final mejorado */}
              <div className="mt-8 rounded-xl border border-yellow-400/30 bg-gradient-to-br from-yellow-400/10 via-amber-500/10 to-yellow-400/10 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-yellow-400">
                    Respuesta rápida
                  </p>
                </div>
                <p className="mb-3 text-xl font-bold leading-tight text-white">
                  ¿Quieres aprender conmigo?
                </p>
                <p className="mb-5 text-sm leading-relaxed text-gray-300">
                  Escríbeme por WhatsApp y te comparto horarios, precio y cómo
                  empezar desde cero.
                </p>
                <button
                  onClick={scrollToWhatsApp}
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-white to-gray-100 px-6 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-amber-300 hover:shadow-xl"
                >
                  <MessageCircle size={18} />
                  Hablar por WhatsApp ahora
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
                </button>
                <p className="mt-4 text-center text-xs text-gray-500">
                  ✅ Sin compromiso | Respuesta cercana y sin vueltas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}