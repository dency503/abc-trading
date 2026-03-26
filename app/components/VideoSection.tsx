'use client';

import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
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
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / duration) * 100 || 0;

  return (
    <section id="video" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Video <span className="gradient-text">Informativo</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black group">
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
            
            {/* Overlay de control */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
              <button
                onClick={togglePlay}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-black p-4 rounded-full transition transform hover:scale-110 opacity-0 group-hover:opacity-100"
              >
                {isPlaying ? <Pause size={32} /> : <Play size={32} />}
              </button>
            </div>
            
            {/* Controles del video */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Barra de progreso */}
              <div className="mb-2">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #EAB308 ${progress}%, #4B5563 ${progress}%)`
                  }}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-yellow-400 transition"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-yellow-400 transition"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <span className="text-white text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
                <button
                  onClick={handleFullscreen}
                  className="text-white hover:text-yellow-400 transition"
                >
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-4">
            Aprende las mejores estrategias de trading con nuestros expertos
          </p>
          <div className="text-center mt-4">
            <a
              href="https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full transition transform hover:scale-105"
            >
              <Play size={18} />
              Recibir material exclusivo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}