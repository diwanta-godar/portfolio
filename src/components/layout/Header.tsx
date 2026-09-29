import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'px-3 py-2 text-base font-medium transition-colors font-sans text-white hover:text-white/80',
    isActive ? 'underline decoration-2 underline-offset-4' : '',
  )

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-white border-b border-white/10 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-sans text-lg font-bold tracking-tight text-white uppercase group"
          >
            <img
              src="/Gemini_Generated_Image_1ppnm1ppnm1ppnm1.jpeg"
              alt={site.name}
              className="size-8 rounded-full object-cover border border-white/20 shadow-xs transition-transform group-hover:scale-105"
            />
            <span>{site.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-4" aria-label="Main">
            {site.nav.map((item) => (
              <NavLink key={item.href} to={item.href} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <Button
            variant="ghost"
            className="hidden md:inline-flex bg-secondary text-foreground hover:bg-secondary/90 rounded-full h-9 px-4 font-sans font-medium"
            render={<Link to="/contact">Contact</Link>}
          />
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-10 md:hidden text-white hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-[min(100vw-2rem,20rem)] bg-background text-foreground">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {site.nav.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) => cn(
                      'px-3 py-2 text-base font-medium transition-colors font-sans',
                      isActive ? 'text-primary underline' : 'text-foreground hover:text-primary/80',
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
