import { PageContainer } from '@/components/layout/PageContainer'
import { PageMeta } from '@/components/layout/PageMeta'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { projects } from '@/content/projects'

export function ProjectsPage() {
  return (
    <>
      <PageMeta title="Projects" path="/projects" />
      <PageContainer>
        <div className="mb-10 max-w-2xl text-left space-y-2">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-primary">
            Portfolio
          </p>
          <h1 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            All Projects
          </h1>
          <p className="text-base text-muted-foreground font-sans">
            Full-stack web applications, e-commerce platforms, and interactive user portals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </PageContainer>
    </>
  )
}
