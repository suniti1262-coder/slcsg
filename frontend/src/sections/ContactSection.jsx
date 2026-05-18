import { Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

function ContactSection() {
  return (
    <section id="contact" className="section-pad pb-10">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Build Your Next Cloud and Application Modernization Initiative"
          subtitle="Talk with our experts to define architecture, automation roadmap, and cost optimization strategy."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="glass rounded-3xl p-6" aria-label="Contact form">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-left text-sm">
                <span className="mb-1 block text-[color:var(--text-soft)]">Name</span>
                <input className="w-full rounded-xl border border-sky-300/25 bg-white/60 px-3 py-2 outline-none ring-sky-400/30 transition focus:ring dark:bg-slate-800/60" type="text" placeholder="Your name" />
              </label>
              <label className="text-left text-sm">
                <span className="mb-1 block text-[color:var(--text-soft)]">Business Email</span>
                <input className="w-full rounded-xl border border-sky-300/25 bg-white/60 px-3 py-2 outline-none ring-sky-400/30 transition focus:ring dark:bg-slate-800/60" type="email" placeholder="name@company.com" />
              </label>
            </div>
            <label className="mt-4 block text-left text-sm">
              <span className="mb-1 block text-[color:var(--text-soft)]">How can we help?</span>
              <textarea rows="5" className="w-full rounded-xl border border-sky-300/25 bg-white/60 px-3 py-2 outline-none ring-sky-400/30 transition focus:ring dark:bg-slate-800/60" placeholder="Tell us about your project, goals, and timeline." />
            </label>
            <button type="submit" className="brand-btn mt-4">Request Consultation</button>
          </form>

          <div className="space-y-4">
            <article className="glass rounded-2xl p-5 text-left">
              <div className="mb-2 flex items-center gap-2 text-cyan-600 dark:text-cyan-300">
                <Mail size={16} />
                <p className="text-xs font-semibold uppercase tracking-[0.14em]">Email</p>
              </div>
              <p className="section-title text-lg font-semibold">contact@slcsgtech.com</p>
            </article>
            <article className="glass rounded-2xl p-5 text-left">
              <div className="mb-2 flex items-center gap-2 text-cyan-600 dark:text-cyan-300">
                <Phone size={16} />
                <p className="text-xs font-semibold uppercase tracking-[0.14em]">Phone</p>
              </div>
              <p className="section-title text-lg font-semibold">+91 98765 43210</p>
            </article>
            <article className="glass rounded-2xl p-5 text-left">
              <div className="mb-2 flex items-center gap-2 text-cyan-600 dark:text-cyan-300">
                <MapPin size={16} />
                <p className="text-xs font-semibold uppercase tracking-[0.14em]">Office</p>
              </div>
              <p className="section-title text-lg font-semibold">Bangalore, Karnataka, India</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
