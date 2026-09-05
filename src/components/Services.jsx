import React, { useState } from 'react';
import { Sparkles, Check, Info, Calendar, X, Clock, MessageCircle } from 'lucide-react';
import { siteContent, getWhatsAppLink } from '../data/siteContent';

export default function Services() {
  const { services } = siteContent;
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="servicios" className="py-24 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ============================================================ */}
        {/* SECCIÓN DE SERVICIOS - SOLO VISIBLE EN COMPUTADORA (DESKTOP) */}
        {/* ============================================================ */}
        <div className="hidden md:block space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6ECE7] text-[#1F3024] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Nuestros Servicios Exclusivos</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F3024]">
              Servicios Especializados de Belleza & Estética
            </h2>
            <p className="text-base text-[#4E5C51] leading-relaxed">
              Tratamientos diseñados para cuidar tu cuerpo, renovar tu piel y brindarte una experiencia de máxima calidad.
            </p>
          </div>

          {/* 5 Service Cards Grid (Desktop Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const whatsappBookingMsg = `¡Hola! Quisiera reservar una cita para el servicio: ${service.title}`;

              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#1F3024]/10 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* 1. FOTO SUPERIOR */}
                    <div className="relative h-60 overflow-hidden bg-[#E6ECE7]">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>

                    {/* 2. CONTENIDO PRINCIPAL */}
                    <div className="p-6 sm:p-8 space-y-4">
                      {/* Título */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F3024] leading-snug group-hover:text-[#D4AF37] transition-colors">
                        {service.title}
                      </h3>

                      {/* Descripción breve */}
                      <p className="text-sm text-[#4E5C51] leading-relaxed">
                        {service.description}
                      </p>

                      {/* Puntos de Beneficios con Checkmark (✓) */}
                      {service.benefits && service.benefits.length > 0 && (
                        <div className="space-y-2 pt-2">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4E5C51]">
                              <Check className="w-4 h-4 text-[#1F3024] shrink-0 mt-0.5 stroke-[2.5]" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3. PIE DE TARJETA CON DOS BOTONES (Detalles y Reservar) */}
                  <div className="p-6 sm:p-8 pt-4 border-t border-[#1F3024]/10 mt-auto">
                    <div className="grid grid-cols-2 gap-3">
                      {/* Botón Detalles - Abre Modal de Ampliación */}
                      <button
                        onClick={() => setSelectedService(service)}
                        className="border border-[#1F3024]/30 hover:border-[#1F3024] text-[#1F3024] font-semibold py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-xs transition-all hover:bg-[#1F3024]/5 cursor-pointer text-center"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Detalles</span>
                      </button>

                      {/* Botón Reservar */}
                      <a
                        href={getWhatsAppLink(whatsappBookingMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1F3024] hover:bg-[#1E2B21] text-white font-semibold py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-xs shadow-sm transition-all cursor-pointer text-center"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Reservar</span>
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* MODAL DE AMPLIACIÓN DE DETALLES DEL SERVICIO */}
      {/* ============================================================ */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-[#1F3024]/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          
          {/* Backdrop Click Handler */}
          <div 
            className="fixed inset-0" 
            onClick={() => setSelectedService(null)} 
          />

          {/* Modal Card */}
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#D4AF37]/30 relative z-10 my-8 transform animate-in zoom-in-95 duration-200">
            
            {/* Header Image with Gradient */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-[#E6ECE7]">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3024]/80 via-transparent to-transparent opacity-80" />
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1F3024] flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                {selectedService.duration && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37] text-[#1F3024] text-xs font-bold shadow-sm">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Duración: {selectedService.duration}</span>
                  </span>
                )}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Resumen */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Descripción General
                </h4>
                <p className="text-sm sm:text-base text-[#4E5C51] leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Protocolo y Detalles de Atención */}
              {selectedService.fullDetails && (
                <div className="space-y-2 pt-2 border-t border-[#1F3024]/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F3024]">
                    Protocolo & Detalles del Tratamiento
                  </h4>
                  <p className="text-sm text-[#4E5C51] leading-relaxed bg-[#FAF9F6] p-4 rounded-2xl border border-[#1F3024]/5">
                    {selectedService.fullDetails}
                  </p>
                </div>
              )}

              {/* Beneficios Clave */}
              {selectedService.benefits && selectedService.benefits.length > 0 && (
                <div className="space-y-3 pt-2 border-t border-[#1F3024]/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F3024]">
                    Beneficios Principales
                  </h4>
                  <div className="space-y-2">
                    {selectedService.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-[#4E5C51]">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 stroke-[3]" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 sm:p-8 pt-4 bg-[#FAF9F6] border-t border-[#1F3024]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#1F3024]/20 hover:border-[#1F3024] text-[#1F3024] text-xs font-semibold transition-colors cursor-pointer"
              >
                Cerrar
              </button>

              <a
                href={getWhatsAppLink(`¡Hola! Me gustaría agendar o solicitar más información sobre el servicio: ${selectedService.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#1F3024] hover:bg-[#1E2B21] text-[#D4AF37] text-xs font-semibold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}
