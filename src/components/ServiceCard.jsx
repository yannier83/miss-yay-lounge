import { useState } from 'react'
import { useLang, UI } from '../i18n/LanguageContext.jsx'
import { BOOKSY_URL } from '../data/services.js'

export default function ServiceCard({ service }) {
  const { t, lang } = useLang()
  const [expanded, setExpanded] = useState(false)
  const desc = t(service.desc)
  const isLong = desc.length > 170
  const shown = expanded || !isLong ? desc : desc.slice(0, 170).trimEnd() + '…'
  const name = lang === 'es' && service.nameEs ? service.nameEs : service.name

  return (
    <article className={`card ${service.addon ? 'card--addon' : ''}`}>
      {service.photos.length > 0 && (
        <div className="card__media arch arch--card">
          <img src={service.photos[0]} alt={name} loading="lazy" />
        </div>
      )}
      <div className="card__body">
        <div className="card__head">
          <h3>{service.emoji ? `${name} ${service.emoji}` : name}</h3>
          <p className="card__price">${service.price}</p>
        </div>
        <p className="card__duration">{t(service.duration)}</p>
        <p className="card__desc">{shown}</p>
        {isLong && (
          <button className="card__more" onClick={() => setExpanded(!expanded)}>
            {expanded ? t(UI.services.less) : t(UI.services.more)}
          </button>
        )}
        {service.benefits && (
          <ul className="card__benefits">
            {t(service.benefits).map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {service.note && <p className="card__note">{t(service.note)}</p>}
        <a className="btn btn--jade btn--sm" href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
          {t(UI.services.book)}
        </a>
      </div>
    </article>
  )
}
