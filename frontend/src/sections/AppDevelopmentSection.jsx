import { motion } from 'framer-motion'
import { Braces, Layers3, Lock, Network, ServerCog, Workflow } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const pillars = [
  { title: 'Enterprise Applications', icon: Layers3 },
  { title: 'Microservices', icon: Network },
  { title: 'API Engineering', icon: Braces },
  { title: 'Scalable Backends', icon: ServerCog },
  { title: 'Cloud-Native Design', icon: Workflow },
  { title: 'Secure Architecture', icon: Lock },
]

function AppDevelopmentSection() {
  return (
    <section id="application-development" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Application Engineering"
          title="Modern Enterprise Applications Designed for Scale and Security"
          subtitle="We build robust software products and distributed systems with clear architecture, reliable APIs, and cloud-native operational readiness."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="glass rounded-3xl p-6">
            <h3 className="section-title mb-4 text-2xl font-semibold">Architecture Blueprint</h3>
            <div className="rounded-2xl border border-sky-300/25 p-4 subtle-grid">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-white/65 p-3 text-center text-xs font-semibold uppercase tracking-[0.12em] dark:bg-slate-800/70">Web / Mobile</div>
                <div className="rounded-xl bg-white/65 p-3 text-center text-xs font-semibold uppercase tracking-[0.12em] dark:bg-slate-800/70">API Layer</div>
                <div className="rounded-xl bg-white/65 p-3 text-center text-xs font-semibold uppercase tracking-[0.12em] dark:bg-slate-800/70">Data + Events</div>
              </div>
              <div className="mt-3 rounded-xl bg-white/65 p-3 text-center text-xs font-semibold uppercase tracking-[0.12em] dark:bg-slate-800/70">
                CI/CD + Security + Observability + Cost Controls
              </div>
            </div>
          </article>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article key={pillar.title} className="glass rounded-2xl p-4">
                  <div className="mb-3 inline-flex rounded-lg bg-cyan-400/15 p-2 text-cyan-500">
                    <Icon size={18} />
                  </div>
                  <h4 className="section-title text-lg font-semibold">{pillar.title}</h4>
                </article>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppDevelopmentSection
