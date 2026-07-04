import { useLang } from '../i18n/LanguageContext.jsx'
import { SOCIALS } from '../data/services.js'

export default function WhatsAppFloat() {
  const { lang } = useLang()
  return (
    <a
      className="wa-float"
      href={SOCIALS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lang === 'es' ? 'Escríbenos por WhatsApp' : 'Message us on WhatsApp'}
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.2-.7l.4-.5c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.2-.3 3.9a12 12 0 0 0 4.6 4.5c1.7.9 2.6.8 3.4.7.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.2.1-1.3-.1-.2-.3-.2-.5-.3z" />
      </svg>
    </a>
  )
}
