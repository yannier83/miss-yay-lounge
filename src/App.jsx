import { LanguageProvider } from './i18n/LanguageContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SignatureSection from './components/SignatureSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import Reviews from './components/Reviews.jsx'
import Products from './components/Products.jsx'
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <SignatureSection />
        <ServicesSection />
        <Reviews />
        <Products />
        <Gallery />
        <About />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  )
}
