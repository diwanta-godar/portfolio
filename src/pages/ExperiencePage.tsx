import { PageContainer } from '@/components/layout/PageContainer'
import { PageMeta } from '@/components/layout/PageMeta'
import { Timeline } from '@/components/sections/Timeline'
import { experience } from '@/content/experience'

export function ExperiencePage() {
  return (
    <>
      <PageMeta title="Experience" path="/experience" />
      <PageContainer narrow>
        <div className="mb-10 text-left">
          <h1 className="text-3xl font-semibold sm:text-4xl">Experience</h1>
          <p className="mt-2 text-muted-foreground">
            Roles where I shipped product UI, analytics, and the glue between teams.
          </p>
        </div>
        <Timeline items={experience} />
      </PageContainer>
    </>
  )
}
