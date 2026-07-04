import { useLang, UI } from '../i18n/LanguageContext.jsx'
import { BUSINESS, SOCIALS } from '../data/services.js'

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
)
const IconTikTok = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M16.6 3c.4 2.1 1.8 3.6 3.9 3.9v2.9c-1.5 0-2.8-.4-3.9-1.2v5.8c0 3.4-2.4 5.6-5.5 5.6-3 0-5.3-2.2-5.3-5.2 0-2.9 2.2-5.1 5.2-5.1.3 0 .7 0 1 .1v3c-.3-.1-.6-.2-1-.2-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.4 2.3 1.4 0 2.5-1 2.5-2.6V3h3z" />
  </svg>
)
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.5C11.6 3 10.5 4.4 10.5 7v1.5H8.5v3h2V21h3.5v-9.5h2.6l.4-3H14z" />
  </svg>
)
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.2-.7l.4-.5c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.2-.3 3.9a12 12 0 0 0 4.6 4.5c1.7.9 2.6.8 3.4.7.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.2.1-1.3-.1-.2-.3-.2-.5-.3z" />
  </svg>
)

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  const socials = [
    [SOCIALS.instagram, 'Instagram', <IconInstagram key="ig" />],
    [SOCIALS.tiktok, 'TikTok', <IconTikTok key="tt" />],
    [SOCIALS.facebook, 'Facebook', <IconFacebook key="fb" />],
    [SOCIALS.whatsapp, 'WhatsApp', <IconWhatsApp key="wa" />],
  ]
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">Miss Yay <em>Facial Lounge</em></p>
        <p>{t(UI.footer.tagline)}</p>
        <ul className="footer__socials">
          {socials.map(([href, label, icon]) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                {icon}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer__fine">
          © {year} {BUSINESS.name}. {t(UI.footer.rights)} · {t(UI.footer.credit)}
        </p>
      </div>
    </footer>
  )
}
