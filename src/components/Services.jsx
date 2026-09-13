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
        {/* SECCIÓN DE SERVICIOS - VISIBLE EN TODOS LOS DISPOSITIVOS */}
        {/* ============================================================ */}
        <div className="space-y-12 md:space-y-16">
          
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
                          {service.benefits.map((benefit, idx) => {
                            const hasColon = benefit.includes(': ');
                            const title = hasColon ? benefit.split(': ')[0] : '';
                            const desc = hasColon ? benefit.split(': ').slice(1).join(': ') : benefit;

                            return (
                              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4E5C51]">
                                <Check className="w-4 h-4 text-[#1F3024] shrink-0 mt-0.5 stroke-[2.5]" />
                                <span>
                                  {hasColon ? (
                                    <>
                                      <strong className="text-[#1F3024] font-semibold">{title}:</strong> {desc}
                                    </>
                                  ) : (
                                    benefit
                                  )}
                                </span>
                              </div>
                            );
                          })}
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
        <div className="fixed inset-0 z-50 bg-[#1F3024]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          
          {/* Backdrop Click Handler */}
          <div 
            className="fixed inset-0" 
            onClick={() => setSelectedService(null)} 
          />

          {/* Modal Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-[#D4AF37]/30 relative z-10 my-auto transform animate-in zoom-in-95 duration-200">
            
            {/* Botón Fijo de Cerrar (Siempre visible en la esquina superior derecha) */}
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#1F3024] flex items-center justify-center shadow-lg transition-all cursor-pointer border border-[#1F3024]/10 active:scale-95"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Header Image with Gradient */}
            <div className="relative h-44 sm:h-64 shrink-0 overflow-hidden bg-[#E6ECE7]">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3024]/85 via-[#1F3024]/30 to-transparent" />
              
              {/* Title & Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-14 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1.5">
                {selectedService.duration && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#D4AF37] text-[#1F3024] text-[10px] sm:text-xs font-bold shadow-sm">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>Duración: {selectedService.duration}</span>
                  </span>
                )}
                <h3 className="font-serif text-xl sm:text-3xl font-bold text-white leading-tight">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-4 sm:p-8 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
              {/* Resumen */}
              <div className="space-y-1.5">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Descripción General
                </h4>
                <p className="text-xs sm:text-base text-[#4E5C51] leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Protocolo y Detalles de Atención */}
              {selectedService.fullDetails && (
                <div className="space-y-1.5 pt-2 border-t border-[#1F3024]/10">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1F3024]">
                    Protocolo & Detalles del Tratamiento
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4E5C51] leading-relaxed bg-[#FAF9F6] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#1F3024]/5">
                    {selectedService.fullDetails}
                  </p>
                </div>
              )}

              {/* Beneficios Clave */}
              {selectedService.benefits && selectedService.benefits.length > 0 && (
                <div className="space-y-2.5 pt-2 border-t border-[#1F3024]/10">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1F3024]">
                    Beneficios Principales
                  </h4>
                  <div className="space-y-1.5 sm:space-y-2">
                    {selectedService.benefits.map((benefit, idx) => {
                      const hasColon = benefit.includes(': ');
                      const title = hasColon ? benefit.split(': ')[0] : '';
                      const desc = hasColon ? benefit.split(': ').slice(1).join(': ') : benefit;

                      return (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4E5C51]">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0 mt-0.5 stroke-[3]" />
                          <span>
                            {hasColon ? (
                              <>
                                <strong className="text-[#1F3024] font-semibold">{title}:</strong> {desc}
                              </>
                            ) : (
                              benefit
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#FAF9F6] border-t border-[#1F3024]/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#1F3024]/20 hover:border-[#1F3024] text-[#1F3024] text-xs font-semibold transition-colors cursor-pointer active:bg-gray-100"
              >
                Cerrar
              </button>

              <a
                href={getWhatsAppLink(`¡Hola! Me gustaría agendar o solicitar más información sobre el servicio: ${selectedService.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#1F3024] hover:bg-[#1E2B21] text-[#D4AF37] text-xs font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
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
