import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import LogoMark from '../components/LogoMark'
import ThemeToggle from '../components/ThemeToggle'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'FinOps', href: '#finops' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ branding, theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="glass container-wide rounded-2xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center">
            <LogoMark logoSrc={branding.logoSrc} companyName={branding.companyName} className="h-12 w-12" showText />
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-[color:var(--text-soft)] transition hover:text-[color:var(--text-main)]">
                {item.label}
              </a>
            ))}
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="glass inline-flex h-11 w-11 items-center justify-center rounded-full"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="mt-3 grid gap-2 rounded-xl border border-sky-300/20 bg-white/40 p-3 text-left md:hidden dark:bg-slate-900/40">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm text-[color:var(--text-soft)] hover:bg-sky-400/10">
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default Navbar
