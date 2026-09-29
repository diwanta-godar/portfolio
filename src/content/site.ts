import type { SiteStat, SocialLink } from '@/content/types'

export const site = {
  name: 'Diwanta Godar',
  title: 'Junior Frontend Developer',
  shortBio:
    'I build clean, responsive web apps with HTML, CSS, JavaScript, and React.',
  email: 'diwanta.godar.2059@gmail.com',
  location: 'Kathmandu, Nepal (NPT · UTC+5:45)',
  resumePath: '/resume.pdf',
  meta: {
    description:
      'Portfolio of Diwanta Godar - junior developer specializing in React, MERN stack, data analysis, and responsive web applications.',
    siteUrl: 'https://example.com',
  },
  stats: [
    { label: 'Months experience', value: '3' },
    { label: 'Projects built', value: '3+' },
    { label: 'Core technologies', value: '8+' },
    { label: 'Lighthouse score', value: '95+' },
  ] satisfies SiteStat[],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/diwanta-godar',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/diwanta-godar',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:diwanta.godar.2059@gmail.com',
      icon: 'mail',
    },
  ] satisfies SocialLink[],
  skillTeaser: [
    'React',
    'Node',
    'Express',
    'MongoDB',
    'MERN',
    'PostgreSQL',
    'NumPy',
    'Pandas',
    'Power BI',
    'TypeScript',
    'Tailwind CSS',
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'Education', href: '/education' },
    { label: 'Contact', href: '/contact' },
  ],
} as const
