import { useLang, UI } from '../i18n/LanguageContext.jsx'
import { REVIEWS } from '../data/services.js'

export default function Reviews() {
  const { t } = useLang()
  return (
    <section className="section section--mist" id="opiniones">
      <div className="section__inner">
        <p className="eyebrow">{t(UI.reviews.eyebrow)}</p>
        <h2>{t(UI.reviews.title)}</h2>

        <div className="reviews">
          {REVIEWS.map((r) => (
            <figure className="review" key={r.name + r.date}>
              <p className="review__stars" aria-label="5 de 5 estrellas">★★★★★</p>
              <blockquote>{t(r.text)}</blockquote>
              <figcaption>
                <strong>{r.name}</strong>
                <span>{r.service} · {r.date}</span>
                <span className="review__verified">✓ {t(UI.reviews.verified)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
