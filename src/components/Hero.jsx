import { useLang, UI } from '../i18n/LanguageContext.jsx'
import { BOOKSY_URL, BUSINESS } from '../data/services.js'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{t(UI.hero.eyebrow)}</p>
          <h1>
            {t(UI.hero.title1)}
            <br />
            <span className="hero__accent">{t(UI.hero.title2)}</span>
          </h1>
          <p className="hero__sub">{t(UI.hero.sub)}</p>
          <div className="hero__ctas">
            <a className="btn btn--jade" href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
              {t(UI.hero.cta)}
            </a>
            <a className="btn btn--ghost" href="#servicios">{t(UI.hero.cta2)}</a>
          </div>
          <p className="hero__rating">
            <span aria-hidden="true">★★★★★</span> <strong>5.0</strong> {t(UI.hero.rating)}
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="arch arch--main">
            <img src={BUSINESS.gallery[0]} alt="" loading="eager" />
          </div>
          <div className="arch arch--small">
            <img src={BUSINESS.gallery[1]} alt="" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="cascade" aria-hidden="true" />
    </section>
  )
}
