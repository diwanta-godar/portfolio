import { site } from '@/content/site'

export function StatsStrip() {
  return (
    <section className="border-b border-border bg-muted/20" aria-label="Highlights">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
        {site.stats.map((stat) => (
          <div key={stat.label} className="text-left">
            <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
