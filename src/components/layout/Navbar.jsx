import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import CTAButton from '../ui/CTAButton'

const navLinks = [
  { to: '/',         label: 'Home',     end: true },
  { to: '/about',    label: 'About' },
  { to: '/events',   label: 'Events' },
  { to: '/learning', label: 'Learning' },
  { to: '/projects', label: 'Projects' },
  { to: '/apps',     label: 'Apps' },
]

const activeClass = 'text-accent'
const inactiveClass = 'text-slate-400 hover:text-slate-100 transition-colors'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-surface-dark/80 border-b border-surface-border">
      <nav className="page-container flex items-center justify-between h-16" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-slate-100">
          <span className="text-accent">DHI</span>
          <span className="hidden sm:inline">Design Hub India</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => `text-sm font-medium ${isActive ? activeClass : inactiveClass}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <div className="hidden md:block">
            <CTAButton to="/join" variant="primary">Join Us</CTAButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-surface-border bg-surface-dark/95 backdrop-blur-sm">
          <ul className="page-container py-4 flex flex-col gap-3">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `block text-sm font-medium py-1 ${isActive ? activeClass : inactiveClass}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <CTAButton to="/join" variant="primary" className="w-full" onClick={() => setMenuOpen(false)}>
                Join Us
              </CTAButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
