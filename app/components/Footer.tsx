'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4 cursor-pointer" onClick={scrollToTop}>
              ABC-TRADING
            </div>
            <p className="text-gray-400 text-sm">
              Aprende trading desde cero con clases prácticas y acompañamiento continuo hasta que te sientas capaz de operar por tu cuenta.
            </p>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-yellow-400 transition text-sm">Inicio</a></li>
              <li><a href="#indicadores" className="text-gray-400 hover:text-yellow-400 transition text-sm">Indicadores</a></li>
              <li><a href="#clases" className="text-gray-400 hover:text-yellow-400 transition text-sm">Clases</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-yellow-400 transition text-sm">Galería</a></li>
              <li><a href="#video" className="text-gray-400 hover:text-yellow-400 transition text-sm">Video</a></li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={14} />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={14} />
                <span>info@abc-trading.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={14} />
                <span>Wall Street, New York</span>
              </li>
            </ul>
          </div>
          
          {/* Redes Sociales con SVGs personalizados */}
          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-500 p-2 rounded-full transition transform hover:scale-110"
              >
                <Phone size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} ABC-TRADING. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Educando traders desde 2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}