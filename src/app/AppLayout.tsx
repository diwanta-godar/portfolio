import { Outlet, ScrollRestoration } from 'react-router-dom'
import { AnimatedPage } from '@/components/layout/AnimatedPage'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export function AppLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <AnimatedPage>
          <Outlet />
        </AnimatedPage>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
