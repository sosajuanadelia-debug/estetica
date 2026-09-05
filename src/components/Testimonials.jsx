import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section id="testimonios" className="py-24 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6ECE7] text-[#1F3024] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Experiencias de Nuestras Clientas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3024]">
            Historias de Bienestar y Cuidado
          </h2>
          <p className="text-base text-[#4E5C51]">
            La confianza y la satisfacción de quienes nos visitan son nuestra mayor garantía.
          </p>
        </div>

        {/* Testimonials 3 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl border border-[#1F3024]/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#E6ECE7] group-hover:text-[#D4AF37]/30 transition-colors" />

              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.stars || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-[#4E5C51] leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-[#1F3024]/5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#1F3024]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#808D83]">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
