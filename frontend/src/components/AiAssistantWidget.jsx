import { MessageSquareText, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

function AiAssistantWidget() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <aside className="fixed bottom-5 right-4 z-40 hidden w-72 rounded-2xl border border-cyan-300/25 bg-white/80 p-4 shadow-xl backdrop-blur lg:block dark:bg-slate-900/75">
        <div className="mb-2 flex items-center justify-between">
          <p className="section-title text-sm font-semibold">AI Cloud Assistant</p>
          <Sparkles size={15} className="text-cyan-500" />
        </div>
        <p className="mb-3 text-xs text-[color:var(--text-soft)]">Ask for architecture recommendations, savings opportunities, or delivery timelines.</p>
        <button type="button" onClick={() => setShowModal(true)} className="brand-btn w-full text-xs">
          <MessageSquareText size={14} className="mr-1" />
          Start AI Conversation
        </button>
      </aside>

      {showModal ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="glass max-w-md rounded-3xl border border-cyan-300/25 p-8 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex justify-center">
              <Sparkles size={32} className="text-cyan-500" />
            </div>
            <h3 className="section-title mb-3 text-2xl font-bold">Coming Soon!</h3>
            <p className="mb-4 text-sm text-[color:var(--text-soft)]">
              Our <span className="font-semibold text-sky-600 dark:text-sky-300">AI-powered Cloud Intelligence Assistant</span> is being trained on cloud architecture patterns, FinOps best practices, and DevOps automation strategies.
            </p>
            <p className="mb-6 text-xs text-[color:var(--text-soft)]">
              Soon you'll be able to ask about infrastructure optimization, cost savings opportunities, deployment strategies, and more — powered by SLCSG Technologies' cloud engineering expertise.
            </p>
            <div className="rounded-xl bg-sky-500/15 p-3 text-left text-xs text-[color:var(--text-soft)] mb-5">
              <p className="font-semibold text-sky-600 dark:text-sky-300 mb-1">🚀 What's Next:</p>
              <ul className="space-y-1">
                <li>• Real-time cloud architecture recommendations</li>
                <li>• Intelligent cost optimization analysis</li>
                <li>• DevOps automation workflow suggestions</li>
                <li>• Enterprise modernization roadmaps</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105"
            >
              <X size={14} />
              Close
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </>
  )
}

export default AiAssistantWidget
