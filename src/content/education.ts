import type { EducationItem } from '@/content/types'

export const education: EducationItem[] = [
  {
    id: 'mern-stack-training',
    degree: 'MERN Stack Training',
    institution: 'Broadway Infosys',
    period: 'Aug 31 - Dec 1, 2025',
    description:
      'Completed 135 hours of professional MERN Stack training at Broadway Infosys. Certificate issued Jan 11, 2026.',
    highlights: ['Certificate of Achievement, No. B96971000'],
    certificateImage: '/projects/mern-certificate.png',
  },
  {
    id: 'bca',
    degree: 'Bachelors in Computer Application (BCA)',
    institution: 'Asian College of Higher Studies (ACHS)',
    period: '2022 - Running',
    description:
      'Currently pursuing BCA with in-depth focus on web development, software engineering, databases, data structures, and computer programming.',
    highlights: [
      'Core focus on Full Stack Web Development (MERN Stack)',
      'Practical coursework in Database Systems (SQL & MongoDB)',
      'Algorithms, Object-Oriented Programming, and Project Work',
    ],
  },
  {
    id: 'plus-two',
    degree: '+2 Science / High School',
    institution: 'Little Angels’ School',
    period: 'Completed',
    description:
      'Completed secondary and higher secondary education (+2) with concentration in Science and Mathematics.',
    highlights: [
      'Strong foundations in Mathematics and Computing fundamentals',
      'Active participation in technology clubs and academic activities',
    ],
  },
  {
    id: 'schooling',
    degree: 'Schooling (SEE)',
    institution: 'Little Angels’ School',
    period: 'Completed',
    description: 'Primary through secondary schooling completed with excellent academic standing.',
    highlights: [
      'Graduated with distinctions in science and mathematics',
      'Developed early passion for computers, programming, and web technology',
    ],
  },
]
