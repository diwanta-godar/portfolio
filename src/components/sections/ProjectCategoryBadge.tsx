import { Badge } from '@/components/ui/badge'
import type { ProjectCategory } from '@/content/types'
import { cn } from '@/lib/utils'

const labels: Record<ProjectCategory, string> = {
  frontend: 'Frontend',
  data: 'Data',
  fullstack: 'Full-stack',
}

export function ProjectCategoryBadge({
  category,
  className,
}: {
  category: ProjectCategory
  className?: string
}) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        category === 'data' && 'border-data/30 bg-data/15 text-data',
        category === 'frontend' && 'border-primary/30 bg-primary/10 text-primary',
        className,
      )}
    >
      {labels[category]}
    </Badge>
  )
}
