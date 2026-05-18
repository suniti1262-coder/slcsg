import SectionHeading from '../components/SectionHeading'

const posts = [
  {
    title: 'How FinOps Aligns Engineering and Finance in Cloud Programs',
    tag: 'FinOps',
  },
  {
    title: 'Designing Reliable AKS Platforms for Enterprise Workloads',
    tag: 'Kubernetes',
  },
  {
    title: 'Automation Playbook: From Manual Deployments to Continuous Delivery',
    tag: 'DevOps',
  },
]

function BlogSection() {
  return (
    <section id="blog" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Insights"
          title="Engineering and Cloud Strategy Perspectives"
          subtitle="Thought leadership and practical guidance from our cloud and platform experts."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="glass rounded-2xl p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-600 dark:text-cyan-300">{post.tag}</p>
              <h3 className="section-title text-xl font-semibold">{post.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
