import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section className="bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Booking</p>
          <h2 className="mt-3 text-3xl font-bold text-stone-950 sm:text-4xl">Plan Your Nepal Escape</h2>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            Tell us your dates and travel style. Our team will help match you with the right stay, from quiet resorts to adventure-ready lodges.
          </p>
          <div className="mt-8 rounded-lg bg-stone-950 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.22em] text-emerald-200">Need help?</p>
            <p className="mt-3 text-2xl font-bold">+977 980-000-0000</p>
            <p className="mt-2 text-stone-300">hello@nepalstay.com</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
