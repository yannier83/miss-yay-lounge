import { useState, useEffect } from 'react'
import { useLang, UI } from '../i18n/LanguageContext.jsx'
import { BOOKSY_URL } from '../data/services.js'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['#firma', t(UI.nav.signature)],
    ['#servicios', t(UI.nav.services)],
    ['#opiniones', t(UI.nav.reviews)],
    ['#galeria', t(UI.nav.gallery)],
    ['#productos', t(UI.nav.products)],
    ['#nosotros', t(UI.nav.about)],
    ['#visitanos', t(UI.nav.visit)],
  ]

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__brand-mark" aria-hidden="true" />
          Miss Yay <em>Facial Lounge</em>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Principal">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a className="btn btn--gold" href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
            {t(UI.nav.book)}
          </a>
          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
