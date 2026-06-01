export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <section
      className="relative flex min-h-[52vh] items-center bg-cover bg-center px-5 pt-28"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(28, 25, 23, 0.86), rgba(28, 25, 23, 0.48)), url('${image}')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl py-16 text-white">
        <p className="mb-5 inline-flex rounded bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] backdrop-blur">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">{text}</p>
      </div>
    </section>
  )
}
