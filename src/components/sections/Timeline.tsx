import type { ExperienceItem } from '@/content/types'

type TimelineProps = {
  items: ExperienceItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6 md:pl-8">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span
            className="absolute -left-[calc(0.75rem+1px)] top-1.5 size-3 rounded-full border-2 border-background bg-primary md:-left-[calc(0.875rem+1px)]"
            aria-hidden
          />
          <div className="rounded-xl border border-border bg-card p-5 text-left shadow-sm">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">{item.role}</h3>
              <p className="text-sm text-muted-foreground">{item.period}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-primary">{item.company}</p>
            <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/90">
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
