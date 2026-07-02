import { testimonials } from "../data/siteData";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  return (
    <section className="bg-emerald-950 px-5 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Guest Stories"
          title="Loved by Travelers"
          text="Real guests choose NepalStay for reliable bookings, beautiful properties, and warm local care."
          light
        />
        <div className="grid gap-7 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-lg bg-white/10 p-6 backdrop-blur transition hover:-translate-y-2
             hover:bg-white/15"
            >
              <div
                className="mb-5 flex text-amber-300"
                aria-label="5 star rating"
              >
                {"★★★★★"}
              </div>
              <p className="leading-7 text-emerald-50">
                "{testimonial.review}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-emerald-100">Verified guest</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
