import type { SkillGroup } from '@/content/types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML5 & CSS3', level: 92 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'MERN Stack', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    id: 'data',
    title: 'Data Analysis & Tools',
    skills: [
      { name: 'Python', level: 82 },
      { name: 'NumPy', level: 80 },
      { name: 'Pandas', level: 82 },
      { name: 'Power BI', level: 78 },
      { name: 'SQL', level: 80 },
      { name: 'Git & GitHub', level: 85 },
    ],
  },
]
