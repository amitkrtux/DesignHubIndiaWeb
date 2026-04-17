import { useParams, Navigate, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllLearning, getBySlug } from '../content/loaders'
import TagBadge from '../components/ui/TagBadge'

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = getBySlug(getAllLearning, slug)

  if (!article) return <Navigate to="/learning" replace />

  const readTime = Math.max(1, Math.ceil(article.content.split(' ').length / 200))
  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
    : null

  return (
    <div className="page-container py-12 max-w-3xl mx-auto">
      <Link to="/learning" className="text-sm text-accent hover:text-accent-hover mb-6 inline-flex items-center gap-1">
        &larr; Back to Learning Hub
      </Link>

      <div className="mt-6">
        {article.category && (
          <span className="px-2 py-0.5 text-xs rounded-full border border-accent/30 text-accent capitalize mr-2">
            {article.category}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-4 mb-3">{article.title}</h1>

        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
          {formattedDate && <span>{formattedDate}</span>}
          <span>{readTime} min read</span>
        </div>

        {article.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map(tag => <TagBadge key={tag} label={tag} />)}
          </div>
        )}

        <article className="prose prose-invert prose-sm max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  )
}
