import { useParams, Navigate, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllProjects, getBySlug } from '../content/loaders'
import TagBadge from '../components/ui/TagBadge'
import CTAButton from '../components/ui/CTAButton'

const statusColors = {
  active:    'bg-green-500/10 text-green-400 border-green-500/20',
  completed: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  paused:    'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getBySlug(getAllProjects, slug)

  if (!project) return <Navigate to="/projects" replace />

  return (
    <div className="page-container py-12 max-w-3xl mx-auto">
      <Link to="/projects" className="text-sm text-accent hover:text-accent-hover mb-6 inline-flex items-center gap-1">
        &larr; Back to Projects
      </Link>

      <div className="mt-6">
        {project.status && (
          <span className={`px-2 py-0.5 text-xs rounded-full font-medium capitalize border ${statusColors[project.status] ?? ''}`}>
            {project.status}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-4 mb-4">{project.title}</h1>
        <p className="text-slate-400 text-lg mb-6">{project.description}</p>

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => <TagBadge key={tag} label={tag} />)}
          </div>
        )}

        {project.goals?.length > 0 && (
          <div className="card-base mb-6">
            <h2 className="font-semibold text-slate-100 mb-3">Goals</h2>
            <ul className="space-y-2">
              {project.goals.map((g, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="mt-0.5 text-accent">&#10003;</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.contributors?.length > 0 && (
          <div className="mb-6">
            <h2 className="font-semibold text-slate-100 mb-3">Contributors</h2>
            <div className="flex flex-wrap gap-2">
              {project.contributors.map(name => (
                <span key={name} className="px-3 py-1 text-sm rounded-full bg-surface-card border border-surface-border text-slate-300">
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.content && (
          <article className="prose prose-invert prose-sm max-w-none mb-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content}</ReactMarkdown>
          </article>
        )}

        <CTAButton to={project.join_link ?? '/join'} variant="primary">Join This Project</CTAButton>
      </div>
    </div>
  )
}
