import ContactSection from '../components/ContactSection'
import GallerySection from '../components/GallerySection'
import Hero from '../components/Hero'
import RoomsSection from '../components/RoomsSection'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonials'

export default function HomePage() {
  return (
    <>
      <Hero />
      <RoomsSection preview />
      <ServicesSection preview />
      <Testimonials />
      <GallerySection preview />
      <ContactSection />
    </>
  )
}
