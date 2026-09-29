import { PageContainer } from '@/components/layout/PageContainer'
import { PageMeta } from '@/components/layout/PageMeta'
import { EducationTimeline } from '@/components/sections/EducationTimeline'
import { education } from '@/content/education'

export function EducationPage() {
  return (
    <>
      <PageMeta title="Education" path="/education" />
      <PageContainer narrow>
        <div className="mb-10 text-left space-y-2">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-primary">
            Academic Background
          </p>
          <h1 className="text-3xl font-bold font-display sm:text-4xl text-foreground">
            Education
          </h1>
          <p className="text-base text-muted-foreground font-sans">
            My academic journey and qualifications that built my foundation in computing and software development.
          </p>
        </div>
        <EducationTimeline items={education} />
      </PageContainer>
    </>
  )
}
