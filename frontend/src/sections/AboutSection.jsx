import { motion } from 'framer-motion'
import { scaleIn } from '../animations/motion'
import SectionHeading from '../components/SectionHeading'

const timeline = [
  { year: '2023', title: 'Founded with an Automation-First Mission', note: 'Started as a cloud-native engineering startup focused on enterprise modernization.' },
  { year: '2024', title: 'Expanded Platform Engineering Practice', note: 'Built reusable accelerators for CI/CD, infrastructure automation, and AKS governance.' },
  { year: '2025', title: 'FinOps + AI Operations Integration', note: 'Launched cost analytics and AI-powered operational intelligence for cloud environments.' },
]

function AboutSection() {
  return (
    <section id="about" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="About SLCSG"
          title="Cloud-Native Engineering with an Automation-First DNA"
          subtitle="We help enterprises modernize applications and infrastructure using scalable architecture patterns, DevOps maturity, and FinOps discipline."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass rounded-3xl p-6">
            <h3 className="section-title mb-4 text-2xl font-semibold">How We Build</h3>
            <p className="mb-6 text-[color:var(--text-soft)]">
              Our engineering teams combine cloud architecture, application development, and platform automation to create secure and scalable systems that grow with business demand. Every implementation is backed by observability, governance, and measurable outcomes.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/60 p-4 text-center dark:bg-slate-800/60">
                <p className="section-title text-2xl font-semibold">95%</p>
                <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--text-soft)]">Automation Coverage</p>
              </div>
              <div className="rounded-2xl bg-white/60 p-4 text-center dark:bg-slate-800/60">
                <p className="section-title text-2xl font-semibold">24/7</p>
                <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--text-soft)]">Platform Reliability</p>
              </div>
              <div className="rounded-2xl bg-white/60 p-4 text-center dark:bg-slate-800/60">
                <p className="section-title text-2xl font-semibold">3x</p>
                <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--text-soft)]">Delivery Speed</p>
              </div>
            </div>
          </div>

          <motion.div
            className="glass rounded-3xl p-6"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="section-title mb-5 text-2xl font-semibold">Company Highlights</h3>
            <div className="space-y-4">
              {timeline.map((item) => (
                <div key={item.year} className="relative rounded-2xl border border-sky-300/25 bg-white/55 p-4 dark:bg-slate-800/60">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-500">{item.year}</p>
                  <h4 className="section-title mb-1 text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-[color:var(--text-soft)]">{item.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
