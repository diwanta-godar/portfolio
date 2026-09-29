import { Link } from 'react-router-dom'
import { PageContainer } from '@/components/layout/PageContainer'
import { PageMeta } from '@/components/layout/PageMeta'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <>
      <PageMeta title="Not found" />
      <PageContainer className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="text-sm font-medium text-primary">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Page not found</h1>
        <p className="mt-2 max-w-md text-muted-foreground">
          The route you requested doesn&apos;t exist. Head home or browse projects.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button render={<Link to="/" />}>Go home</Button>
          <Button render={<Link to="/projects" />} variant="outline">
            View projects
          </Button>
        </div>
      </PageContainer>
    </>
  )
}
