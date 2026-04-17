import { useParams, Navigate, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllEvents, getBySlug } from '../content/loaders'
import TagBadge from '../components/ui/TagBadge'
import CTAButton from '../components/ui/CTAButton'

export default function EventDetail() {
  const { slug } = useParams()
  const event = getBySlug(getAllEvents, slug)

  if (!event) return <Navigate to="/events" replace />

  const formattedDate = event.date
    ? new Date(event.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    : null

  return (
    <div className="page-container py-12 max-w-3xl mx-auto">
      <Link to="/events" className="text-sm text-accent hover:text-accent-hover mb-6 inline-flex items-center gap-1">
        &larr; Back to Events
      </Link>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {event.type && (
            <span className="px-2 py-0.5 text-xs rounded-full border border-accent/30 text-accent capitalize">{event.type}</span>
          )}
          {event.status && (
            <span className={`px-2 py-0.5 text-xs rounded-full font-medium capitalize ${
              event.status === 'upcoming' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-slate-700 text-slate-400'
            }`}>{event.status}</span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">{event.title}</h1>

        {formattedDate && <p className="text-slate-400 mb-2">{formattedDate}</p>}
        {event.location && <p className="text-slate-500 text-sm mb-4">{event.location}</p>}

        {event.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {event.tags.map(tag => <TagBadge key={tag} label={tag} />)}
          </div>
        )}

        {event.description && (
          <p className="text-slate-300 text-lg leading-relaxed mb-8">{event.description}</p>
        )}

        {event.speakers?.length > 0 && (
          <div className="card-base mb-8">
            <h2 className="font-semibold text-slate-100 mb-3">Speakers</h2>
            <ul className="space-y-1">
              {event.speakers.map(s => (
                <li key={s} className="text-sm text-slate-400">{s}</li>
              ))}
            </ul>
          </div>
        )}

        {event.content && (
          <article className="prose prose-invert prose-sm max-w-none mb-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{event.content}</ReactMarkdown>
          </article>
        )}

        {event.cta_link && (
          <CTAButton href={event.cta_link} variant="primary">Register / Learn More</CTAButton>
        )}
      </div>
    </div>
  )
}
