function LogoMark({ logoSrc, companyName, className = 'h-10 w-10', showText = false }) {
  return (
    <div className="flex items-center gap-3">
      {logoSrc ? (
        <img src={logoSrc} alt={`${companyName} logo`} className={`${className} rounded-xl object-contain bg-white/70 p-1`} />
      ) : (
        <div className={`${className} flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 text-xs font-bold text-slate-50`}>
          SL
        </div>
      )}
      {showText ? <span className="section-title text-base font-semibold tracking-tight">{companyName}</span> : null}
    </div>
  )
}

export default LogoMark
