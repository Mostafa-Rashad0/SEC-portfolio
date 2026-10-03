import { useState, useEffect } from 'react'
import { Menu, X, ShieldCheck, Sun, Moon } from 'lucide-react'
import { useTheme, useActiveSection } from '../hooks'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useTheme()
  const active = useActiveSection(links.map(l => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0a0f1a]/90 backdrop-blur-xl shadow-sm dark:shadow-none border-b border-gray-200/60 dark:border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main navigation">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 font-bold text-lg text-gray-900 dark:text-white hover:text-cyber-500 dark:hover:text-cyber-400 transition-colors"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyber-400 to-brand-500 text-white">
            <ShieldCheck size={18} />
          </div>
          Rashad
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                active === id
                  ? 'text-cyber-600 dark:text-cyber-400 bg-cyber-50 dark:bg-cyber-400/10'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.06]'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Theme toggle + mobile menu button */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-all"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.06]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-4 space-y-1 bg-white/95 dark:bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-gray-200/60 dark:border-white/[0.06]">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                active === id
                  ? 'text-cyber-600 dark:text-cyber-400 bg-cyber-50 dark:bg-cyber-400/10'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.06]'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
