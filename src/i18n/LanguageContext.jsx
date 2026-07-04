import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext(null)

export const UI = {
  nav: {
    services: { es: 'Servicios', en: 'Services' },
    signature: { es: 'Rituales de firma', en: 'Signature Rituals' },
    reviews: { es: 'Opiniones', en: 'Reviews' },
    about: { es: 'Nosotros', en: 'About' },
    gallery: {
    eyebrow: { es: 'Galería', en: 'Gallery' },
    title: { es: 'Momentos en el lounge', en: 'Moments at the lounge' },
  },
  products: { es: 'Productos', en: 'Products' },
    visit: { es: 'Visítanos', en: 'Visit Us' },
    book: { es: 'Reservar', en: 'Book Now' },
  },
  hero: {
    eyebrow: { es: 'Head Spa & Facial Lounge · Tampa, FL', en: 'Head Spa & Facial Lounge · Tampa, FL' },
    title1: { es: 'Un ritual para tu piel.', en: 'A ritual for your skin.' },
    title2: { es: 'Una pausa para tu mente.', en: 'A pause for your mind.' },
    sub: {
      es: 'Head spa holístico, faciales de lujo y peelings profesionales. Gua sha de jade, cuencos tibetanos e hidroterapia Lingzhi en un solo lugar.',
      en: 'Holistic head spa, luxury facials, and professional peels. Jade gua sha, Tibetan singing bowls, and Lingzhi hydrotherapy under one roof.',
    },
    cta: { es: 'Reservar mi cita', en: 'Book my appointment' },
    cta2: { es: 'Ver servicios', en: 'View services' },
    rating: { es: 'en Booksy · 24 opiniones', en: 'on Booksy · 24 reviews' },
  },
  signature: {
    eyebrow: { es: 'Rituales de firma', en: 'Signature rituals' },
    title: { es: 'Las experiencias que nos definen', en: 'The experiences that define us' },
  },
  services: {
    eyebrow: { es: 'Menú de servicios', en: 'Service menu' },
    title: { es: 'Elige tu ritual', en: 'Choose your ritual' },
    from: { es: 'Desde', en: 'From' },
    book: { es: 'Reservar', en: 'Book' },
    more: { es: 'Leer más', en: 'Read more' },
    less: { es: 'Leer menos', en: 'Read less' },
    benefits: { es: 'Beneficios', en: 'Benefits' },
  },
  reviews: {
    eyebrow: { es: 'Opiniones reales', en: 'Real reviews' },
    title: { es: 'Lo que dicen nuestras clientas', en: 'What our clients say' },
    verified: { es: 'Clienta verificada en Booksy', en: 'Verified Booksy client' },
  },
  about: {
    eyebrow: { es: 'Sobre nosotros', en: 'About us' },
    title: { es: 'El arte del cuidado, en manos expertas', en: 'The art of care, in expert hands' },
    body: {
      es: 'En Miss Yay Facial Lounge, cada tratamiento es un ritual. Yay Ortega combina técnicas holísticas asiáticas — gua sha de jade, hierbas Lingzhi, cuencos tibetanos — con tecnología profesional y productos de grado médico como Circadia, Dermalume LED y BioRePeel. El resultado: piel visiblemente más sana y una experiencia que calma cuerpo y mente.',
      en: 'At Miss Yay Facial Lounge, every treatment is a ritual. Yay Ortega blends Asian holistic techniques — jade gua sha, Lingzhi herbs, Tibetan singing bowls — with professional technology and medical-grade products like Circadia, Dermalume LED, and BioRePeel. The result: visibly healthier skin and an experience that calms body and mind.',
    },
    brands: { es: 'Trabajamos con', en: 'We work with' },
    videoLabel: { es: 'Yay cuenta cómo empezó en el mundo de la belleza', en: 'Yay shares how she started in the beauty world' },
  },
  visit: {
    eyebrow: { es: 'Visítanos', en: 'Visit us' },
    title: { es: 'Te esperamos en Tampa', en: 'We are waiting for you in Tampa' },
    hours: { es: 'Horario', en: 'Hours' },
    hoursValue: { es: 'Lun – Sáb · 7:00 AM – 6:00 PM', en: 'Mon – Sat · 7:00 AM – 6:00 PM' },
    hoursNote: { es: 'Consulta disponibilidad exacta al reservar', en: 'Check exact availability when booking' },
    address: { es: 'Dirección', en: 'Address' },
    directions: { es: 'Cómo llegar', en: 'Get directions' },
    book: { es: 'Reservar en Booksy', en: 'Book on Booksy' },
  },
  gallery: {
    eyebrow: { es: 'Galería', en: 'Gallery' },
    title: { es: 'Momentos en el lounge', en: 'Moments at the lounge' },
  },
  products: {
    eyebrow: { es: 'La tienda de Yay', en: "Yay's shop" },
    title: { es: 'Productos recomendados', en: 'Recommended products' },
    sub: {
      es: 'Los favoritos que Yay usa y recomienda para continuar el cuidado en casa. Comprando desde su tienda apoyas directamente al lounge.',
      en: 'The favorites Yay uses and recommends to continue your care at home. Shopping from her store directly supports the lounge.',
    },
    view: { es: 'Ver en la tienda', en: 'View in shop' },
  },
  footer: {
    tagline: { es: 'Head Spa & Facial Lounge · Tampa, FL', en: 'Head Spa & Facial Lounge · Tampa, FL' },
    rights: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
    credit: { es: 'Sitio web por YY 3D Studios Art', en: 'Website by YY 3D Studios Art' },
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')
  const t = (obj) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.es ?? '' : obj)
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
