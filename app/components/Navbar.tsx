'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#indicadores', label: 'Indicadores' },
    { href: '#clases', label: 'Clases' },
    { href: '#galeria', label: 'Galería' },
    { href: '#video', label: 'Video' },
  ];

  const whatsappNumber = '1234567890';
  const whatsappMessage = 'Hola ABC-Trading, quiero más información';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black bg-opacity-80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            ABC-TRADING
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-yellow-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full items-center gap-2 transition-all transform hover:scale-105"
          >
            <Phone size={18} />
            Contacto
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-black bg-opacity-95 rounded-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 px-4 hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t`}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-4 mt-2 bg-green-500 hover:bg-green-600 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Contacto por WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}