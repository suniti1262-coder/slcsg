const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  delay: `${(i % 7) * 0.8}s`,
  duration: `${10 + (i % 6) * 2}s`,
  size: 4 + (i % 5),
}))

function ParticleBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-sky-400/25"
          style={{
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration} ease-in-out ${particle.delay} infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(105vh) scale(0.7); opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.35; }
          100% { transform: translateY(-20vh) scale(1.1); }
        }
      `}</style>
    </div>
  )
}

export default ParticleBackground
