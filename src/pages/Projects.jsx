import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { getAllProjects } from '../content/loaders'
import ContentCard from '../components/ui/ContentCard'
import FilterBar from '../components/ui/FilterBar'

const statusFilters = [
  { label: 'All',       value: 'all' },
  { label: 'Active',    value: 'active' },
  { label: 'Completed', value: 'completed' },
  { label: 'Paused',    value: 'paused' },
]

export default function Projects() {
  const [status, setStatus] = useState('all')
  const allProjects = getAllProjects()

  const filtered = useMemo(() =>
    allProjects.filter(p => status === 'all' || p.status === status),
    [allProjects, status]
  )

  return (
    <div className="page-container py-12">
      <motion.h1
        className="text-4xl font-bold text-slate-100 mb-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Projects &amp; Initiatives
      </motion.h1>
      <p className="text-slate-400 mb-8">Open initiatives you can join and contribute to.</p>

      <div className="mb-8">
        <FilterBar filters={statusFilters} active={status} onChange={setStatus} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-slate-500 py-12 text-center">No projects match your filter.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <ContentCard {...project} linkPrefix="/projects" />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
