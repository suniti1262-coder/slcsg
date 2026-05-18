import SectionHeading from '../components/SectionHeading'

const testimonials = [
  {
    quote: 'SLCSG transformed our cloud platform and reduced release friction across teams. Their engineering quality is exceptional.',
    name: 'Anjali Mehra',
    role: 'VP Engineering',
    company: 'NorthStar Retail Group',
  },
  {
    quote: 'Their FinOps practice gave us full spend visibility and unlocked six-figure annual cloud savings within months.',
    name: 'Rahul Sinha',
    role: 'Director of IT Operations',
    company: 'Quantive Health Systems',
  },
  {
    quote: 'From architecture to automation, SLCSG acted like an extension of our core platform team and accelerated delivery significantly.',
    name: 'Priya Nair',
    role: 'CTO',
    company: 'Apex Logistics Technologies',
  },
]

function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Enterprise Leaders Say"
          subtitle="Client feedback from modernization and cloud engineering engagements."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="glass rounded-2xl p-6">
              <p className="mb-5 text-sm leading-relaxed text-[color:var(--text-soft)]">"{item.quote}"</p>
              <p className="section-title text-base font-semibold">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-cyan-600 dark:text-cyan-300">{item.role}</p>
              <p className="mt-1 text-sm text-[color:var(--text-soft)]">{item.company}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
