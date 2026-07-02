import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/siteData";
import Icon from "./Icon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition ${isActive ? "text-emerald-300" : "text-stone-200 hover:text-emerald-300"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 text-white"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded bg-emerald-600 font-bold">
            NS
          </span>
          <span className="text-xl font-bold tracking-wide">NepalStay</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkClass}
              end={link.path === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden rounded bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-700 md:inline-flex"
        >
          Reserve
        </Link>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded border border-white/20 text-white md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          <Icon className="h-6 w-6">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </Icon>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-stone-950 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? "text-emerald-300" : "text-stone-100"}`
                }
                onClick={() => setIsOpen(false)}
                end={link.path === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
