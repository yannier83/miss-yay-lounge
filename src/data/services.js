// ============================================================
// Datos de servicios — extraídos del perfil de Booksy (jul 2026)
// NOTA: las fotos apuntan al CDN de Booksy. Antes de producción,
// descargarlas a /public/images/ y actualizar las rutas.
// ============================================================

export const BOOKSY_URL = 'https://missyay.booksy.com/a/'

const CDN = 'https://d2zdpiztbgorvt.cloudfront.net/region1/us/1568975/'
const sp = (ids) => ids.map((id) => `${CDN}service_photos/${id}.jpeg`)

export const BUSINESS = {
  name: 'Miss Yay Facial Lounge',
  esthetician: 'Yay Ortega',
  address: '7620 Gunn Hwy, Suite #120, Tampa, FL 33625',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=7620+Gunn+Hwy+Suite+120+Tampa+FL+33625',
  rating: 5.0,
  reviewCount: 24,
  logo: `${CDN}logo/86f1fcc1a85d44198adca18cf20679-miss-yay-logo-f8cbc163a6fe41778fbc5091d56446-booksy.jpeg`,
  gallery: [
    `${CDN}inspiration/60c4942271d7473c8c5b59caa43576-miss-yay-inspiration-3da4c828ae1f4684b58e0bc3ce600c-booksy.jpeg`,
    `${CDN}inspiration/2fac73d702574f94a446a834e3b4e4-miss-yay-inspiration-0f1b180ba990448085fa859115fd15-booksy.jpeg`,
    `${CDN}inspiration/824aa09c4d154a248940f96e8ab58f-miss-yay-inspiration-efdb042665464f6c97dff117b05b20-booksy.jpeg`,
    `${CDN}inspiration/183508d55956461cbe3ad555bcde08-miss-yay-inspiration-a5197895a3104f25b32bb818ec07e1-booksy.jpeg`,
    `${CDN}inspiration/010269ff2dbb4759bf6047da916ed3-miss-yay-inspiration-3cad83fb90e744c0958f9bb4229e24-booksy.jpeg`,
    `${CDN}inspiration/b61c922c6d2448968ecc86c693c268-miss-yay-inspiration-a76f9f5c560743528d020738773200-booksy.jpeg`,
  ],
}

export const CATEGORIES = [
  { id: 'headspa', label: { es: 'Head Spa', en: 'Head Spa' } },
  { id: 'facial', label: { es: 'Faciales', en: 'Facials' } },
  { id: 'peel', label: { es: 'Peelings', en: 'Chemical Peels' } },
  { id: 'brows', label: { es: 'Cejas & Pies', en: 'Brows & Feet' } },
]

const STEAM_NOTE = {
  es: 'Finaliza con un secado ligero a vapor. No incluye blower ni peinado.',
  en: 'The session finishes with a light steam dry. This is not a blow-dry and does not include styling.',
}

export const SERVICES = [
  // ------------------------- HEAD SPA -------------------------
  {
    id: 'cleanse-scalp',
    category: 'headspa',
    name: 'Cleanse Scalp Treatment',
    price: 98,
    duration: { es: '50 min', en: '50 min' },
    desc: {
      en: 'Embark on a scalp revitalization journey: deep scalp cleansing, Lingzhi herbal waterfall hydrotherapy, gentle scalp gua sha, head relaxation, shoulder and neck tension release, and nourishing scalp steam care. Concludes with a gentle blow-dry, leaving your scalp refreshed and your mind balanced.',
      es: 'Un viaje de revitalización del cuero cabelludo: limpieza profunda, hidroterapia de cascada con hierbas Lingzhi, gua sha suave del cuero cabelludo, relajación de cabeza, liberación de tensión en hombros y cuello, y vapor nutritivo. Concluye con un secado suave, dejando tu cuero cabelludo renovado y tu mente en equilibrio.',
    },
    photos: sp(['ef82a875d9b8417f9f4e88f3a8e330df','53b02a7104eb43c084f1efad5746c50a','881231cddc8046138ee142b91c3d461e','121d68ee4ce640169b15ef3d46828f3e','a283094235b24757b5535099699332df','19fe632d9e9e42eb82eddc7e951bfa94','78ae00ee97d44028b2f81106c83efdd2','f245dd231411432b9ead86b92a33174c','d78f98e84a92463786b36cfdcf5ab0c4']),
  },
  {
    id: 'meditation-healing',
    category: 'headspa',
    name: 'Meditation Healing',
    price: 148,
    duration: { es: '1 h 20 min', en: '1 h 20 min' },
    desc: {
      en: 'Holistic wellness enhanced with Tibetan singing bowl therapy and agarwood inhalation. Includes deep scalp cleansing, Lingzhi herbal waterfall hydrotherapy, gentle scalp gua sha, head relaxation, shoulder and neck tension release, nourishing scalp steam care, and a refreshing mini facial. Concludes with a gentle blow-dry.',
      es: 'Bienestar holístico potenciado con terapia de cuencos tibetanos e inhalación de agarwood. Incluye limpieza profunda del cuero cabelludo, hidroterapia de cascada con hierbas Lingzhi, gua sha suave, relajación de cabeza, liberación de tensión en hombros y cuello, vapor nutritivo y un mini facial refrescante. Concluye con un secado suave.',
    },
    photos: sp(['284c2653c3cc41828520a30d38f4e160','a2840310b0bb4ea28e59c0aab7e33460','ebac4d413ecf4966851a95224adcb5a5','28cad78bc5994b1d971988896c086824','94aa6cb8170947e596daac3823ac1237','449e4524c99d4bd9b9f624bf54c1a8f6']),
  },
  {
    id: 'dandruff-removal',
    category: 'headspa',
    name: 'Dandruff Removal',
    price: 148,
    duration: { es: '1 h 10 min', en: '1 h 10 min' },
    desc: {
      en: 'Deeply cleanses and soothes the scalp while removing dandruff, excess oil, and buildup. A gentle yet effective cleansing process combined with a relaxing scalp massage that promotes circulation and relieves itchiness. Purifying products restore balance and calm irritation. Ideal for oily, itchy, or flaky scalps.',
      es: 'Limpia y calma profundamente el cuero cabelludo eliminando caspa, exceso de grasa y acumulación. Un proceso de limpieza suave pero efectivo, combinado con un masaje relajante que estimula la circulación y alivia la picazón. Productos purificantes restauran el equilibrio y calman la irritación. Ideal para cueros cabelludos grasos, con picazón o descamación.',
    },
    note: STEAM_NOTE,
    photos: sp(['198fe09fc2ec4351b740a553811685ff','544826feb3824c64a3623a50719e8775']),
  },
  {
    id: 'anti-hair-loss',
    category: 'headspa',
    name: 'Anti-Hair Loss',
    price: 148,
    duration: { es: '30 min', en: '30 min' },
    desc: {
      en: 'Begins with a cleansing oil scalp massage, followed by a targeted anti-hair loss wash that reduces shedding and strengthens hair. Continues with an oxygen infusion treatment to nourish the scalp, improve circulation, and support healthier, stronger hair growth from the root.',
      es: 'Comienza con un masaje de aceite limpiador, seguido de un lavado anticaída que reduce el desprendimiento y fortalece el cabello. Continúa con una infusión de oxígeno que nutre el cuero cabelludo, mejora la circulación y estimula un crecimiento más fuerte y saludable desde la raíz.',
    },
    note: STEAM_NOTE,
    photos: sp(['4551ff8e23ef4f6495a32f7247c7e9bc','4bd9f83732394d52aa18754ff787e705','bfb651cd73d7415b8ca07d38ee256cb5']),
  },
  {
    id: 'luxury-scalp-renewal',
    category: 'headspa',
    name: 'Luxury Scalp Renewal',
    price: 198,
    duration: { es: '1 h 45 min', en: '1 h 45 min' },
    desc: {
      en: 'A luxury head spa experience designed to cleanse, nourish, and relax. Includes scalp analysis, customized essential oil treatment, shampoo cleanse, hydrating mask, and a relaxing scalp massage. Also features a mini facial with hyaluronic acid mask and a hand treatment for a complete wellness experience.',
      es: 'Una experiencia de head spa de lujo para limpiar, nutrir y relajar. Incluye análisis del cuero cabelludo, tratamiento personalizado con aceites esenciales, lavado, mascarilla hidratante y masaje relajante. Además, un mini facial con mascarilla de ácido hialurónico y tratamiento de manos para una experiencia completa de bienestar.',
    },
    note: STEAM_NOTE,
    photos: sp(['8e2a196dcb3342549b084734f376a556','f4be23bc7bb84680802639b669b18791','862cd781ee6040f3a56af23645699bd6','a6cd7f8c80ac417cb1c7b60ea209f50f','5fe6883fb18f42788e0d8c7524c3f2ba']),
  },
  {
    id: 'crown-revival',
    category: 'headspa',
    signature: true,
    name: 'Crown Revival Ritual',
    emoji: '👑',
    price: 250,
    duration: { es: '2 h 15 min', en: '2 h 15 min' },
    desc: {
      en: 'An advanced scalp treatment combining state-of-the-art technology with a relaxing Head Spa ritual: trichoscope scalp analysis, high-frequency therapy, radiofrequency, stimulating massage brushes, professional scalp serum infusion, pre-wash oil, jade tools massage, deep scalp exfoliation, chemical scalp peel, nourishing hair mask, a soothing water cascade, and a relaxing massage of the scalp, neck, and shoulders.',
      es: 'Tratamiento avanzado que combina tecnología de punta con un ritual de Head Spa relajante: análisis con tricoscopio, alta frecuencia, radiofrecuencia, cepillos de masaje estimulantes, infusión de sérum profesional, aceite pre-lavado, masaje con herramientas de jade, exfoliación profunda, peeling químico del cuero cabelludo, mascarilla nutritiva, cascada de agua relajante y masaje de cuero cabelludo, cuello y hombros.',
    },
    photos: [], // pedir fotos a la clienta
  },
  {
    id: 'extra-long-hair',
    category: 'headspa',
    addon: true,
    name: 'Extra: Hair Past Waist Length',
    nameEs: 'Extra: cabello más abajo de la cintura',
    price: 20,
    duration: { es: '—', en: '—' },
    desc: {
      en: 'Extra fee for extended time and product usage. Thank you for understanding!',
      es: 'Cargo adicional por tiempo extendido y mayor uso de producto. ¡Gracias por tu comprensión!',
    },
    photos: sp(['1efd4ae699244bcba1642ba00716344f']),
  },
  // ------------------------- FACIALES -------------------------
  {
    id: 'basic-relaxing-facial',
    category: 'facial',
    name: 'Basic Relaxing Facial',
    price: 99,
    duration: { es: '1 h', en: '1 h' },
    desc: {
      en: 'Includes basic cleansing, mild blackhead and acne removal, serum infusion, and a soothing mask to refresh the skin.',
      es: 'Incluye limpieza básica, extracción suave de puntos negros y acné, infusión de sérum y una mascarilla calmante para refrescar la piel.',
    },
    photos: sp(['aa00a9b3a568470694fe19e9b3b0e2bf','87a3a702bb4e4c8380dbefe4101b89e2']),
  },
  {
    id: 'jade-facial-yoga',
    category: 'facial',
    name: 'Energy Jade Stone Facial Yoga',
    price: 148,
    duration: { es: '1 h 10 min', en: '1 h 10 min' },
    desc: {
      en: 'Basic cleansing plus a jade facial gua sha treatment inspired by traditional jade stone techniques. Gentle, flowing movements relax facial muscles and relieve tension. The smooth gliding of jade promotes circulation and enhances skin vitality, leaving the complexion clearer and more radiant.',
      es: 'Limpieza básica más un tratamiento de gua sha facial con jade inspirado en técnicas tradicionales. Movimientos suaves y fluidos relajan los músculos faciales y alivian la tensión. El deslizamiento del jade estimula la circulación y la vitalidad de la piel, dejando el rostro más claro y radiante.',
    },
    photos: sp(['83409f6bc5384625b3ddad9f25035156','4863d25a13254fccb06ea00d4a33b830','9869115a47c841458efe5f2664c85b2a']),
  },
  {
    id: 'silver-eclipse',
    category: 'facial',
    signature: true,
    name: 'Silver Eclipse Facial',
    emoji: '🌙',
    price: 185,
    duration: { es: '1 h 30 min', en: '1 h 30 min' },
    desc: {
      en: 'Our signature facial: triple cleanse with Circadia Cleansing Oil, a customized gel cleanser, and honey scrub exfoliation. Circadia Caviar Enzyme softens and brightens, followed by Dermalume LED Therapy, extractions if needed, customized professional serums, and medical-grade skincare to finish — fresh, healthy, radiant skin.',
      es: 'Nuestro facial de firma: triple limpieza con Circadia Cleansing Oil, gel limpiador personalizado y exfoliación con scrub de miel. La enzima Circadia Caviar suaviza e ilumina, seguida de terapia LED Dermalume, extracciones si son necesarias, sérums profesionales personalizados y productos de grado médico para finalizar — piel fresca, sana y radiante.',
    },
    photos: sp(['87eb46a874ef42cf8edc6a5f8fa95b0b','ca5cc863eb4741f7a9df1c2acfd80e75','d1dd20d490464ec7bad78f8b0e0061d3','2c8face57f0f4bc4b2b33b2c7866262f','050d9c7356124527bd62513b9c69066b','789570d47e074cd8b60a186e2b8c35b1','1bd3716937754a33979b2d2ecc697576','41b7743592b6434ab98602a276bf190f']),
  },
  {
    id: 'acne-clear-ritual',
    category: 'facial',
    name: 'Acne Clear Luxury Ritual',
    price: 188,
    duration: { es: '1 h 45 min', en: '1 h 45 min' },
    desc: {
      en: 'An advanced corrective facial for acne-prone and congested skin: deep cleanse, pore-purifying techniques, professional enzyme exfoliation (papaya & pineapple), high-frequency therapy to eliminate acne-causing bacteria, and red LED light therapy to calm and accelerate healing. Completed with soothing, hydrating treatments to strengthen the skin barrier.',
      es: 'Facial correctivo avanzado para piel con acné o congestionada: limpieza profunda, purificación de poros, exfoliación enzimática profesional (papaya y piña), alta frecuencia para eliminar bacterias y luz LED roja para calmar y acelerar la recuperación. Finaliza con productos calmantes e hidratantes que fortalecen la barrera de la piel.',
    },
    photos: [], // pedir fotos a la clienta
  },
  {
    id: 'back-facial',
    category: 'facial',
    name: 'Back Facial',
    price: 120,
    duration: { es: '55 min', en: '55 min' },
    desc: {
      en: 'A customized back treatment designed to cleanse, exfoliate, and restore the skin. Ideal for acne-prone or dry skin: deep cleanse, enzyme exfoliation, and targeted care to reduce breakouts or boost hydration. Finished with soothing masks, leaving skin smooth, clear, and refreshed.',
      es: 'Tratamiento de espalda personalizado para limpiar, exfoliar y restaurar la piel. Ideal para piel con acné o seca: limpieza profunda, exfoliación enzimática y cuidado dirigido para reducir brotes o aumentar la hidratación. Finaliza con mascarillas calmantes, dejando la piel suave, limpia y renovada.',
    },
    photos: [], // pedir fotos a la clienta
  },
  {
    id: 'dermaplaning',
    category: 'facial',
    name: 'Dermaplaning',
    price: 120,
    duration: { es: '45 min', en: '45 min' },
    desc: {
      en: 'Dermaplaning plus a basic facial.',
      es: 'Dermaplaning más un facial básico.',
    },
    photos: sp(['f82e25d214474664a5fd36b474859bdb','26d337a8b18a4e3a8f33134c8f3474a4']),
  },
  // ------------------------- PEELINGS -------------------------
  {
    id: 'biorepeel',
    category: 'peel',
    name: 'BioRePeel Chemical Peel',
    price: 180,
    duration: { es: '45 min', en: '45 min' },
    desc: {
      en: 'An advanced chemical peel that renews, brightens, and improves overall skin quality with minimal downtime. Exfoliates, reduces acne, smooths texture, and improves fine lines and discoloration — visible results without heavy peeling.',
      es: 'Peeling químico avanzado que renueva, ilumina y mejora la calidad de la piel con mínimo tiempo de recuperación. Exfolia, reduce el acné, suaviza la textura y mejora líneas finas y decoloración — resultados visibles sin descamación intensa.',
    },
    benefits: {
      en: ['Improves acne & congestion', 'Brightens and evens skin tone', 'Smooths texture & fine lines', 'Minimal downtime'],
      es: ['Mejora acné y congestión', 'Ilumina y empareja el tono', 'Suaviza textura y líneas finas', 'Mínimo tiempo de recuperación'],
    },
    photos: sp(['2877849fdca34964a81172a94e75c5c8','6f923d2844394f46a05664ec318cceb9','37b261d9e64a486daa14ac5664f521c4','12a2b83d182e4c0f94ae2ff50ce3955d']),
  },
  {
    id: 'brightening-peel',
    category: 'peel',
    name: 'Brightening Chemical Peel',
    price: 185,
    duration: { es: '45 min', en: '45 min' },
    desc: {
      en: 'A targeted chemical peel for hyperpigmentation, melasma, and uneven skin tone. Gently exfoliates to reduce dark spots, sun damage, and discoloration while promoting a brighter, more even complexion. Stimulates skin renewal with minimal downtime.',
      es: 'Peeling químico dirigido a hiperpigmentación, melasma y tono desigual. Exfolia suavemente para reducir manchas oscuras, daño solar y decoloración, promoviendo un cutis más luminoso y uniforme. Estimula la renovación de la piel con mínimo tiempo de recuperación.',
    },
    benefits: {
      en: ['Reduces dark spots & melasma', 'Evens skin tone', 'Brightens dull skin', 'Improves texture', 'Minimal downtime'],
      es: ['Reduce manchas y melasma', 'Empareja el tono de la piel', 'Ilumina la piel apagada', 'Mejora la textura', 'Mínimo tiempo de recuperación'],
    },
    photos: sp(['9c7c782d81b54d5abcfd6e86b212cde5','3d3607bcf26f4cda9f8f74e71c13c7a2','2a657acf666f40f7a235ee2a15cad6cd']),
  },
  // ------------------------- CEJAS & PIES -------------------------
  {
    id: 'brow-ritual',
    category: 'brows',
    name: 'Luxury Brow Sculpting Ritual',
    price: 45,
    duration: { es: '35 min', en: '35 min' },
    desc: {
      en: 'A complete brow care experience: gentle cleanse, precise eyebrow threading to shape and define, high-frequency therapy to reduce bacteria and calm the skin, and a soothing hydrating mask to finish.',
      es: 'Experiencia completa para el cuidado de las cejas: limpieza suave, depilación con hilo para definir y dar forma con precisión, alta frecuencia para reducir bacterias y calmar la piel, y una mascarilla calmante e hidratante para finalizar.',
    },
    photos: sp(['b4942a94eadf4a1884977d231111e298','25e26eeb801b41b7b772b6eb8fa6aad9','a6ab0ecf80bc401bbef01cd65ba3863d','d5588d1954cc49849bad31fe438c3ab3']),
  },
  {
    id: 'foot-facial',
    category: 'brows',
    name: 'Foot Facial Treatment',
    price: 85,
    duration: { es: '45 min', en: '45 min' },
    desc: {
      en: 'A relaxing treatment to restore, smooth, and deeply hydrate the skin on your feet: deep cleanse, exfoliation to remove dead skin buildup, and targeted care for dryness and rough texture. Finished with intense hydration.',
      es: 'Tratamiento relajante para restaurar, suavizar e hidratar profundamente la piel de los pies: limpieza profunda, exfoliación para eliminar piel muerta y cuidado dirigido a la resequedad y textura áspera. Finaliza con hidratación intensa.',
    },
    benefits: {
      en: ['Removes dead skin buildup', 'Deeply hydrates dry, cracked skin', 'Smooths rough texture', 'Promotes relaxation'],
      es: ['Elimina piel muerta acumulada', 'Hidrata profundamente piel seca y agrietada', 'Suaviza la textura áspera', 'Promueve la relajación'],
    },
    photos: sp(['4ec3194b7091461782f05787dd1ecc3b','26450fd9aed94bd89349b11632dd8ecf','e5c5ac4676544167bd0203871e1c5802','186ededdbdf740adbf375b4c28b2de62','356f1b67c21844168be1c52a9b3025e3']),
  },
]

export const REVIEWS = [
  {
    name: 'Daniela',
    service: 'Luxury Brow Sculpting Ritual',
    date: 'Jun 2026',
    text: { es: 'Me encantó la experiencia, nunca me había hecho un head spa y fue una relajación total. Mi cabello quedó súper hidratado, la recomiendo 100% 🥰', en: 'I loved the experience — my first head spa and it was total relaxation. My hair was left super hydrated. 100% recommended 🥰' },
  },
  {
    name: 'Roxana',
    service: 'Cleanse Scalp Treatment',
    date: 'Jun 2026',
    text: { es: 'Amé mi experiencia. Es súper profesional y atenta en cada uno de los detalles. Estoy súper feliz con mis resultados.', en: 'I loved my experience. She is super professional and attentive to every detail. I am so happy with my results.' },
  },
  {
    name: 'Carbon',
    service: 'Luxury Brow Sculpting Ritual',
    date: 'May 2026',
    text: { es: 'Me encantó mi diseño de cejas. Quedaron súper limpias, definidas y naturales, exactamente como yo quería. La atención fue excelente.', en: 'I loved my brow design. Clean, defined, and natural — exactly what I wanted. Excellent service.' },
  },
  {
    name: 'Damaris',
    service: 'Facial rejuvenecedor',
    date: 'Oct 2025',
    text: { es: 'Probé un tratamiento facial y quedé encantada con los resultados. La atención fue excelente: el ambiente relajante y todo perfecto.', en: 'I tried a facial treatment and was delighted with the results. Excellent service — relaxing atmosphere and everything perfect.' },
  },
]

// ---------- Redes y contacto (del Linktree linktr.ee/missyay11) ----------
export const SOCIALS = {
  whatsapp: 'https://wa.me/15023407017',
  phoneDisplay: '+1 (502) 340-7017',
  instagram: 'https://www.instagram.com/missyayfaciallounge',
  tiktok: 'https://www.tiktok.com/@missyayfaciallounge',
  facebook: 'https://www.facebook.com/share/17zrgV92Ah/',
  linktree: 'https://linktr.ee/missyay11',
}

// ---------- Productos recomendados (tienda Linktree/Amazon) ----------
// Los enlaces van a la tienda de Linktree para conservar las comisiones
// de afiliado de la clienta. Si ella prefiere enlaces directos de Amazon
// con su tag de Associates, reemplazar SHOP_URL por producto.
export const SHOP_URL = 'https://linktr.ee/missyay11/shop'

export const PRODUCTS = [
  {
    id: 'furterer-astera',
    name: { es: 'René Furterer Head Spa ASTERA — Concentrado calmante pre-shampoo', en: 'René Furterer Head Spa ASTERA Soothing Pre-Shampoo Concentrate' },
    img: 'https://ugc.production.linktr.ee/f9af6b0f-d98e-4ca9-a277-a62fe6e37671_31y99xNAZML.-SL500-.jpeg',
  },
  {
    id: 'furterer-complexe5',
    name: { es: 'René Furterer Head Spa COMPLEXE 5 — Concentrado estimulante de plantas', en: 'René Furterer Head Spa COMPLEXE 5 Stimulating Plant Concentrate' },
    img: 'https://ugc.production.linktr.ee/90ddcd22-2edb-43f2-a3f0-f744e4419016_31vD4XQk5-L.-SL500-.jpeg',
  },
  {
    id: 'scalp-massager',
    name: { es: 'Masajeador eléctrico de cuero cabelludo', en: 'Vibrating Electric Scalp Massager' },
    img: 'https://m.media-amazon.com/images/I/41h2av3bwZL._SL500_.jpg',
  },
  {
    id: 'glass-teapot',
    name: { es: 'Tetera de vidrio borosilicato 28 oz con infusor', en: '28oz Borosilicate Glass Teapot with Infuser' },
    img: 'https://m.media-amazon.com/images/I/41yNwQ4+aSL._SL500_.jpg',
  },
  {
    id: 'bio-oil',
    name: { es: 'Bio-Oil Skincare — Aceite corporal para cicatrices y estrías', en: 'Bio-Oil Skincare Body Oil for Scars & Stretch Marks' },
    img: 'https://ugc.production.linktr.ee/8e3ef185-a882-4a79-a44c-4b5fdcf10d9f_31D3xnDCSHL.-SL500-.jpeg',
  },
  {
    id: 'dermaplane-blades',
    name: { es: 'Swann Morton #10R — Hojas estériles para dermaplaning', en: 'Swann Morton #10R Sterile Dermaplane Blades' },
    img: 'https://m.media-amazon.com/images/I/41GUZsh7JjL._SL500_.jpg',
  },
  {
    id: 'lemona-vitc',
    name: { es: 'LEMONA — Vitamina C en polvo 500 mg (Corea)', en: 'LEMONA Korean Vitamin C Powder 500mg' },
    img: 'https://m.media-amazon.com/images/I/41V-IW1wB3L._SL500_.jpg',
  },
  {
    id: 'gol-multivitamin',
    name: { es: 'Garden of Life Organics 40+ — Multivitamínico diario', en: 'Garden of Life Organics 40+ Once Daily Multivitamin' },
    img: 'https://m.media-amazon.com/images/I/41brVJHm8QL._SL500_.jpg',
  },
  {
    id: 'lactofit-probiotic',
    name: { es: 'LACTO-FIT Gold — Probióticos en sticks (50 pack)', en: 'LACTO-FIT Gold Probiotic Powder Sticks (50 pack)' },
    img: 'https://m.media-amazon.com/images/I/41E6urpnonL._SL500_.jpg',
  },
]

// ---------- Galería (fotos provistas por la clienta, jul 2026) ----------
export const GALLERY_PHOTOS = [
  {
    src: '/images/galeria/galeria-02-head-spa-flores.jpeg',
    alt: { es: 'Head spa con flores frescas y luz ambiental', en: 'Head spa with fresh flowers and ambient light' },
  },
  {
    src: '/images/galeria/galeria-03-head-spa-petalos.jpeg',
    alt: { es: 'Ritual de head spa con pétalos de rosa y velas', en: 'Head spa ritual with rose petals and candles' },
  },
  {
    src: '/images/galeria/galeria-04-head-spa-cascada.jpeg',
    alt: { es: 'Cascada de agua del head spa con pétalos', en: 'Head spa water cascade with petals' },
  },
  {
    src: '/images/galeria/galeria-01-biorepeel-facial.jpeg',
    alt: { es: 'Aplicación de BioRePeel en tratamiento facial', en: 'BioRePeel application during a facial treatment' },
  },
  {
    src: '/images/galeria/galeria-05-biorepeel-producto.jpeg',
    alt: { es: 'Solución BioRePeel de grado profesional', en: 'Professional-grade BioRePeel solution' },
  },
]

export const STORY_VIDEO = {
  src: '/video/yay-mi-historia.mp4',
  poster: '/video/yay-mi-historia-poster.jpg',
}
