import { Clock3, Coins, Rocket, Server } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const studies = [
  {
    title: 'AKS Deployment Modernization',
    summary: 'Re-architected monolithic workloads into managed AKS services with policy-based deployment automation.',
    metrics: ['Deployment frequency: +240%', 'Release failure rate: -38%', 'MTTR: -46%'],
    icon: Rocket,
  },
  {
    title: 'Enterprise Cloud Migration',
    summary: 'Migrated critical business applications from on-prem to Azure with zero unplanned downtime.',
    metrics: ['Migration timeline: 5 months', 'Availability maintained: 99.98%', 'Ops overhead: -31%'],
    icon: Server,
  },
  {
    title: 'FinOps Cost Optimization Program',
    summary: 'Implemented governance, rightsizing, and budgeting controls across multi-subscription cloud environments.',
    metrics: ['Annual savings: $1.2M', 'Idle resource spend: -43%', 'Budget predictability: +51%'],
    icon: Coins,
  },
  {
    title: 'DevOps Automation Transformation',
    summary: 'Built end-to-end CI/CD and infrastructure pipelines with integrated quality and security checks.',
    metrics: ['Lead time: -58%', 'Manual deployment steps: -84%', 'Release confidence: +67%'],
    icon: Clock3,
  },
]

function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real Outcomes Across Cloud, DevOps, and Cost Optimization"
          subtitle="Representative delivery engagements highlighting measurable business value and engineering impact."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {studies.map((study) => {
            const Icon = study.icon
            return (
              <article key={study.title} className="glass rounded-2xl p-6">
                <div className="mb-4 inline-flex rounded-xl bg-cyan-400/15 p-3 text-cyan-500">
                  <Icon size={20} />
                </div>
                <h3 className="section-title mb-2 text-xl font-semibold">{study.title}</h3>
                <p className="mb-4 text-sm text-[color:var(--text-soft)]">{study.summary}</p>
                <ul className="space-y-2">
                  {study.metrics.map((metric) => (
                    <li key={metric} className="rounded-lg border border-sky-300/20 bg-white/55 px-3 py-2 text-sm dark:bg-slate-800/55">
                      {metric}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
