'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600',
    title: 'Trading Desk Profesional',
    category: 'Equipamiento',
    description: 'Setup completo de trading con múltiples monitores',
  },
  {
    url: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=600',
    title: 'Análisis de Gráficos',
    category: 'Análisis',
    description: 'Análisis técnico avanzado de mercados financieros',
  },
  {
    url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600',
    title: 'Trading de Criptomonedas',
    category: 'Cripto',
    description: 'Operaciones en tiempo real con criptomonedas',
  },
  {
    url: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600',
    title: 'Mesa de Trading',
    category: 'Equipamiento',
    description: 'Ambiente profesional para trading diario',
  },
  {
    url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600',
    title: 'Análisis de Mercado',
    category: 'Análisis',
    description: 'Estudio profundo de tendencias del mercado',
  },
  {
    url: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600',
    title: 'Trading Móvil',
    category: 'Tecnología',
    description: 'Opera desde cualquier lugar con nuestra app',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <>
      <section id="galeria" className="py-20 bg-black bg-opacity-30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Galería de <span className="gradient-text">Trading</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                onClick={() => openModal(image, index)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-6">
                  <div>
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                    <p className="text-yellow-400 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition z-10"
            >
              <X size={30} />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={30} />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition"
            >
              <ChevronRight size={30} />
            </button>
            
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-xl font-semibold">{selectedImage.title}</p>
              <p className="text-yellow-400">{selectedImage.description}</p>
              <p className="text-gray-400 text-sm mt-1">{selectedImage.category}</p>
            </div>
            
            <div className="absolute bottom-4 right-4 text-white text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}