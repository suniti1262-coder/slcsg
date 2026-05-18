import { motion } from 'framer-motion'
import { ArrowRight, Bot, BarChart3, CloudCog, Layers3, ShieldCheck, Zap } from 'lucide-react'
import { fadeUp, staggerParent } from '../animations/motion'
import SectionHeading from '../components/SectionHeading'

const products = [
  {
    name: 'CloudPilot',
    tagline: 'Intelligent Cloud Governance',
    description: 'AI-powered platform that continuously monitors, optimizes, and governs your Azure infrastructure — reducing costs and eliminating drift automatically.',
    badge: 'Generally Available',
    badgeColor: 'bg-emerald-400/15 text-emerald-600 dark:text-emerald-300',
    icon: CloudCog,
    gradient: 'from-sky-500/20 to-cyan-400/10',
  },
  {
    name: 'FinSight',
    tagline: 'Cloud Cost Intelligence',
    description: 'Real-time FinOps dashboard with anomaly detection, rightsizing recommendations, and executive-ready budget reporting across subscriptions.',
    badge: 'Generally Available',
    badgeColor: 'bg-emerald-400/15 text-emerald-600 dark:text-emerald-300',
    icon: BarChart3,
    gradient: 'from-cyan-500/20 to-teal-400/10',
  },
  {
    name: 'DeployKit',
    tagline: 'Enterprise CI/CD Accelerator',
    description: 'Pre-built CI/CD templates, pipeline blueprints, and security gates for GitHub Actions and GitLab — ship production workloads in days not months.',
    badge: 'Beta',
    badgeColor: 'bg-amber-400/15 text-amber-600 dark:text-amber-300',
    icon: Zap,
    gradient: 'from-violet-500/20 to-purple-400/10',
  },
  {
    name: 'PlatformOS',
    tagline: 'Internal Developer Platform',
    description: 'Self-service developer portal with golden path templates, Kubernetes namespaces, service catalog, and one-click environment provisioning.',
    badge: 'Coming Soon',
    badgeColor: 'bg-sky-400/15 text-sky-600 dark:text-sky-300',
    icon: Layers3,
    gradient: 'from-blue-500/20 to-indigo-400/10',
  },
  {
    name: 'SecureGuard',
    tagline: 'Cloud Security Posture',
    description: 'Continuous compliance scanning, policy-as-code enforcement, and threat detection across Azure workloads with automated remediation.',
    badge: 'Coming Soon',
    badgeColor: 'bg-sky-400/15 text-sky-600 dark:text-sky-300',
    icon: ShieldCheck,
    gradient: 'from-rose-500/20 to-orange-400/10',
  },
  {
    name: 'AIFlow',
    tagline: 'AI Automation Workflows',
    description: 'Build intelligent automation pipelines using LLMs, event-driven triggers, and cloud-native integrations — automate operations at enterprise scale.',
    badge: 'Coming Soon',
    badgeColor: 'bg-sky-400/15 text-sky-600 dark:text-sky-300',
    icon: Bot,
    gradient: 'from-fuchsia-500/20 to-pink-400/10',
  },
]

function ProductsSection() {
  return (
    <section id="products" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Products"
          title="Purpose-Built Cloud Products for Modern Engineering Teams"
          subtitle="SLCSG Technologies product suite gives enterprises the tools to automate, optimize, and govern their cloud environments at scale."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => {
            const Icon = product.icon
            return (
              <motion.article
                key={product.name}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className={`glass group relative overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-60`} />

                <div className="relative">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="inline-flex rounded-2xl bg-sky-500/15 p-3 text-sky-500 transition group-hover:scale-110">
                      <Icon size={22} />
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="section-title mb-0.5 text-2xl font-bold">{product.name}</h3>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-sky-500">{product.tagline}</p>
                  <p className="mb-5 text-sm leading-relaxed text-[color:var(--text-soft)]">{product.description}</p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 transition hover:gap-2 dark:text-sky-300"
                  >
                    Learn more <ArrowRight size={13} />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection
