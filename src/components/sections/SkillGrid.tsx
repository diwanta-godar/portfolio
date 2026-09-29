import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { SkillGroup } from '@/content/types'

type SkillGridProps = {
  groups: SkillGroup[]
}

export function SkillGrid({ groups }: SkillGridProps) {
  return (
    <Tabs defaultValue={groups[0]?.id} className="w-full">
      <TabsList className="mb-6 flex h-auto w-full flex-wrap justify-start gap-1">
        {groups.map((group) => (
          <TabsTrigger key={group.id} value={group.id} className="flex-1 sm:flex-none">
            {group.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {groups.map((group) => (
        <TabsContent key={group.id} value={group.id} className="space-y-4">
          {group.skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}% familiarity</span>
              </div>
              <div
                className="h-2 overflow-hidden rounded-full bg-muted"
                role="img"
                aria-label={`${skill.name} familiarity ${skill.level} percent`}
              >
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
