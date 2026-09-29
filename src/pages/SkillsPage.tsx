import { PageContainer } from '@/components/layout/PageContainer'
import { PageMeta } from '@/components/layout/PageMeta'
import { SkillGrid } from '@/components/sections/SkillGrid'
import { skillGroups } from '@/content/skills'

export function SkillsPage() {
  return (
    <>
      <PageMeta title="Skills" path="/skills" />
      <PageContainer narrow>
        <div className="mb-8 text-left">
          <h1 className="text-3xl font-semibold sm:text-4xl">Skills</h1>
          <p className="mt-2 text-muted-foreground">
            Depth across UI engineering, analytics, and the tools that connect them. Bars reflect
            day-to-day comfort, not exam scores.
          </p>
        </div>
        <SkillGrid groups={skillGroups} />
      </PageContainer>
    </>
  )
}
