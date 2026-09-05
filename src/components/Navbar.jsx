import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm border-b border-[#1F3024]/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#1F3024] flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 stroke-[1.75]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1F3024]">
              Pizpireta
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#4E5C51] font-semibold -mt-1">
              Beauty & Spa
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#4E5C51]">
          <a href="#hero" className="hover:text-[#1F3024] transition-colors py-1">Inicio</a>
          <a href="#servicios" className="hover:text-[#1F3024] transition-colors py-1">Servicios</a>
          <a href="#galeria" className="hover:text-[#1F3024] transition-colors py-1">Galería</a>
          <a href="#contacto" className="hover:text-[#1F3024] transition-colors py-1">Ubicación</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onOpenBooking}
            className="bg-[#D4AF37] hover:bg-[#B8952A] text-[#1F3024] font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all transform active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Reservar Cita</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1F3024] hover:bg-[#E6ECE7] rounded-lg transition-colors"
          aria-label="Menu Toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-[#1F3024]/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <a 
            href="#hero" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1F3024] py-2 border-b border-[#4E5C51]/10"
          >
            Inicio
          </a>
          <a 
            href="#servicios" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1F3024] py-2 border-b border-[#4E5C51]/10"
          >
            Servicios
          </a>
          <a 
            href="#galeria" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1F3024] py-2 border-b border-[#4E5C51]/10"
          >
            Galería
          </a>
          <a 
            href="#contacto" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1F3024] py-2 border-b border-[#4E5C51]/10"
          >
            Ubicación
          </a>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full bg-[#D4AF37] text-[#1F3024] font-semibold py-3.5 rounded-full text-center flex items-center justify-center gap-2 shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Reservar Cita</span>
          </button>
        </div>
      )}
    </header>
  );
}
