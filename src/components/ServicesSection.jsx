import { useState } from 'react'
import { useLang, UI } from '../i18n/LanguageContext.jsx'
import { SERVICES, CATEGORIES } from '../data/services.js'
import ServiceCard from './ServiceCard.jsx'

export default function ServicesSection() {
  const { t } = useLang()
  const [active, setActive] = useState('headspa')
  const filtered = SERVICES.filter((s) => s.category === active)

  return (
    <section className="section" id="servicios">
      <div className="section__inner">
        <p className="eyebrow">{t(UI.services.eyebrow)}</p>
        <h2>{t(UI.services.title)}</h2>

        <div className="tabs" role="tablist" aria-label={t(UI.services.eyebrow)}>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={`tab ${active === c.id ? 'is-active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {t(c.label)}
            </button>
          ))}
        </div>

        <div className="cards">
          {filtered.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
