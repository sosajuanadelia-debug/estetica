import React from 'react';
import { Sparkles, Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E2B21] text-[#E6ECE7] pt-16 pb-12 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#FAF9F6]/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4AF37] text-[#1F3024] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Pizpireta Beauty
              </span>
            </div>
            <p className="text-sm text-[#808D83] leading-relaxed max-w-sm">
              Centro de estética botánica y bienestar holístico dedicado a resaltar tu belleza natural con ingredientes orgánicos y tratamientos de alta gama.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-[#808D83]">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-[#D4AF37] transition-colors">Servicios Principales</a></li>
              <li><a href="#galeria" className="hover:text-[#D4AF37] transition-colors">Galería de Resultados</a></li>
              <li><a href="#contacto" className="hover:text-[#D4AF37] transition-colors">Ubicación & Citas</a></li>
            </ul>
          </div>

          {/* Legal & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Horario & Ubicación
            </h4>
            <div className="text-sm text-[#808D83] space-y-1">
              <p>Lunes a Viernes: 09:00 - 20:00 hs</p>
              <p>Sábados: 09:00 - 15:00 hs</p>
              <p>Domingos: Cerrado por descanso</p>
            </div>
            
            <div className="pt-2 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#1F3024] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#1F3024] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#808D83] gap-4">
          <p>© 2026 Pizpireta Beauty. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado con <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" /> para el cuidado y belleza holística.
          </p>
        </div>

      </div>
    </footer>
  );
}
