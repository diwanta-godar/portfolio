import { GraduationCap } from 'lucide-react'
import type { EducationItem } from '@/content/types'

type EducationTimelineProps = {
  items: EducationItem[]
}

export function EducationTimeline({ items }: EducationTimelineProps) {
  return (
    <ol className="relative space-y-8 border-l-2 border-primary/30 pl-6 sm:pl-8">
      {items.map((item) => (
        <li key={item.id} className="relative group">
          <span
            className="absolute -left-[calc(0.75rem+9px)] top-1.5 flex size-6 items-center justify-center rounded-full border-2 border-background bg-primary text-white shadow-sm sm:-left-[calc(1rem+9px)] sm:size-7"
            aria-hidden
          >
            <GraduationCap className="size-3.5" />
          </span>
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 text-left shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/40">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                {item.degree}
              </h3>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {item.period}
              </span>
            </div>
            <p className="mt-1.5 font-medium text-primary text-base">
              {item.institution}
            </p>
            {item.description && (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            )}
            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-foreground/90">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
