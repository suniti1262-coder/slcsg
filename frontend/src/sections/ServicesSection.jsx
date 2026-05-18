import { motion } from 'framer-motion'
import {
  AppWindow,
  Bot,
  ChartNoAxesColumn,
  CloudCog,
  Container,
  Cpu,
  GitBranch,
  LayoutDashboard,
  Network,
  Server,
  Settings2,
  Workflow,
} from 'lucide-react'
import { fadeUp, staggerParent } from '../animations/motion'
import SectionHeading from '../components/SectionHeading'

const services = [
  { title: 'Cloud Transformation', text: 'Modernize legacy environments with cloud-first operating models and migration blueprints.', icon: CloudCog },
  { title: 'Application Development', text: 'Design and build enterprise-grade applications tailored for scale and resilience.', icon: AppWindow },
  { title: 'Web Development', text: 'Deliver high-performance web platforms with premium UX and measurable business outcomes.', icon: LayoutDashboard },
  { title: 'Azure & Cloud Architecture', text: 'Architect secure Azure landing zones and distributed systems for mission-critical workloads.', icon: Network },
  { title: 'DevOps Automation', text: 'Automate release workflows and quality gates to speed up software delivery cycles.', icon: Workflow },
  { title: 'Kubernetes / AKS', text: 'Deploy, govern, and optimize container platforms using managed AKS operations.', icon: Container },
  { title: 'Terraform & IaC', text: 'Build repeatable infrastructure pipelines with Terraform and policy-driven governance.', icon: Settings2 },
  { title: 'FinOps & Cost Optimization', text: 'Reduce cloud spend through rightsizing, forecasting, and continuous budget visibility.', icon: ChartNoAxesColumn },
  { title: 'Monitoring & Observability', text: 'Instrument full-stack telemetry, SLO dashboards, and proactive anomaly detection.', icon: Server },
  { title: 'AI Automation Solutions', text: 'Integrate AI agents and intelligent workflows to automate repetitive operations.', icon: Bot },
  { title: 'CI/CD Engineering', text: 'Establish robust CI/CD architectures using GitHub Actions and GitLab pipelines.', icon: GitBranch },
  { title: 'Platform Engineering', text: 'Enable product teams with reusable developer platforms and self-service tooling.', icon: Cpu },
]

function ServicesSection() {
  return (
    <section id="services" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Capabilities"
          title="Cloud, DevOps, FinOps, and AI Services Built for Enterprise Scale"
          subtitle="From platform engineering to cost optimization, we provide outcome-focused services to help organizations ship faster and spend smarter."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className="glass group rounded-2xl p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex rounded-xl bg-sky-500/15 p-3 text-sky-500">
                  <Icon size={20} />
                </div>
                <h3 className="section-title mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-[color:var(--text-soft)]">{service.text}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
