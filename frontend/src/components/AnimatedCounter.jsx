import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ value, suffix = '', duration = 1300 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) {
          return
        }
        hasAnimatedRef.current = true
        const start = performance.now()

        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.floor(progress * value))
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        requestAnimationFrame(animate)
      },
      { threshold: 0.25 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [duration, value])

  return (
    <span ref={ref} className="section-title text-3xl font-bold text-[color:var(--text-main)]">
      {count}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
