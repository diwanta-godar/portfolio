import type { ExperienceItem } from '@/content/types'

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Frontend Engineer',
    company: 'Northwind Labs',
    period: '2022 - Present',
    description:
      'Lead UI for analytics products; partner with data science on embedded insights.',
    highlights: [
      'Own design system adoption across squads',
      'Ship experiment-friendly feature flags and metrics hooks',
      'Mentor engineers on a11y and performance reviews',
    ],
  },
  {
    id: 'exp-2',
    role: 'Data Analyst · Frontend',
    company: 'Brightline Commerce',
    period: '2019 - 2022',
    description:
      'Hybrid role building dashboards and the React apps that consumed them.',
    highlights: [
      'Built self-serve reporting used by 200+ stakeholders',
      'Automated ETL checks saving ~10 hrs/week',
      'Presented quarterly metrics narratives to leadership',
    ],
  },
  {
    id: 'exp-3',
    role: 'B.S. Computer Science',
    company: 'State University',
    period: '2015 - 2019',
    description: 'Focus on human-computer interaction and statistics.',
    highlights: [
      'Teaching assistant - data structures',
      'Capstone: real-time campus transit visualization',
    ],
  },
]
