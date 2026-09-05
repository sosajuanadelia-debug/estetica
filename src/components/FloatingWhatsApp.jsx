import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteContent, getWhatsAppLink } from '../data/siteContent';

export default function FloatingWhatsApp() {
  const { businessInfo } = siteContent;
  const whatsappUrl = getWhatsAppLink(businessInfo.whatsappMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Tooltip text */}
      <span className="hidden sm:inline-block bg-[#1F3024] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-[#D4AF37]/30">
        ¿Consultas? Habla con nosotros
      </span>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        {/* Glow & Pulse background effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-current stroke-none relative z-10" />
      </a>
    </div>
  );
}
