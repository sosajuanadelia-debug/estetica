import React from 'react';
import { Sparkles, Leaf, Instagram, Award } from 'lucide-react';

export default function StatementBar() {
  return (
    <div className="bg-[#1F3024] text-[#FAF9F6] py-5 border-y border-[#D4AF37]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-6 text-sm font-medium">
        
        <div className="flex items-center gap-3">
          <Leaf className="w-4 h-4 text-[#D4AF37]" />
          <span>Formulación 100% Botánica & Cruelty Free</span>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Diagnóstico Facial y Corporal Personalizado</span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Award className="w-4 h-4 text-[#D4AF37]" />
          <span>Especialistas Certificadas en Alta Estética</span>
        </div>

        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors"
        >
          <Instagram className="w-4 h-4" />
          <span className="font-semibold">@pizpiretabeauty</span>
        </a>

      </div>
    </div>
  );
}
