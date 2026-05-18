import { useEffect, useMemo, useState } from 'react'
import { resolveLogoAsset } from '../utils/logo'

export const useBranding = () => {
  const [logoSrc, setLogoSrc] = useState(null)

  useEffect(() => {
    let mounted = true

    const load = async () => {
      const resolved = await resolveLogoAsset()
      if (!mounted) {
        return
      }
      setLogoSrc(resolved)

      const favicon = document.getElementById('site-favicon')
      if (favicon && resolved) {
        favicon.setAttribute('href', resolved)
        favicon.setAttribute('type', 'image/png')
      }
    }

    load()

    return () => {
      mounted = false
    }
  }, [])

  return useMemo(
    () => ({
      companyName: 'SLCSG Technologies',
      tagline: 'Engineering Scalable Cloud Platforms for the AI-Driven Future',
      logoSrc,
    }),
    [logoSrc],
  )
}
