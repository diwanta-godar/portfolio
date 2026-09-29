import { Link } from 'react-router-dom'
import { Hero } from '@/components/sections/Hero'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { SkillsTeaser } from '@/components/sections/SkillsTeaser'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { Button } from '@/components/ui/button'
import { getFeaturedProjects } from '@/content/projects'

export function HomePage() {
  const featured = getFeaturedProjects()

  return (
    <>
      <Hero />
      <StatsStrip />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          eyebrow="Work"
          title="Featured projects"
          description="Interfaces, dashboards, and full-stack tools with measurable impact."
          action={
            <Button render={<Link to="/projects" />} variant="outline">
              View all
            </Button>
          }
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <SkillsTeaser />
    </>
  )
}
