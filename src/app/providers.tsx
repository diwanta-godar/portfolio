import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from '@/components/ui/sonner'

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
        <Toaster richColors closeButton position="top-center" />
      </ThemeProvider>
    </HelmetProvider>
  )
}
