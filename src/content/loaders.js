import matter from 'gray-matter'

// All markdown files are imported as raw strings at build time via Vite glob.
// The { eager: true, query: '?raw' } combination reads them synchronously during bundling.
const eventFiles    = import.meta.glob('/content/events/*.md',   { eager: true, query: '?raw', import: 'default' })
const learningFiles = import.meta.glob('/content/learning/*.md', { eager: true, query: '?raw', import: 'default' })
const projectFiles  = import.meta.glob('/content/projects/*.md', { eager: true, query: '?raw', import: 'default' })
const appFiles      = import.meta.glob('/content/apps/*.md',     { eager: true, query: '?raw', import: 'default' })

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

function parseCollection(files) {
  return Object.entries(files)
    .map(([path, raw]) => {
      const { data, content } = matter(raw)
      return {
        slug: slugFromPath(path),
        content,
        ...data,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export const getAllEvents   = () => parseCollection(eventFiles)
export const getAllLearning = () => parseCollection(learningFiles)
export const getAllProjects = () => parseCollection(projectFiles)
export const getAllApps     = () => parseCollection(appFiles)

export function getBySlug(collectionFn, slug) {
  return collectionFn().find(item => item.slug === slug) ?? null
}
