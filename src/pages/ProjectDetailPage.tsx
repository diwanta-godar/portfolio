import { ArrowLeft, ArrowRight, Code2, ExternalLink } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PageContainer } from '@/components/layout/PageContainer'
import { PageMeta } from '@/components/layout/PageMeta'
import { ProjectCategoryBadge } from '@/components/sections/ProjectCategoryBadge'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { getAdjacentProject, getProjectBySlug } from '@/content/projects'

const ProjectChart = lazy(() =>
  import('@/components/sections/ProjectChart').then((m) => ({ default: m.ProjectChart })),
)

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined
  const next = slug ? getAdjacentProject(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <>
      <PageMeta title={project.title} description={project.summary} path={`/projects/${slug}`} />
      <PageContainer narrow>
        <Link
          to="/projects"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          All projects
        </Link>

        <div className="overflow-hidden rounded-xl border border-border">
          <img
            src={project.image}
            alt=""
            width={960}
            height={540}
            className="aspect-video w-full object-cover"
          />
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-left">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <ProjectCategoryBadge category={project.category} />
            </div>
            <h1 className="text-3xl font-semibold sm:text-4xl">{project.title}</h1>
            <p className="mt-3 text-muted-foreground">{project.summary}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.demoUrl && (
              <Button render={<a href={project.demoUrl} target="_blank" rel="noreferrer" />}>
                <ExternalLink className="size-4" data-icon="inline-start" />
                Live demo
              </Button>
            )}
            {project.repoUrl && (
              <Button
                variant="outline"
                render={<a href={project.repoUrl} target="_blank" rel="noreferrer" />}
              >
                <Code2 className="size-4" data-icon="inline-start" />
                Repository
              </Button>
            )}
          </div>
        </div>

        <section className="prose prose-neutral dark:prose-invert mt-10 max-w-none text-left">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-2 text-muted-foreground">{project.description}</p>
        </section>

        <section className="mt-10 text-left">
          <h2 className="text-xl font-semibold">Outcomes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {project.metrics && project.metrics.length > 0 && (
          <section className="mt-10 grid gap-4 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <Card key={metric.label}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-display text-2xl font-semibold">{metric.value}</p>
                </CardContent>
              </Card>
            ))}
          </section>
        )}

        {project.chartData && project.chartData.length > 0 && (
          <section className="mt-10 rounded-xl border border-border bg-card p-4 sm:p-6">
            <h2 className="mb-4 text-xl font-semibold text-left">Data snapshot</h2>
            <Suspense fallback={<Skeleton className="h-64 w-full" />}>
              <ProjectChart data={project.chartData} />
            </Suspense>
          </section>
        )}

        <section className="mt-10 text-left">
          <h2 className="text-xl font-semibold">Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {next && (
          <div className="mt-12 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">Next project</p>
            <Link
              to={`/projects/${next.slug}`}
              className="mt-2 inline-flex items-center gap-2 text-lg font-medium hover:text-primary"
            >
              {next.title}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </PageContainer>
    </>
  )
}
