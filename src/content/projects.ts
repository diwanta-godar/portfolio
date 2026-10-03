import type { Project } from '@/content/types'

export const projects: Project[] = [
  {
    slug: 'job-portal',
    title: 'Job Portal Platform',
    category: 'fullstack',
    summary:
      'Complete job portal with dedicated Admin, Employer, and Job Seeker roles plus a job recommendation algorithm.',
    description:
      'A comprehensive web platform that bridges job seekers and employers. Features an intelligent recommendation algorithm to match candidates with suitable positions. Employers can post, edit, and manage job listings, while job seekers can search, filter, and directly upload & send their CV/resumes. The admin dashboard oversees users, listings, and platform metrics.',
    highlights: [
      'Role-based dashboards for Admin, Employer, and Job Seeker',
      'Smart job recommendation algorithm tailored to candidate profiles',
      'End-to-end recruitment flow: job posting, CV submission, and application tracking',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN', 'Tailwind CSS'],
    image: '/projects/job-portal.jpg',
    repoUrl: 'https://github.com/diwanta-godar/jobportal',
    featured: true,
    metrics: [
      { label: 'Role Portals', value: '3' },
      { label: 'Application Flow', value: 'Instant' },
      { label: 'Recommendation', value: 'Smart' },
    ],
  },
  {
    slug: 'mobile-selling-ecommerce',
    title: 'Mobile Selling E-Commerce Website',
    category: 'fullstack',
    summary:
      'E-commerce platform specialized for mobile devices featuring an administrative dashboard for product management.',
    description:
      'Full-featured mobile gadget marketplace designed for seamless product discovery and catalog management. Features an intuitive Admin Dashboard where administrators can easily add, update, manage inventories, set specifications, and track product listings.',
    highlights: [
      'Dedicated Admin Dashboard to add, update, and manage mobile phones',
      'Responsive product catalog with detailed tech specs and filters',
      'Modern, mobile-friendly shopping interface built with clean Tailwind UI',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: '/projects/mobile-store.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
    metrics: [
      { label: 'Admin Control', value: 'Full CRUD' },
      { label: 'Catalog Browsing', value: 'Fast' },
      { label: 'Design', value: '100% Responsive' },
    ],
  },
  {
    slug: 'shoes-ecommerce',
    title: 'Shoes E-Commerce Website',
    category: 'fullstack',
    summary:
      'Footwear store with admin management, user authentication, interactive cart, and complete ordering workflow.',
    description:
      'End-to-end footwear e-commerce application. Administrators have their own admin page to post and manage shoe products. Regular users can register and login, explore trending collections, add items to their shopping cart, and complete purchase orders with ease.',
    highlights: [
      'Admin control panel for posting and updating footwear products',
      'User authentication with personalized shopping experience',
      'Interactive cart management and seamless checkout/order placement',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: '/projects/shoes-store.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
    metrics: [
      { label: 'User Workflow', value: 'Auth & Cart' },
      { label: 'Admin Management', value: 'Products' },
      { label: 'Order System', value: 'Complete' },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getAdjacentProject(slug: string): Project | undefined {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return undefined
  return projects[(index + 1) % projects.length]
}
