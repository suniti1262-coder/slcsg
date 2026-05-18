import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-[color:var(--text-main)] transition hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle
