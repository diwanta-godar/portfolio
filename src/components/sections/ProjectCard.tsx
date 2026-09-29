import { Code2, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCategoryBadge } from '@/components/sections/ProjectCategoryBadge'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { Project } from '@/content/types'
import { cn } from '@/lib/utils'

type ProjectCardProps = {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'group flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-primary/20 focus-within:ring-2 focus-within:ring-ring dark:bg-card/50 dark:backdrop-blur-sm dark:border-white/10',
        className,
      )}
    >
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden border-b border-border bg-muted">
          <img
            src={project.image}
            alt=""
            width={640}
            height={360}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </Link>
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg leading-snug">
            <Link
              to={`/projects/${project.slug}`}
              className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {project.title}
            </Link>
          </CardTitle>
          <ProjectCategoryBadge category={project.category} />
        </div>
        <p className="text-sm text-muted-foreground">{project.summary}</p>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <Badge key={tech} variant="outline" className="text-xs font-normal">
            {tech}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="mt-auto flex gap-2 pt-0">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            aria-label={`Live demo for ${project.title}`}
          >
            <ExternalLink className="size-3.5" />
            Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
            aria-label={`Repository for ${project.title}`}
          >
            <Code2 className="size-3.5" />
            Code
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
