import React, { useState } from 'react';
import { Eye, Sparkles, X, ZoomIn } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Gallery() {
  const { gallery, businessInfo } = siteContent;
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="galeria" className="py-24 bg-[#E6ECE7]/40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#1F3024] text-xs font-semibold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Galería de Resultados</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3024]">
              Nuestra Esencia en Cada Detalle
            </h2>
            <p className="text-base text-[#4E5C51]">
              Explora los resultados de nuestros tratamientos y la armonía de nuestras instalaciones. Haz clic en cualquier imagen para ampliarla.
            </p>
          </div>

          <div className="hidden md:block">
            <a 
              href={businessInfo.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1F3024] font-semibold text-sm shadow-sm hover:shadow-md transition-all border border-[#1F3024]/10"
            >
              <InstagramIcon className="w-4 h-4 text-[#D4AF37]" />
              <span>Ver más en Instagram</span>
            </a>
          </div>
        </div>

        {/* 4 Column Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <div 
              key={index}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-3xl overflow-hidden shadow-md bg-white aspect-[3/4] cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Image */}
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3024]/90 via-[#1F3024]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full glass-nav text-[#1F3024] shadow-xs">
                  {item.category}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 transform group-hover:-translate-y-1 transition-transform">
                <h3 className="font-serif text-xl font-bold text-[#FAF9F6]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E6ECE7] line-clamp-2">
                  {item.desc}
                </p>
              </div>

              {/* Hover Eye / Zoom Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#D4AF37] text-[#1F3024] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl transform scale-75 group-hover:scale-100">
                <ZoomIn className="w-6 h-6 stroke-[2.5]" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ============================================================ */}
      {/* LIGHTBOX MODAL - VISUALIZACIÓN EN PANTALLA COMPLETA */}
      {/* ============================================================ */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-[#1E2B21]/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          
          {/* Backdrop Click Handler */}
          <div 
            className="fixed inset-0" 
            onClick={() => setActiveImage(null)} 
          />

          {/* Close Button Top Right */}
          <button 
            onClick={() => setActiveImage(null)}
            className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            aria-label="Cerrar vista previa"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox Container */}
          <div className="relative z-10 max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-200">
            
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/40 max-h-[70vh]">
              <img 
                src={activeImage.img} 
                alt={activeImage.title} 
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Image Caption Details */}
            <div className="mt-6 text-center space-y-2 max-w-xl px-4">
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37] text-[#1F3024]">
                {activeImage.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {activeImage.title}
              </h3>
              <p className="text-sm text-[#E6ECE7] leading-relaxed">
                {activeImage.desc}
              </p>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}

function InstagramIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
