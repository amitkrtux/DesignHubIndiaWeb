import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { getAllLearning } from '../content/loaders'
import ContentCard from '../components/ui/ContentCard'
import FilterBar from '../components/ui/FilterBar'
import TagBadge from '../components/ui/TagBadge'

const categoryFilters = [
  { label: 'All',          value: 'all' },
  { label: 'Beginner',     value: 'beginner' },
  { label: 'Intermediate', value: 'intermediate' },
  { label: 'Advanced',     value: 'advanced' },
]

export default function LearningHub() {
  const [category, setCategory] = useState('all')
  const [activeTag, setActiveTag] = useState(null)
  const allContent = getAllLearning()

  const allTags = useMemo(() =>
    [...new Set(allContent.flatMap(item => item.tags ?? []))].sort(),
    [allContent]
  )

  const filtered = useMemo(() =>
    allContent.filter(item =>
      (category === 'all' || item.category === category) &&
      (!activeTag || item.tags?.includes(activeTag))
    ),
    [allContent, category, activeTag]
  )

  return (
    <div className="page-container py-12">
      <motion.h1
        className="text-4xl font-bold text-slate-100 mb-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Learning Hub
      </motion.h1>
      <p className="text-slate-400 mb-8">Articles, guides, and resources for designers at every level.</p>

      <div className="mb-6">
        <FilterBar filters={categoryFilters} active={category} onChange={setCategory} />
      </div>

      {/* Tag cloud */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(t => t === tag ? null : tag)}
              className="transition-opacity"
              style={{ opacity: activeTag && activeTag !== tag ? 0.45 : 1 }}
            >
              <TagBadge label={tag} />
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-slate-500 py-12 text-center">No content matches your filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <ContentCard {...item} linkPrefix="/learning" />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
