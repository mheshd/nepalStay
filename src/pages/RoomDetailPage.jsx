import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import { rooms } from "../data/siteData";

export default function RoomDetailPage() {
  const { slug } = useParams();
  const room = rooms.find((item) => item.slug === slug) || rooms[0];

  return (
    <>
      <PageHero
        eyebrow="Room Detail"
        title={room.name}
        text={`${room.price} per night - ${room.description}`}
        image={room.image}
      />
      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <img
            src={room.image}
            alt={room.name}
            className="h-[460px] w-full rounded-lg object-cover shadow-xl shadow-stone-200"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
              From {room.price}/night
            </p>
            <h2 className="mt-3 text-3xl font-bold text-stone-950">
              Room Details
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              {room.details}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {room.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded border border-emerald-100 bg-emerald-50 px-4 py-3 font-semibold text-emerald-950"
                >
                  {feature}
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded bg-emerald-700 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-stone-950"
            >
              Book This Room
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
