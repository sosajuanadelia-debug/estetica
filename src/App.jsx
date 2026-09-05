import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatementBar from './components/StatementBar';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsCalendlyOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1F3024] selection:bg-[#D4AF37]/30 relative">
      <Navbar onOpenBooking={handleOpenBooking} />
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <StatementBar />
        <Services />
        <Gallery />
        <FinalCTA onOpenCalendly={handleOpenBooking} />
      </main>
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <FloatingWhatsApp />

      {/* Modal interactivo de Calendly */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </div>
  );
}
