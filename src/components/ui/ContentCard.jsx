import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TagBadge from './TagBadge'

export default function ContentCard({ title, description, date, tags = [], image, slug, linkPrefix }) {
  const formatted = date ? new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : null

  return (
    <Link to={`${linkPrefix}/${slug}`} className="block group">
      <motion.div
        className="card-base h-full flex flex-col"
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {image && (
          <div className="rounded-lg overflow-hidden mb-4 h-40 bg-surface-dark">
            <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
          </div>
        )}
        <h3 className="font-semibold text-slate-100 group-hover:text-accent transition-colors mb-1 html-light:text-slate-900">
          {title}
        </h3>
        {formatted && <p className="text-xs text-slate-500 mb-2">{formatted}</p>}
        {description && (
          <p className="text-sm text-slate-400 line-clamp-3 flex-1">{description}</p>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.slice(0, 3).map(tag => <TagBadge key={tag} label={tag} />)}
          </div>
        )}
      </motion.div>
    </Link>
  )
}
