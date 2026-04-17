import { HashRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from '../components/layout/Layout'
import SkeletonLoader from '../components/ui/SkeletonLoader'
import ErrorBoundary from '../components/ui/ErrorBoundary'

const Home          = lazy(() => import('../pages/Home'))
const About         = lazy(() => import('../pages/About'))
const Events        = lazy(() => import('../pages/Events'))
const EventDetail   = lazy(() => import('../pages/EventDetail'))
const LearningHub   = lazy(() => import('../pages/LearningHub'))
const ArticleDetail = lazy(() => import('../pages/ArticleDetail'))
const Projects      = lazy(() => import('../pages/Projects'))
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'))
const Apps          = lazy(() => import('../pages/Apps'))
const JoinVolunteer = lazy(() => import('../pages/JoinVolunteer'))

const Fallback = () => <SkeletonLoader />

const wrap = (Component) => (
  <ErrorBoundary>
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  </ErrorBoundary>
)

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={wrap(Home)} />
          <Route path="about" element={wrap(About)} />
          <Route path="events" element={wrap(Events)} />
          <Route path="events/:slug" element={wrap(EventDetail)} />
          <Route path="learning" element={wrap(LearningHub)} />
          <Route path="learning/:slug" element={wrap(ArticleDetail)} />
          <Route path="projects" element={wrap(Projects)} />
          <Route path="projects/:slug" element={wrap(ProjectDetail)} />
          <Route path="apps" element={wrap(Apps)} />
          <Route path="join" element={wrap(JoinVolunteer)} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
