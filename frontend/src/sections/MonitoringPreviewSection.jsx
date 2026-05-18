import { Activity, AlertTriangle, Gauge, ShieldAlert } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const monitors = [
  { label: 'Service Health', value: '99.98%', icon: Activity },
  { label: 'Open Alerts', value: '04', icon: AlertTriangle },
  { label: 'Latency P95', value: '162ms', icon: Gauge },
  { label: 'Security Findings', value: '01', icon: ShieldAlert },
]

function MonitoringPreviewSection() {
  return (
    <section id="monitoring" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Live Ops Preview"
          title="Infrastructure Monitoring and Reliability Insights"
          subtitle="A dashboard-inspired view into deployment health, performance, and security posture."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {monitors.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.label} className="glass rounded-2xl p-5">
                <div className="mb-3 inline-flex rounded-lg bg-sky-500/15 p-2 text-sky-500">
                  <Icon size={18} />
                </div>
                <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--text-soft)]">{item.label}</p>
                <p className="section-title mt-1 text-2xl font-bold">{item.value}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MonitoringPreviewSection
