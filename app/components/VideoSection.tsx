'use client';

import { Play, Pause, Volume2, VolumeX, Maximize, CheckCircle2, MessageCircleMore } from 'lucide-react';
import { useRef, useState } from 'react';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const time = parseFloat(e.target.value);
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / duration) * 100 || 0;

  return (
    <section id="video" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400 mb-4">
              Conoce la experiencia
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Mira el estilo de explicacion antes de unirte
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Este bloque ahora funciona como prueba visual de confianza: le muestra al visitante que si hay contenido, criterio y acompanamiento real.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.42)] bg-black group">
              <video
                ref={videoRef}
                className="w-full"
                poster="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                <button
                  onClick={togglePlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-black p-4 rounded-full transition transform hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="mb-2">
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #EAB308 ${progress}%, #4B5563 ${progress}%)`,
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button onClick={togglePlay} className="text-white hover:text-yellow-400 transition">
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button onClick={toggleMute} className="text-white hover:text-yellow-400 transition">
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    <span className="text-white text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                  <button onClick={handleFullscreen} className="text-white hover:text-yellow-400 transition">
                    <Maximize size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-yellow-400 mb-4">
                Por que este video ayuda a vender
              </p>
              <h3 className="text-3xl font-black mb-6 text-white">
                Reduce dudas y acelera la decision
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#22c55e] mt-0.5 shrink-0" size={20} />
                  <p className="text-gray-300">Le da al visitante una muestra real del tono, claridad y valor de las clases.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#22c55e] mt-0.5 shrink-0" size={20} />
                  <p className="text-gray-300">Hace que la propuesta se sienta tangible, no solo una promesa escrita.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#22c55e] mt-0.5 shrink-0" size={20} />
                  <p className="text-gray-300">Prepara al prospecto para el CTA final y mejora la conversion a WhatsApp.</p>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-yellow-500/20 bg-yellow-500/10 p-6 mb-6">
                <p className="text-sm text-yellow-200 mb-2">CTA recomendado debajo del video</p>
                <p className="text-lg font-semibold text-white">
                  Quiero recibir horarios, precio y forma de acceso
                </p>
              </div>

              <a
                href="https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(34,197,94,0.28)]"
              >
                <MessageCircleMore size={20} />
                Recibir horarios y precio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
