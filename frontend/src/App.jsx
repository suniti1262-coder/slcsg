import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import ParticleBackground from './components/ParticleBackground'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import { useBranding } from './hooks/useBranding'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()
  const branding = useBranding()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen companyName="SLCSG Technologies" logoSrc={branding.logoSrc} />}
      <div className="app-shell">
        <ParticleBackground />
        <MainLayout theme={theme} onToggleTheme={toggleTheme} branding={branding}>
          <HomePage branding={branding} />
        </MainLayout>
      </div>
    </>
  )
}

export default App
