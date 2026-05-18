const localLogos = import.meta.glob('../assets/logo/*.{png,jpg,jpeg,svg,webp,avif}', {
  eager: true,
  import: 'default',
})

const preferredNameHints = ['hd_logo', 'logo', 'intro', 'brand']

const publicCandidates = [
  '/logo/hd_logo.png',
  '/logo/logo.png',
  '/logo/intrologo.png',
  '/logo/logo.svg',
  '/logo/brand.png',
  '/images/logo/hd_logo.png',
  '/images/logo/Intrologo.png',
  '/images/logo/logo.png',
  '/images/logo/logo.svg',
]

const scorePath = (path) => {
  const lower = path.toLowerCase()
  const hintScore = preferredNameHints.findIndex((hint) => lower.includes(hint))
  return hintScore === -1 ? 100 : hintScore
}

const preloadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })

export const getBundledLogoCandidates = () =>
  Object.values(localLogos)
    .filter(Boolean)
    .sort((a, b) => scorePath(a) - scorePath(b))

export const resolveLogoAsset = async () => {
  const bundledCandidates = getBundledLogoCandidates()
  if (bundledCandidates.length > 0) {
    return bundledCandidates[0]
  }

  for (const path of publicCandidates) {
    const exists = await preloadImage(path)
    if (exists) {
      return path
    }
  }

  return null
}
