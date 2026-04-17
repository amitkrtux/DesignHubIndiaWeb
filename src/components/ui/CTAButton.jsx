import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const base = 'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-dark'

const variants = {
  primary: 'bg-accent hover:bg-accent-hover text-white',
  outline: 'border border-accent text-accent hover:bg-accent/10',
  ghost:   'text-slate-300 hover:text-white hover:bg-white/10',
}

export default function CTAButton({ children, to, href, variant = 'primary', onClick, className = '' }) {
  const cls = `${base} ${variants[variant]} ${className}`

  const inner = (
    <motion.span
      className={cls}
      whileHover={{ boxShadow: variant === 'primary' ? '0 0 20px rgba(14,165,233,0.35)' : 'none' }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  )

  if (to) return <Link to={to}>{inner}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
  return <button onClick={onClick}>{inner}</button>
}
