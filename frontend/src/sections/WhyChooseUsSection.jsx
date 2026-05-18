import { Shield, Sparkles, Timer, TrendingUp, Wrench } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const reasons = [
  'Cloud-native expertise',
  'Faster delivery cycles',
  'Automation-first engineering',
  'Enterprise-grade scalability',
  'Secure architecture',
  'Cost-efficient infrastructure',
  'DevOps maturity',
  'FinOps-driven optimization',
]

const reasonIcons = [Sparkles, Timer, Wrench, TrendingUp, Shield]

function WhyChooseUsSection() {
  return (
    <section id="why-us" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why SLCSG"
          title="Trusted Cloud and App Engineering Partner for Transformation Programs"
          subtitle="Our teams combine product speed with enterprise governance to help organizations modernize confidently."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reasonIcons[index % reasonIcons.length]
            return (
              <article key={reason} className="glass rounded-2xl p-5 transition duration-300 hover:-translate-y-1">
                <div className="mb-3 inline-flex rounded-lg bg-sky-500/15 p-2 text-sky-500">
                  <Icon size={17} />
                </div>
                <p className="section-title text-lg font-semibold">{reason}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
