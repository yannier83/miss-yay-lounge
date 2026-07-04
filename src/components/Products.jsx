import { useLang, UI } from '../i18n/LanguageContext.jsx'
import { PRODUCTS, SHOP_URL } from '../data/services.js'

export default function Products() {
  const { t } = useLang()
  return (
    <section className="section section--mist" id="productos">
      <div className="section__inner">
        <p className="eyebrow">{t(UI.products.eyebrow)}</p>
        <h2>{t(UI.products.title)}</h2>
        <p className="products__sub">{t(UI.products.sub)}</p>

        <div className="products">
          {PRODUCTS.map((p) => (
            <a
              key={p.id}
              className="product"
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="product__media">
                <img src={p.img} alt={t(p.name)} loading="lazy" />
              </div>
              <p className="product__name">{t(p.name)}</p>
              <span className="product__cta">{t(UI.products.view)} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
