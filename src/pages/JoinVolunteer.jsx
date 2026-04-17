import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'

const interests = ['UX Design', 'Visual Design', 'UX Research', 'Design Systems', 'Frontend Dev', 'Content Writing', 'Event Organizing', 'Other']
const sources   = ['Social Media', 'Word of Mouth', 'LinkedIn', 'GitHub', 'Other']

export default function JoinVolunteer() {
  const [state, handleSubmit] = useForm('xvzdaoqv')

  if (state.succeeded) {
    return (
      <div className="page-container py-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-100 mb-3">Welcome to Design Hub India!</h2>
          <p className="text-slate-400 max-w-sm">
            Thanks for applying. We&apos;ll review your submission and get back to you soon.
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="page-container py-12 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl font-bold text-slate-100 mb-2">Join as Volunteer</h1>
        <p className="text-slate-400 mb-10">
          Help shape Design Hub India. We&apos;re looking for passionate designers, writers, developers, and organizers.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-surface-card border border-surface-border text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
              placeholder="Your full name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-surface-card border border-surface-border text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
              placeholder="you@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
          </div>

          {/* Area of Interest */}
          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-slate-300 mb-1.5">
              Area of Interest <span className="text-red-400">*</span>
            </label>
            <select
              id="interest"
              name="interest"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-surface-card border border-surface-border text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              <option value="">Select an area</option>
              {interests.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>

          {/* Skills */}
          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-slate-300 mb-1.5">Skills</label>
            <textarea
              id="skills"
              name="skills"
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg bg-surface-card border border-surface-border text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-y transition-colors"
              placeholder="Tell us about your skills, experience, and what you'd like to contribute..."
            />
          </div>

          {/* How did you find us */}
          <div>
            <label htmlFor="source" className="block text-sm font-medium text-slate-300 mb-1.5">How did you find us?</label>
            <select
              id="source"
              name="source"
              className="w-full px-4 py-2.5 rounded-lg bg-surface-card border border-surface-border text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              <option value="">Select (optional)</option>
              {sources.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            {state.submitting ? 'Submitting…' : 'Submit Application'}
          </button>

          <ValidationError errors={state.errors} className="text-red-400 text-sm text-center" />
        </form>
      </motion.div>
    </div>
  )
}
