import { useLang, UI } from '../i18n/LanguageContext.jsx'
import { SERVICES, BOOKSY_URL, BUSINESS } from '../data/services.js'

export default function SignatureSection() {
  const { t } = useLang()
  const signatures = SERVICES.filter((s) => s.signature)

  return (
    <section className="section section--dark" id="firma">
      <div className="section__inner">
        <p className="eyebrow eyebrow--light">{t(UI.signature.eyebrow)}</p>
        <h2>{t(UI.signature.title)}</h2>

        <div className="signature__grid">
          {signatures.map((s, i) => (
            <article className="signature__card" key={s.id}>
              <div className="arch arch--card">
                <img
                  src={s.photos[0] || BUSINESS.gallery[(i + 2) % BUSINESS.gallery.length]}
                  alt={s.name}
                  loading="lazy"
                />
              </div>
              <div className="signature__body">
                <h3>{s.emoji ? `${s.name} ${s.emoji}` : s.name}</h3>
                <p className="signature__meta">${s.price} · {t(s.duration)}</p>
                <p className="signature__desc">{t(s.desc)}</p>
                <a className="btn btn--gold" href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                  {t(UI.services.book)}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
