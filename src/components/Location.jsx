import { useLang, UI } from '../i18n/LanguageContext.jsx'
import { BUSINESS, BOOKSY_URL, SOCIALS } from '../data/services.js'

export default function Location() {
  const { t } = useLang()
  return (
    <section className="section section--dark" id="visitanos">
      <div className="section__inner location">
        <div>
          <p className="eyebrow eyebrow--light">{t(UI.visit.eyebrow)}</p>
          <h2>{t(UI.visit.title)}</h2>

          <dl className="location__details">
            <div>
              <dt>{t(UI.visit.address)}</dt>
              <dd>{BUSINESS.address}</dd>
            </div>
            <div>
              <dt>{t(UI.visit.hours)}</dt>
              <dd>
                {t(UI.visit.hoursValue)}
                <small>{t(UI.visit.hoursNote)}</small>
              </dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={SOCIALS.whatsapp} target="_blank" rel="noopener noreferrer" className="location__phone">
                  {SOCIALS.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>

          <div className="location__ctas">
            <a className="btn btn--gold" href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
              {t(UI.visit.book)}
            </a>
            <a className="btn btn--ghost btn--ghost-light" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">
              {t(UI.visit.directions)}
            </a>
          </div>
        </div>

        <div className="location__map">
          <iframe
            title="Mapa — Miss Yay Facial Lounge"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95000!2d-82.583!3d28.006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
