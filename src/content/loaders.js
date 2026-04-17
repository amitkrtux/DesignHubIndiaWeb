import yaml from 'js-yaml'

const eventFiles    = import.meta.glob('/content/events/*.md',   { eager: true, query: '?raw', import: 'default' })
const learningFiles = import.meta.glob('/content/learning/*.md', { eager: true, query: '?raw', import: 'default' })
const projectFiles  = import.meta.glob('/content/projects/*.md', { eager: true, query: '?raw', import: 'default' })
const appFiles      = import.meta.glob('/content/apps/*.md',     { eager: true, query: '?raw', import: 'default' })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw.trim() }
  try {
    const data = yaml.load(match[1]) || {}
    return { data, content: match[2].trim() }
  } catch {
    return { data: {}, content: raw.trim() }
  }
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

function parseCollection(files) {
  return Object.entries(files)
    .map(([path, raw]) => {
      const { data, content } = parseFrontmatter(raw)
      return { slug: slugFromPath(path), content, ...data }
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
