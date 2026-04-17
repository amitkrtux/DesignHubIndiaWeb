import { motion } from 'framer-motion'
import CTAButton from '../ui/CTAButton'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HeroSection({ headline, subheadline, ctaPrimary, ctaSecondary }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,165,233,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        className="page-container text-center max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            India&apos;s Premier Design Community
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight mb-6"
        >
          {headline}
        </motion.h1>

        <motion.p variants={item} className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          {subheadline}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
          {ctaPrimary && (
            <CTAButton to={ctaPrimary.to} variant="primary">{ctaPrimary.label}</CTAButton>
          )}
          {ctaSecondary && (
            <CTAButton to={ctaSecondary.to} variant="outline">{ctaSecondary.label}</CTAButton>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
