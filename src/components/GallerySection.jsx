import { galleryImages } from '../data/siteData'
import SectionHeader from './SectionHeader'

export default function GallerySection({ preview = false }) {
  const visibleImages = preview ? galleryImages.slice(0, 6) : galleryImages

  return (
    <section className="bg-stone-50 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gallery"
          title="A Glimpse of NepalStay"
          text="Explore mountain mornings, refined rooms, and peaceful spaces selected for unforgettable Nepal travel."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleImages.map((image, index) => (
            <div key={image} className="group h-72 overflow-hidden rounded-lg">
              <img src={image} alt={`NepalStay gallery ${index + 1}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
