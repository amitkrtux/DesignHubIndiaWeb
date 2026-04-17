import { getAllEvents, getAllLearning, getAllProjects, getAllApps } from '../content/loaders'
import HeroSection from '../components/sections/HeroSection'
import SectionPreview from '../components/sections/SectionPreview'
import CTAButton from '../components/ui/CTAButton'

export default function Home() {
  const events   = getAllEvents().slice(0, 3)
  const learning = getAllLearning().slice(0, 3)
  const projects = getAllProjects().slice(0, 3)
  const apps     = getAllApps().slice(0, 3)

  return (
    <>
      <HeroSection
        headline="Where Designers Learn, Build, and Lead"
        subheadline="A premium community for UX/product designers across India. Workshops, mentorship, open-source projects, and more."
        ctaPrimary={{ to: '/join', label: 'Join as Volunteer' }}
        ctaSecondary={{ to: '/events', label: 'Explore Events' }}
      />

      <div className="page-container pb-16 space-y-4">
        <SectionPreview title="Upcoming Events"   items={events}   linkTo="/events"   emptyMessage="No events yet. Check back soon." />
        <SectionPreview title="Featured Learning"  items={learning} linkTo="/learning" emptyMessage="Learning content coming soon." />
        <SectionPreview title="Active Projects"    items={projects} linkTo="/projects" emptyMessage="No projects yet." />
        <SectionPreview title="Gamified Apps"      items={apps}     linkTo="/apps"     emptyMessage="Apps coming soon." />
      </div>

      {/* CTA Banner */}
      <section className="border-t border-surface-border bg-surface-card/50">
        <div className="page-container py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Ready to grow with us?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Join a community of passionate designers shaping the future of design in India.
          </p>
          <CTAButton to="/join" variant="primary">Become a Volunteer</CTAButton>
        </div>
      </section>
    </>
  )
}
