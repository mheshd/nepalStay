import PageHero from '../components/PageHero'
import RoomsSection from '../components/RoomsSection'

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms"
        title="Stay Close to Nepal's Best Views"
        text="Browse curated rooms with clear pricing, thoughtful comfort, and easy access to Nepal's mountains, lakes, and city culture."
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85"
      />
      <RoomsSection />
    </>
  )
}
