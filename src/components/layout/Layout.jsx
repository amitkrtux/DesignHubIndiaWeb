import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from '../ui/PageTransition'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
