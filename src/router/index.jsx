import { HashRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from '../components/layout/Layout'
import SkeletonLoader from '../components/ui/SkeletonLoader'

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

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Suspense fallback={<Fallback />}><Home /></Suspense>} />
          <Route path="about" element={<Suspense fallback={<Fallback />}><About /></Suspense>} />
          <Route path="events" element={<Suspense fallback={<Fallback />}><Events /></Suspense>} />
          <Route path="events/:slug" element={<Suspense fallback={<Fallback />}><EventDetail /></Suspense>} />
          <Route path="learning" element={<Suspense fallback={<Fallback />}><LearningHub /></Suspense>} />
          <Route path="learning/:slug" element={<Suspense fallback={<Fallback />}><ArticleDetail /></Suspense>} />
          <Route path="projects" element={<Suspense fallback={<Fallback />}><Projects /></Suspense>} />
          <Route path="projects/:slug" element={<Suspense fallback={<Fallback />}><ProjectDetail /></Suspense>} />
          <Route path="apps" element={<Suspense fallback={<Fallback />}><Apps /></Suspense>} />
          <Route path="join" element={<Suspense fallback={<Fallback />}><JoinVolunteer /></Suspense>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
