export type ProjectCategory = 'frontend' | 'data' | 'fullstack'

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  summary: string
  description: string
  highlights: string[]
  stack: string[]
  image: string
  demoUrl?: string
  repoUrl?: string
  featured: boolean
  metrics?: { label: string; value: string }[]
  chartData?: { name: string; value: number }[]
}

export type SiteStat = {
  label: string
  value: string
}

export type SkillItem = {
  name: string
  level: number
}

export type SkillGroup = {
  id: string
  title: string
  skills: SkillItem[]
}

export type EducationItem = {
  id: string
  degree: string
  institution: string
  period: string
  description?: string
  highlights?: string[]
  certificateImage?: string
}

export type ExperienceItem = {
  id: string
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export type SocialLink = {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'twitter'
}
