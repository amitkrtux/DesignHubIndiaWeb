import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { getAllEvents } from '../content/loaders'
import ContentCard from '../components/ui/ContentCard'
import FilterBar from '../components/ui/FilterBar'

const statusFilters = [
  { label: 'All',      value: 'all' },
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Past',     value: 'past' },
]

const typeFilters = [
  { label: 'All',     value: 'all' },
  { label: 'Online',  value: 'online' },
  { label: 'Offline', value: 'offline' },
]

export default function Events() {
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter]     = useState('all')
  const allEvents = getAllEvents()

  const filtered = useMemo(() =>
    allEvents.filter(e =>
      (statusFilter === 'all' || e.status === statusFilter) &&
      (typeFilter   === 'all' || e.type   === typeFilter)
    ),
    [allEvents, statusFilter, typeFilter]
  )

  return (
    <div className="page-container py-12">
      <motion.h1
        className="text-4xl font-bold text-slate-100 mb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Events
      </motion.h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <FilterBar filters={statusFilters} active={statusFilter} onChange={setStatusFilter} />
        <FilterBar filters={typeFilters}   active={typeFilter}   onChange={setTypeFilter} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-slate-500 py-12 text-center">No events match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event, i) => (
            <motion.div
              key={event.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <ContentCard {...event} linkPrefix="/events" />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
