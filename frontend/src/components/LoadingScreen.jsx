import { motion } from 'framer-motion'
import LogoMark from './LogoMark'

function LoadingScreen({ companyName, logoSrc }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/90"
    >
      <div className="text-center text-slate-100">
        <div className="mb-6 flex justify-center">
          <LogoMark logoSrc={logoSrc} companyName={companyName} className="h-24 w-24" />
        </div>
        <p className="section-title mb-4 text-xl font-semibold">Bootstrapping cloud-native experiences</p>
        <div className="mx-auto h-1.5 w-52 overflow-hidden rounded-full bg-slate-700">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-sky-500"
            initial={{ x: '-100%' }}
            animate={{ x: '120%' }}
            transition={{ repeat: Infinity, duration: 1.05, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
