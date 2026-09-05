import React from 'react';
import { ChevronRight, Sparkles, Star, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF9F6]">
      {/* Background Decorative Blur Spheres */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1F3024]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tagline / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6ECE7] text-[#1F3024] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Estética Botánica & Holística</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F3024] leading-[1.12] tracking-tight">
              Tu Santuario de <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#4E5C51]">Belleza Natural</span> y Bienestar Holístico
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-[#4E5C51] leading-relaxed max-w-2xl">
              En <strong className="text-[#1F3024] font-semibold">Pizpireta Beauty</strong> combinamos técnicas estéticas avanzadas con fitocosmética orgánica para realzar tu belleza auténtica, restaurar la vitalidad de tu piel y brindar momentos de profunda paz.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button 
                onClick={onOpenBooking}
                className="bg-[#D4AF37] hover:bg-[#B8952A] text-[#1F3024] font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer group"
              >
                <span>Agendar Cita Ahora</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="#servicios"
                className="border border-[#1F3024]/30 hover:border-[#1F3024] text-[#1F3024] font-semibold px-8 py-4 rounded-full text-center hover:bg-[#1F3024]/5 transition-all"
              >
                Explorar Servicios
              </a>
            </div>

            {/* Key Trust Stats */}
            <div className="pt-6 border-t border-[#1F3024]/10 grid grid-cols-3 gap-6">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1F3024]">+1,500</div>
                <div className="text-xs text-[#808D83] font-medium mt-0.5">Clientes Felices</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1F3024]">100%</div>
                <div className="text-xs text-[#808D83] font-medium mt-0.5">Cosmética Orgánica</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1F3024] flex items-center gap-1">
                  4.9 <Star className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37] inline" />
                </div>
                <div className="text-xs text-[#808D83] font-medium mt-0.5">Valoración en Google</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image with Frame Decoration */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-[#D4AF37]/40 pointer-events-none transform -rotate-2" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#E6ECE7] aspect-[4/5] group">
                <img 
                  src="/assets/hero_image.png" 
                  alt="Tratamiento de Estética Facial en Pizpireta Beauty" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3024]/60 via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-nav border border-white/40 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1F3024] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1F3024]">Experiencia 100% Personalizada</p>
                    <p className="text-[11px] text-[#4E5C51]">Diagnóstico de piel gratuito en tu primera visita</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
