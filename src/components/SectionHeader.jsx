export default function SectionHeader({ eyebrow, title, text, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${light ? 'text-emerald-200' : 'text-emerald-700'}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-stone-950'}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 ${light ? 'text-emerald-50' : 'text-stone-600'}`}>{text}</p>
    </div>
  )
}
