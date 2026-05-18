import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Cloud, Rocket, Sparkles } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'

const stats = [
  { label: 'Cloud Savings', value: 47, suffix: '%' },
  { label: 'Deployments Automated', value: 320, suffix: '+' },
  { label: 'Projects Delivered', value: 96, suffix: '+' },
  { label: 'Infrastructure Efficiency', value: 88, suffix: '%' },
]

function HeroSection({ branding }) {
  return (
    <section id="top" className="section-pad pt-20 sm:pt-24">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
            <Sparkles size={12} />
            Next-generation Cloud + AI Engineering
          </div>
          <h1 className="section-title mb-5 text-4xl font-bold leading-tight text-[color:var(--text-main)] sm:text-5xl lg:text-6xl">
            Engineering Scalable Cloud Platforms for the <span className="gradient-text">AI-Driven Future</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-[color:var(--text-soft)]">
            {branding.companyName} helps enterprises modernize applications, automate delivery pipelines, optimize cloud spend, and accelerate digital transformation through secure cloud-native architectures.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="brand-btn">
              Get Started
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="#contact" className="brand-btn secondary">
              Book Consultation
            </a>
          </div>
        </motion.div>

        <motion.div className="relative subtle-grid rounded-3xl p-4" initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <div className="glass rounded-3xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="section-title text-lg font-semibold">Cloud Operations Command</h3>
              <Cloud size={18} className="text-sky-500" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/60 p-4 dark:bg-slate-800/60">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase text-[color:var(--text-soft)]">Deployment Velocity</span>
                  <Rocket size={15} className="text-cyan-500" />
                </div>
                <p className="section-title text-2xl font-semibold">2.4x Faster</p>
              </div>
              <div className="rounded-2xl bg-white/60 p-4 dark:bg-slate-800/60">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase text-[color:var(--text-soft)]">Cost Drift Alerts</span>
                  <BarChart3 size={15} className="text-cyan-500" />
                </div>
                <p className="section-title text-2xl font-semibold">Real-time</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-wide mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="glass rounded-2xl p-5 text-center">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-[color:var(--text-soft)]">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
