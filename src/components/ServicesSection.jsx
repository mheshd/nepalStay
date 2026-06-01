import { services } from '../data/siteData'
import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'

export default function ServicesSection({ preview = false }) {
  const visibleServices = preview ? services.slice(0, 6) : services

  return (
    <section className="bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Everything You Need to Settle In"
          text="Thoughtful essentials and restorative comforts make every NepalStay property practical, calm, and memorable."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
