import { motion } from 'framer-motion'
import { getAllApps } from '../content/loaders'
import TagBadge from '../components/ui/TagBadge'
import CTAButton from '../components/ui/CTAButton'

export default function Apps() {
  const apps = getAllApps()

  return (
    <div className="page-container py-12">
      <motion.h1
        className="text-4xl font-bold text-slate-100 mb-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Gamified Learning Apps
      </motion.h1>
      <p className="text-slate-400 mb-10">Interactive tools to sharpen specific design skills.</p>

      {apps.length === 0 ? (
        <p className="text-slate-500 py-12 text-center">Apps coming soon.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <motion.div
              key={app.slug}
              className="card-base flex flex-col"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              {app.image && (
                <div className="rounded-lg overflow-hidden mb-4 h-40 bg-surface-dark">
                  <img src={app.image} alt={app.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="mb-1">
                {app.skill_focus && (
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {app.skill_focus}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-slate-100 mb-2">{app.title}</h3>
              {app.description && (
                <p className="text-sm text-slate-400 line-clamp-3 flex-1">{app.description}</p>
              )}
              {app.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 my-3">
                  {app.tags.map(tag => <TagBadge key={tag} label={tag} />)}
                </div>
              )}
              <div className="mt-auto pt-3">
                <CTAButton href={app.try_url} variant="outline">Try Now</CTAButton>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
