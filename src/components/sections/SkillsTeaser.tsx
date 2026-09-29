import { SectionHeading } from '@/components/sections/SectionHeading'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface TechAvatar {
  name: string
  fallback: string
  src: string
  color?: string
}

const TECH_STACK_AVATARS: TechAvatar[] = [
  {
    name: 'React',
    fallback: 'RE',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    fallback: 'NO',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express',
    fallback: 'EX',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'MongoDB',
    fallback: 'MG',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'PostgreSQL',
    fallback: 'PG',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'TypeScript',
    fallback: 'TS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Tailwind CSS',
    fallback: 'TW',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Python',
    fallback: 'PY',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Pandas',
    fallback: 'PD',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  },
  {
    name: 'NumPy',
    fallback: 'NP',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  },
]

export function SkillsTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools & technologies I build with"
        description="Core frontend, backend, and data analysis technologies."
        action={
          <Button render={<Link to="/skills" />} variant="outline">
            All skills
          </Button>
        }
      />

      {/* Equally partitioned grid with permanent labels and no overlapping hover expansion */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
        {TECH_STACK_AVATARS.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-border/70 bg-card/70 p-4 text-center shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card"
          >
            <Avatar className="size-12 rounded-xl border border-border/80 bg-background p-2 shadow-xs">
              <AvatarImage
                src={tech.src}
                alt={tech.name}
                className={cn(
                  'size-full object-contain',
                  tech.name === 'Express' && 'dark:invert dark:brightness-125'
                )}
              />
              <AvatarFallback className="font-bold text-xs bg-primary/10 text-primary">
                {tech.fallback}
              </AvatarFallback>
            </Avatar>
            <span className="font-sans text-xs font-semibold tracking-tight text-foreground sm:text-sm">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
