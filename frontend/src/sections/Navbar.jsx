import { Menu, X, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import LogoMark from '../components/LogoMark'
import ThemeToggle from '../components/ThemeToggle'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'FinOps', href: '#finops' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ branding, theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 lg:px-8">
      <nav
        className={`container-wide rounded-2xl px-5 transition-all duration-300 ${
          scrolled
            ? 'border border-sky-400/20 bg-white/85 py-2 shadow-2xl shadow-sky-500/10 backdrop-blur-2xl dark:bg-slate-900/85'
            : 'border border-sky-300/15 bg-white/60 py-3 shadow-xl backdrop-blur-xl dark:bg-slate-900/60'
        }`}
      >
        {/* top accent line */}
        <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 opacity-70" />

        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-3">
            <LogoMark
              logoSrc={branding.logoSrc}
              companyName={branding.companyName}
              className="h-14 w-14 transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <p className="section-title text-base font-bold leading-tight tracking-tight text-[color:var(--text-main)]">
                {branding.companyName}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-500">
                Cloud · DevOps · AI
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-[color:var(--text-soft)] transition-all duration-200 hover:bg-sky-500/10 hover:text-sky-600 dark:hover:text-sky-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-200 hover:scale-105 hover:shadow-sky-500/40"
            >
              <Zap size={14} />
              Get Started
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-300/25 bg-sky-500/10"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen ? (
          <div className="mt-3 grid gap-1 rounded-xl border border-sky-300/20 bg-white/50 p-3 text-left backdrop-blur md:hidden dark:bg-slate-900/50">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-[color:var(--text-soft)] transition hover:bg-sky-500/10 hover:text-sky-600"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="brand-btn mt-1 text-center text-xs">
              <Zap size={13} className="mr-1" /> Get Started
            </a>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default Navbar
