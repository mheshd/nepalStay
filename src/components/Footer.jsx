import { Link } from 'react-router-dom'
import { navLinks } from '../data/siteData'
import Icon from './Icon'

const socialLinks = [
  {
    label: 'Facebook',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75h-3A3.75 3.75 0 0 0 9 7.5v3H6.75v3H9v6.75h3.25V13.5h2.5l.5-3h-3V7.875c0-.621.504-1.125 1.125-1.125h2.375v-3Z" />,
  },
  {
    label: 'Instagram',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75h9a3.75 3.75 0 0 1 3.75 3.75v9a3.75 3.75 0 0 1-3.75 3.75h-9a3.75 3.75 0 0 1-3.75-3.75v-9A3.75 3.75 0 0 1 7.5 3.75Zm4.5 12a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm4.875-8.625h.008v.008h-.008v-.008Z" />,
  },
  {
    label: 'X',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0-15-15 15" />,
  },
]

export default function Footer() {
  return (
    <footer className="bg-stone-950 px-5 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded bg-emerald-600 font-bold">NS</span>
            <span className="text-xl font-bold">NepalStay</span>
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-stone-300">
            Modern travel stays across Nepal, curated for mountain views, comfort, and local warmth.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-stone-300 transition hover:text-emerald-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold">Follow Us</h3>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="/"
                className="grid h-10 w-10 place-items-center rounded border border-white/20 transition hover:border-emerald-400 hover:bg-emerald-600"
                aria-label={`NepalStay on ${social.label}`}
              >
                <Icon className="h-5 w-5">{social.icon}</Icon>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-stone-400">
        © 2026 NepalStay. All rights reserved.
      </div>
    </footer>
  )
}
