import { motion } from 'framer-motion'
import CTAButton from '../components/ui/CTAButton'

const personas = [
  { title: 'Students',             desc: 'Just starting out and want to learn from practitioners and mentors.' },
  { title: 'Working Designers',    desc: 'Mid-career professionals looking to upskill, network, and contribute to the community.' },
  { title: 'Educators',            desc: 'Teachers and trainers who want to share knowledge and shape the next generation.' },
  { title: 'Design Enthusiasts',   desc: 'Anyone passionate about design who wants to be part of a growing movement.' },
]

const stats = [
  { label: 'Members',   value: '500+' },
  { label: 'Events',    value: '30+' },
  { label: 'Projects',  value: '10+' },
  { label: 'Cities',    value: '8+' },
]

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <div className="page-container py-16 space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-slate-100 mb-4">About Design Hub India</h1>
        <p className="text-lg text-slate-400">
          We are a community-driven organization dedicated to advancing design practice across India — through education, collaboration, and open contribution.
        </p>
      </motion.div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card-base">
          <h2 className="text-lg font-semibold text-accent mb-3">Our Vision</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            To build India's most inclusive and impactful design community — where every designer, regardless of background or geography, has access to world-class learning, mentorship, and collaboration.
          </p>
        </div>
        <div className="card-base">
          <h2 className="text-lg font-semibold text-accent mb-3">Our Mission</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            To create structured pathways for designers to learn, contribute, and grow — through workshops, open-source projects, gamified tools, and a strong mentor network.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ label, value }) => (
          <div key={label} className="card-base text-center">
            <p className="text-3xl font-bold text-accent">{value}</p>
            <p className="text-sm text-slate-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Who should join */}
      <div>
        <h2 className="section-heading mb-6">Who Should Join?</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
        >
          {personas.map(({ title, desc }) => (
            <motion.div key={title} variants={itemVariant} className="card-base">
              <h3 className="font-semibold text-slate-100 mb-2">{title}</h3>
              <p className="text-sm text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <CTAButton to="/join" variant="primary">Join as Volunteer</CTAButton>
      </div>
    </div>
  )
}
