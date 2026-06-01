import { Link } from 'react-router-dom'

export default function RoomCard({ room }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-lg shadow-stone-200/70 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="h-64 overflow-hidden">
        <img src={room.image} alt={room.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-stone-950">{room.name}</h3>
          <p className="shrink-0 font-bold text-emerald-700">{room.price}/night</p>
        </div>
        <p className="mt-4 min-h-24 leading-7 text-stone-600">{room.description}</p>
        <Link
          to={`/rooms/${room.slug}`}
          className="mt-6 inline-flex rounded bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          View Details
        </Link>
      </div>
    </article>
  )
}
