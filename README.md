# Miss Yay Facial Lounge — Sitio web

Sitio de una página (one-page) para **Miss Yay Facial Lounge** (Tampa, FL).
Head spa holístico, faciales de lujo y peelings — bilingüe ES/EN.

**Stack:** React 18 + Vite · CSS propio con design tokens (sin Tailwind)
**Datos:** extraídos del perfil de Booksy (jul 2026) → `src/data/services.js`

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (http://localhost:5173)
npm run build   # build de producción → dist/
npm run preview # previsualizar el build
```

## Estructura

```
src/
├── components/       # Navbar, Hero, SignatureSection, ServicesSection,
│                     # ServiceCard, Reviews, About, Location, Footer
├── data/services.js  # TODOS los datos: servicios, precios, fotos, reseñas
├── i18n/LanguageContext.jsx  # toggle ES/EN (ES por defecto)
└── styles.css        # design tokens + estilos
```

## Diseño

- **Paleta:** porcelana `#FAF7F1` · jade profundo `#16302A` · jade claro `#D8E5DE` · oro antiguo `#B08D57`
- **Tipografía:** Marcellus (títulos) + Mulish (cuerpo), vía Google Fonts
- **Firma visual:** arcos de spa en fotos + divisor "cascada" (referencia a la hidroterapia Lingzhi)

## ⚠️ Pendientes antes de producción

1. **Imágenes:** hoy apuntan al CDN de Booksy (hotlinking). Descargarlas a
   `public/images/` y actualizar rutas en `src/data/services.js`.
   Pedir originales en alta resolución a la clienta.
2. **Fotos faltantes (3 servicios):** Crown Revival Ritual, Acne Clear
   Luxury Ritual y Back Facial no tienen fotos en Booksy.
3. **Add-ons:** los servicios tienen add-ons en Booksy que no son visibles
   públicamente — pedir lista y precios a la clienta.
4. **Horario:** confirmar horario semanal completo (placeholder actual:
   Lun–Sáb 7 AM–6 PM).
5. **Booking:** los botones enlazan al perfil de Booksy
   (`https://missyay.booksy.com/a/`). Si la clienta pasa el código del
   widget embebido de Booksy, se puede integrar en un modal.
6. **Dominio + deploy:** Vercel recomendado (mismo flujo que China Nails:
   repo GitHub → Vercel → dominio custom vía Namecheap).
7. **Traducciones:** las descripciones en español fueron traducidas del
   inglés de Booksy — pedir aprobación a la clienta.
