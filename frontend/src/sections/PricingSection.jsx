import { Check } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const plans = [
  {
    name: 'Starter Modernization',
    price: 'Custom',
    bullets: ['Cloud readiness assessment', 'Landing zone blueprint', 'Priority migration backlog'],
  },
  {
    name: 'Growth DevOps Platform',
    price: 'Custom',
    bullets: ['CI/CD automation', 'IaC implementation', 'Observability and SRE enablement'],
  },
  {
    name: 'Enterprise FinOps+',
    price: 'Custom',
    bullets: ['Spend governance setup', 'Rightsizing automation', 'Executive KPI dashboards'],
  },
]

function PricingSection() {
  return (
    <section id="pricing" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Engagement Models"
          title="Flexible Delivery Plans for Different Transformation Stages"
          subtitle="Choose a focused implementation or a full platform partnership based on your business priorities."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="glass rounded-2xl p-6">
              <h3 className="section-title mb-2 text-xl font-semibold">{plan.name}</h3>
              <p className="mb-4 text-2xl font-bold text-cyan-600 dark:text-cyan-300">{plan.price}</p>
              <ul className="space-y-2">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-[color:var(--text-soft)]">
                    <Check size={16} className="mt-0.5 text-cyan-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
