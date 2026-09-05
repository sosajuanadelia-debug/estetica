import React from 'react';
import { PopupModal, InlineWidget } from 'react-calendly';
import { X, Calendar } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function CalendlyModal({ isOpen, onClose }) {
  const calendlyUrl = siteContent.businessInfo.calendlyUrl || "https://calendly.com/acme/30min";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F3024]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#D4AF37]/30 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#1F3024] text-white px-6 py-4 flex items-center justify-between border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Reserva tu Cita en Línea
              </h3>
              <p className="text-xs text-[#E6ECE7]">
                Selecciona la fecha y hora que mejor se adapte a ti
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Calendly Inline Widget */}
        <div className="flex-1 overflow-y-auto min-h-[600px] bg-[#FAF9F6]">
          <InlineWidget 
            url={calendlyUrl} 
            styles={{
              height: '650px',
              width: '100%'
            }}
            pageSettings={{
              backgroundColor: 'faf9f6',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: 'd4af37',
              textColor: '1f3024'
            }}
          />
        </div>

      </div>
    </div>
  );
}
