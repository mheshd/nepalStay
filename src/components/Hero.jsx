import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center bg-cover bg-center px-5 pt-24"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(28, 25, 23, 0.84), rgba(28, 25, 23, 0.46), rgba(28, 25, 23, 0.18)), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1800&q=85')",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl text-white">
          <p className="mb-5 inline-flex rounded bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] backdrop-blur">
            Boutique stays across Nepal
          </p>
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Find Your Perfect Stay in Nepal
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100 sm:text-xl">
            Discover mountain lodges, peaceful lakeside retreats, and handpicked
            city hotels with local hospitality at every stop.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex rounded bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-stone-950/30 transition hover:-translate-y-1 hover:bg-emerald-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
