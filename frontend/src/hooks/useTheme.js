import { useEffect, useState } from 'react'

const THEME_KEY = 'slcsg-theme'

const getInitialTheme = () => {
  const fromStorage = localStorage.getItem(THEME_KEY)
  if (fromStorage === 'light' || fromStorage === 'dark') {
    return fromStorage
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
