import GallerySection from '../components/GallerySection'
import PageHero from '../components/PageHero'

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="More Views from NepalStay"
        text="Browse a larger gallery of Nepal mountains, peaceful stays, hotel spaces, restaurants, pools, and travel moments."
        image="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1800&q=85"
      />
      <GallerySection />
    </>
  )
}
