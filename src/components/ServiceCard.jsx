import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-lg shadow-stone-200/60 transition hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="h-56 overflow-hidden">
        <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6">
        <span className="grid h-14 w-14 place-items-center rounded bg-emerald-700 text-white transition group-hover:bg-stone-900">
          <Icon>{service.icon}</Icon>
        </span>
        <h3 className="mt-5 text-xl font-bold text-stone-950">{service.title}</h3>
        <p className="mt-3 leading-7 text-stone-600">{service.description}</p>
      </div>
    </Link>
  )
}
