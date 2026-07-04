import { useLang, UI } from '../i18n/LanguageContext.jsx'
import { STORY_VIDEO } from '../data/services.js'

const BRANDS = ['Circadia', 'Dermalume LED', 'BioRePeel']

export default function About() {
  const { t } = useLang()
  return (
    <section className="section" id="nosotros">
      <div className="section__inner about">
        <div className="about__visual">
          <figure className="arch arch--main arch--video">
            <video
              src={STORY_VIDEO.src}
              poster={STORY_VIDEO.poster}
              controls
              playsInline
              preload="metadata"
            />
            <figcaption className="about__video-caption">{t(UI.about.videoLabel)}</figcaption>
          </figure>
        </div>
        <div className="about__copy">
          <p className="eyebrow">{t(UI.about.eyebrow)}</p>
          <h2>{t(UI.about.title)}</h2>
          <p>{t(UI.about.body)}</p>
          <p className="about__brands-label">{t(UI.about.brands)}</p>
          <ul className="about__brands">
            {BRANDS.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
