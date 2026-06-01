export default function ContactForm() {
  return (
    <form
      className="rounded-lg border border-stone-200 bg-stone-50 p-6 shadow-xl shadow-stone-200/60 sm:p-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-stone-700">Name</span>
          <input className="mt-2 w-full rounded border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" type="text" placeholder="Your name" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-stone-700">Email</span>
          <input className="mt-2 w-full rounded border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" type="email" placeholder="you@example.com" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-stone-700">Check-in date</span>
          <input className="mt-2 w-full rounded border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" type="date" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-stone-700">Check-out date</span>
          <input className="mt-2 w-full rounded border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" type="date" />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-semibold text-stone-700">Message</span>
        <textarea className="mt-2 min-h-36 w-full resize-y rounded border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" placeholder="Tell us what kind of stay you are looking for" />
      </label>
      <button className="mt-6 w-full rounded bg-emerald-700 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-stone-950" type="submit">
        Submit Booking Request
      </button>
    </form>
  )
}
