import { rooms } from '../data/siteData'
import RoomCard from './RoomCard'
import SectionHeader from './SectionHeader'

export default function RoomsSection({ preview = false }) {
  const visibleRooms = preview ? rooms.slice(0, 3) : rooms

  return (
    <section className="bg-stone-50 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Rooms"
          title="Handpicked Stays for Every Journey"
          text="Choose from comfortable rooms and scenic retreats designed for rest after mountain trails, city walks, and lakeside days."
        />
        <div className="grid gap-7 md:grid-cols-3">
          {visibleRooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </div>
    </section>
  )
}
