import { motion } from 'framer-motion'
import { fadeUp } from '../animations/motion'

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">{eyebrow}</p>
      <h2 className="section-title mb-4 text-3xl font-bold leading-tight text-[color:var(--text-main)] md:text-4xl">{title}</h2>
      <p className="text-base text-[color:var(--text-soft)] md:text-lg">{subtitle}</p>
    </motion.div>
  )
}

export default SectionHeading
