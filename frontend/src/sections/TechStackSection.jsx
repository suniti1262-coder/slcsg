import { motion } from 'framer-motion'
import { Boxes, Cloud, Container, Cpu, GitBranch, HardDriveDownload, Layers, MonitorCog, Orbit, Server, Settings, Workflow } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const stack = [
  { name: 'Azure', icon: Cloud },
  { name: 'Kubernetes', icon: Container },
  { name: 'Docker', icon: Boxes },
  { name: 'Terraform', icon: Settings },
  { name: 'GitHub Actions', icon: Workflow },
  { name: 'GitLab CI/CD', icon: GitBranch },
  { name: 'React', icon: Orbit },
  { name: 'Java', icon: Cpu },
  { name: 'Spring Boot', icon: Layers },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: MonitorCog },
  { name: 'Linux', icon: HardDriveDownload },
]

function TechStackSection() {
  return (
    <section id="technology" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Technology"
          title="Modern Engineering Stack for High-Scale Delivery"
          subtitle="We combine cloud-native platforms, automation toolchains, and application frameworks to build resilient enterprise systems."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.04, duration: 0.4 }}
                className="glass group rounded-2xl p-5"
              >
                <div className="mb-3 inline-flex rounded-xl bg-cyan-400/15 p-3 text-cyan-500 transition group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="section-title text-lg font-semibold">{item.name}</h3>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStackSection
