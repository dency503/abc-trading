'use client';

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Indicators from './components/Indicators';
import Classes from './components/Classes';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import Comments from './components/Comments';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga inicial
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-yellow-400 font-bold">ABC</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Indicators />
      <Classes />
      <Gallery />
      <VideoSection />
      <Comments />
      <Footer />
    </main>
  );
}