import PageHero from '../components/PageHero'
import ServicesSection from '../components/ServicesSection'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comforts Designed for Nepal Travel"
        text="Click any service to explore the experience, facilities, and themed images behind each NepalStay amenity."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=85"
      />
      <ServicesSection />
    </>
  )
}
