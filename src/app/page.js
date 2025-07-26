import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/About'
import FasilitasSection from './components/Facillities'
import GallerySection from './components/Gallery'
import LocationSection from './components/Location'
import ReviewSection from './components/Rating'
import ContactSection from './components/Contact'
import Footer from './components/Footer'


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection/>
      <FasilitasSection/>
      <GallerySection/>
      <LocationSection/>
      <ReviewSection/>
      <ContactSection/>
      <Footer/>
      {/* Nanti lanjut section berikutnya */}
    </main>
  )
}
