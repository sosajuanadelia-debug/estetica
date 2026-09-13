// Archivo de configuración centralizado para Pizpireta Beauty
// Modifica este archivo para cambiar imágenes, textos, servicios, teléfono y redes sociales.

export const siteContent = {
  businessInfo: {
    name: "Pizpireta Beauty",
    tagline: "Estética Botánica & Bienestar Holístico",
    subtitle: "Beauty & Spa",
    phoneDisplay: "+54 9 263 475-4016",
    whatsappNumber: "5492634754016", // Número en formato internacional sin símbolos (ej: 34600123456 o 5491112345678)
    whatsappMessage: "¡Hola Pizpireta Beauty! Me gustaría agendar una cita o solicitar más información sobre sus servicios.",
    calendlyUrl: "https://calendly.com/eneco-2409", // URL de tu cuenta de Calendly (ej: https://calendly.com/tu-usuario/cita)
    address: "Av. Principal de la Belleza 450, Centro de Bienestar, Piso 2",
    schedule: "Lunes a Viernes: 09:00 - 20:00 hs | Sábados: 09:00 - 15:00 hs",
    instagramUrl: "https://www.instagram.com/pizpiretasbeauty/",
    ratingScore: "4.9",
  },

  hero: {
    eyebrow: "Estética Botánica & Holística",
    title: "Tu Santuario de Belleza Natural y Bienestar Holístico",
    description: "En Pizpireta Beauty combinamos técnicas estéticas avanzadas con fitocosmética orgánica para realzar tu belleza auténtica, restaurar la vitalidad de tu piel y brindar momentos de profunda paz.",
    image: "/assets/hero_image.png",
    floatingBadge: {
      title: "Experiencia 100% Personalizada",
      subtitle: "Diagnóstico de piel gratuito en tu primera visita"
    },
    stats: [
      { value: "+1,500", label: "Clientes Felices" },
      { value: "100%", label: "Cosmética Orgánica" },
      { value: "4.9 ★", label: "Valoración en Google" }
    ]
  },

  services: [
    {
      id: "manicura-general",
      title: "Manicura General & Cuidado Natural",
      image: "/assets/gallery_4.png",
      duration: "45 min",
      description: "Cuidado esencial: corte anatómico, retirada de cutículas, limado profesional y brillo nutritivo.",
      fullDetails: "Servicio completo enfocado en la salud y estética de tus manos. Incluye ablandamiento botánico de cutículas, repujado y corte higiénico, limado y modelado de uñas según tu preferencia, exfoliación suave de arroz y lavanda, y finalización con esmaltado nutritivo o brillo natural fortalecedor.",
      benefits: [
        "Mantenimiento rápido e higiénico sin agredir la uña",
        "Estimula el crecimiento sano y uniforme",
        "Nutrición profunda de cutículas con aceites botánicos"
      ]
    },
    {
      id: "depilacion-definitiva-tradicional",
      title: "Depilación Definitiva & Tradicional",
      image: "/assets/gallery_2.png",
      duration: "30 - 60 min",
      description: "Tratamiento de alta precisión con cera vegetal hipoalergénica y tecnología de depilación definitiva.",
      fullDetails: "Ofrecemos dos modalidades según tus necesidades: Depilación Láser Definitiva con sistema de enfriamiento al tacto para una sesión indolora y progresiva, o Depilación Tradicional con cera tibia vegetal a base de miel y manzanilla, ideal para pieles sensibles y zonas delicadas.",
      benefits: [
        "Eliminación eficaz del vello respetando la sensibilidad cutánea",
        "Previene la irritación y deja una textura suave y sedosa",
        "Resultados duraderos y debilitamiento progresivo del folículo"
      ]
    },
    {
      id: "tratamientos-faciales",
      title: "Tratamientos Faciales Orgánicos",
      image: "/assets/gallery_1.png",
      duration: "60 min",
      description: "Higiene facial profunda: peeling enzimático, extracción impura e hidratación botánica intensiva.",
      fullDetails: "Experiencia renovadora personalizada según tu tipo de piel. Comprende limpieza inicial con emulsión de caléndula, peeling enzimático de fruta tropical, vapor de ozono para dilatar poros, extracción cuidadosa, mascarilla descongestiva de arcilla o ácido hialurónico y masaje facial drenante.",
      benefits: [
        "Restaura la luminosidad y frescura natural del rostro",
        "Purifica poros y aporta nutrientes botánicos esenciales",
        "Desintoxica y equilibra el ph de la piel sensible"
      ]
    },
    {
      id: "aparatologia",
      title: "Aparatología Estética Avanzada",
      image: "/assets/hero_image.png",
      duration: "75 min",
      description: "Tecnología no invasiva: radiofrecuencia, dermapen y fototerapia LED para rejuvenecimiento cutáneo.",
      fullDetails: "Combinación de tecnología estética de última generación para potenciar los resultados cutáneos. Aplicamos radiofrecuencia resistiva para tensar la dermis, microagujamiento Dermapen con sérum de péptidos concentrados y luz LED fotónica para atenuar manchas y estimular la regeneración celular.",
      benefits: [
        "Estimula la producción natural de colágeno y elastina",
        "Reafirma los tejidos y atenúa las líneas de expresión",
        "Efecto lifting no invasivo sin tiempo de recuperación"
      ]
    },
    {
      id: "podologia",
      title: "Podología & Pedicura Clínica",
      image: "/assets/gallery_3.png",
      duration: "50 min",
      description: "Cuidado profesional e integral para la salud, higiene y belleza de tus pies.",
      fullDetails: "Tratamiento clínico especializado para la salud y prevención de molestias en tus pies. Ofrecemos higiene profesional, alivio del dolor y eliminación de durezas mediante protocolos higiénicos y seguros.",
      benefits: [
        "Corte y limpieza de uñas: Higiene y cuidado profesional para uñas sanas.",
        "Uñas encarnadas: Tratamiento seguro y efectivo para aliviar el dolor.",
        "Helomas e hiperqueratosis: Eliminación de durezas y callosidades para tu bienestar.",
        "Uñas engrosadas: Tratamiento especializado para mejorar la apariencia y salud de tus uñas."
      ]
    }
  ],

  specialPromo: {
    tag: "Edición Limitada",
    title: "Ritual Botánico de Temporada",
    description: "Sumérgete en una sesión exclusiva de 90 minutos con infusión de flores orgánicas, mascarilla iluminadora de caléndula y masaje geotermal.",
    buttonText: "Consultar Disponibilidad"
  },

  gallery: [
    {
      img: "/assets/gallery_1.png",
      images: [
        "/assets/gallery_1.png",
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
        "https://res.cloudinary.com/dtxnm8mw/image/upload/v1789260901/7408004b-611b-457f-bd30-9b3b4ce0ca5f.jpg",
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Limpieza profunda e hidratación orgánica",
      category: "Cuidado Facial",
      desc: ""
    },
    {
      img: "/assets/gallery_2.png",
      images: [
        "/assets/gallery_2.png",
        "https://res.cloudinary.com/dtxnm8mw/image/upload/v1789260716/Aceite-girasol-depilacion-con-cera.png",
        "https://res.cloudinary.com/dtxnm8mw/image/upload/v1789260716/aDEPCERA_1753827768.jpg",
        "https://res.cloudinary.com/dtxnm8mw/image/upload/v1789260717/depilacion-laser-media-pierna1.jpg"
      ],
      title: "Laser & Cera",
      category: "Depilacion",
      desc: ""
    },
    {
      img: "/assets/gallery_3.png",
      images: [
        "https://res.cloudinary.com/dtxnm8mw/image/upload/v1789261370/copy_of_whatsapp_image_2026-09-02_at_12922_pm.webp",
        "https://res.cloudinary.com/dtxnm8mw/image/upload/v1789261044/client-lies-salon-cosmetology-table-with-white-mask-her-face_343596-4301.jpg",
        "https://res.cloudinary.com/dtxnm8mw/image/upload/v1789261043/young-woman-lying-cosmetologist-s-table-rejuvenation-procedure-cosmetologist-take-care-about-neck-face-skin-youthfull-wellness-hardware-face-cleaning-procedure_343596-7874.jpg",
        "https://res.cloudinary.com/dtxnm8mw/image/upload/v1789261043/tratamientofacial.jpg"
      ],
      title: "Cabina de Bienestar",
      category: "Ambiente Spa",
      desc: ""
    },
    {
      img: "/assets/gallery_4.png",
      images: [
        "/assets/gallery_4.png",
        "https://res.cloudinary.com/dtxnm8mw/image/upload/v1789259320/2771c474-2df4-41ac-94ea-b423ec5ca371_296862.webp",
        "https://res.cloudinary.com/dtxnm8mw/image/upload/v1789259316/Captura_de_pantalla_2026-09-12_211953_296862.webp",
        "https://res.cloudinary.com/dtxnm8mw/image/upload/v1789259312/Captura_de_pantalla_2026-09-12_212104_296862.webp"
      ],
      title: "Pedicura Botánica Spa",
      category: "Manos & Pies",
      desc: ""
    }
  ]
};

// Función auxiliar para construir el enlace directo a WhatsApp
export const getWhatsAppLink = (customMessage) => {
  const number = siteContent.businessInfo.whatsappNumber;
  const message = customMessage || siteContent.businessInfo.whatsappMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
