import { useState, useEffect, useCallback } from 'react'
import { useLang, UI } from '../i18n/LanguageContext.jsx'
import { GALLERY_PHOTOS } from '../data/services.js'

export default function Gallery() {
  const { t } = useLang()
  const [selected, setSelected] = useState(null)

  const close = useCallback(() => setSelected(null), [])

  useEffect(() => {
    if (selected === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') setSelected((s) => (s + 1) % GALLERY_PHOTOS.length)
      if (e.key === 'ArrowLeft') setSelected((s) => (s - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected, close])

  return (
    <section className="section" id="galeria">
      <div className="section__inner">
        <p className="eyebrow">{t(UI.gallery.eyebrow)}</p>
        <h2>{t(UI.gallery.title)}</h2>

        <div className="gallery">
          {GALLERY_PHOTOS.map((p, i) => (
            <button
              key={p.src}
              className="gallery__item"
              onClick={() => setSelected(i)}
              aria-label={t(p.alt)}
            >
              <img src={p.src} alt={t(p.alt)} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <img
            src={GALLERY_PHOTOS[selected].src}
            alt={t(GALLERY_PHOTOS[selected].alt)}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox__caption">{t(GALLERY_PHOTOS[selected].alt)}</p>
          <button className="lightbox__close" onClick={close} aria-label="Cerrar">×</button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length) }}
            aria-label="Anterior"
          >‹</button>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % GALLERY_PHOTOS.length) }}
            aria-label="Siguiente"
          >›</button>
        </div>
      )}
    </section>
  )
}
