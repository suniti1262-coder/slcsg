import { motion } from 'framer-motion'
import { LineChart, PiggyBank, ShieldCheck, WalletCards } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const kpis = [
  { title: 'Cost Visibility', value: '100%', note: 'Granular cloud spend tracking by service and team', icon: LineChart },
  { title: 'Waste Reduction', value: '32%', note: 'Average unused resource elimination in first quarter', icon: PiggyBank },
  { title: 'Governance', value: 'Policy-Driven', note: 'Automated budget alerts and compliance guardrails', icon: ShieldCheck },
  { title: 'Rightsizing', value: '24/7', note: 'Continuous recommendations for optimal resource allocation', icon: WalletCards },
]

function FinOpsSection() {
  return (
    <section id="finops" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="FinOps Excellence"
          title="Cloud Cost Optimization with Governance and Real-Time Insights"
          subtitle="Gain budget visibility, reduce cloud waste, and optimize multi-cloud performance through data-driven FinOps operations."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="glass rounded-3xl p-6">
            <h3 className="section-title mb-5 text-2xl font-semibold">Cost Analytics Dashboard Preview</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {kpis.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-2xl bg-white/55 p-4 dark:bg-slate-800/60">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-semibold text-[color:var(--text-soft)]">{item.title}</p>
                      <Icon size={16} className="text-cyan-500" />
                    </div>
                    <p className="section-title text-2xl font-bold">{item.value}</p>
                    <p className="mt-1 text-xs text-[color:var(--text-soft)]">{item.note}</p>
                  </div>
                )
              })}
            </div>
          </article>

          <motion.article
            className="glass rounded-3xl p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="section-title mb-4 text-2xl font-semibold">FinOps Outcomes</h3>
            <ul className="space-y-3 text-sm text-[color:var(--text-soft)]">
              <li className="rounded-xl border border-sky-300/20 bg-white/55 p-3 dark:bg-slate-800/60">Unified spend governance across subscriptions and environments</li>
              <li className="rounded-xl border border-sky-300/20 bg-white/55 p-3 dark:bg-slate-800/60">Budget forecasting with anomaly detection and proactive controls</li>
              <li className="rounded-xl border border-sky-300/20 bg-white/55 p-3 dark:bg-slate-800/60">Optimization recommendations for compute, storage, and licensing</li>
              <li className="rounded-xl border border-sky-300/20 bg-white/55 p-3 dark:bg-slate-800/60">Executive KPI reporting for savings, utilization, and efficiency trends</li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default FinOpsSection
