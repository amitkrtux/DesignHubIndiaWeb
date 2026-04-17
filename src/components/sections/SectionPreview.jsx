import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ContentCard from '../ui/ContentCard'

export default function SectionPreview({ title, items = [], linkTo, emptyMessage = 'Nothing here yet.' }) {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-heading">{title}</h2>
        <Link
          to={linkTo}
          className="text-sm text-accent hover:text-accent-hover font-medium transition-colors"
        >
          View all &rarr;
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="text-slate-500 text-sm">{emptyMessage}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <ContentCard {...item} linkPrefix={linkTo} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}
