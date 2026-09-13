import React from 'react';
import { Calendar, Clock, MapPin, Phone, MessageCircle, Sparkles, ExternalLink } from 'lucide-react';
import { siteContent, getWhatsAppLink } from '../data/siteContent';

export default function FinalCTA({ onOpenCalendly }) {
  const { businessInfo } = siteContent;

  return (
    <section id="contacto" className="py-24 bg-[#1F3024] text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4E5C51]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Location & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F6]/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visítanos en Nuestro Estudio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Encuentra Tu Espacio de Calma y Estética
            </h2>

            <p className="text-base text-[#E6ECE7] leading-relaxed">
              Te esperamos en nuestras instalaciones diseñadas para brindarte máxima comodidad, privacidad y atención personalizada bajo cita previa.
            </p>

            {/* Information Cards */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Ubicación del Estudio</h4>
                  <p className="text-xs text-[#E6ECE7] mt-0.5">{businessInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Horarios de Atención</h4>
                  <p className="text-xs text-[#E6ECE7] mt-0.5">{businessInfo.schedule}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Atención & Consultas Directas</h4>
                  <p className="text-xs text-[#E6ECE7] mt-0.5">{businessInfo.phoneDisplay}</p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={getWhatsAppLink(businessInfo.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Consultar por WhatsApp</span>
              </a>

              <button 
                onClick={onOpenCalendly}
                className="bg-[#D4AF37] hover:bg-[#B8952A] text-[#1F3024] font-semibold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Ver Agenda Online</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Interactive Map */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-[#D4AF37]/30 shadow-2xl space-y-4">
              
              {/* Map Header */}
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <span className="font-serif font-bold text-lg">Mapa de Ubicación</span>
                </div>
                <a 
                  href={businessInfo.mapsUrl || "https://maps.app.goo.gl/CbgBaA5i4NedWiHi6"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-white transition-colors"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Google Maps Iframe Container */}
              <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-inner border border-white/10 bg-[#FAF9F6]">
                <iframe 
                  title="Ubicación de Pizpireta Beauty"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3346.726615569562!2d-68.4878729235947!3d-33.07063197354117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDA0JzE0LjMiUyA2OMKwMjknMDcuMSJX!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-[1.05]"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
