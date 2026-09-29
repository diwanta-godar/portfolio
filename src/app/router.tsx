import { lazy, Suspense, type ComponentType } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/app/AppLayout'
import { Skeleton } from '@/components/ui/skeleton'
import { HomePage } from '@/pages/HomePage'

const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })),
)
const ProjectsPage = lazy(() =>
  import('@/pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })),
)
const ProjectDetailPage = lazy(() =>
  import('@/pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })),
)
const SkillsPage = lazy(() =>
  import('@/pages/SkillsPage').then((m) => ({ default: m.SkillsPage })),
)
const EducationPage = lazy(() =>
  import('@/pages/EducationPage').then((m) => ({ default: m.EducationPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

function PageFallback() {
  return (
    <div className="mx-auto max-w-6xl space-y-4 px-4 py-16">
      <Skeleton className="h-10 w-64" />
      <Skeleton className="h-4 w-full max-w-xl" />
      <Skeleton className="mt-8 h-48 w-full" />
    </div>
  )
}

function lazyPage(Component: ComponentType) {
  return (
    <Suspense fallback={<PageFallback />}>
      <Component />
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: lazyPage(AboutPage) },
      { path: 'projects', element: lazyPage(ProjectsPage) },
      { path: 'projects/:slug', element: lazyPage(ProjectDetailPage) },
      { path: 'skills', element: lazyPage(SkillsPage) },
      { path: 'education', element: lazyPage(EducationPage) },
      { path: 'experience', element: lazyPage(EducationPage) },
      { path: 'contact', element: lazyPage(ContactPage) },
      { path: '*', element: lazyPage(NotFoundPage) },
    ],
  },
])
