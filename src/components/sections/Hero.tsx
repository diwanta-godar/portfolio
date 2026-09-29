import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'

export function Hero() {
  return (
    <section className="relative border-b border-border bg-background overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.05),transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:items-center lg:gap-14">
          <div className="flex-1 text-left">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              Junior Frontend Developer
            </p>
            <h1 className="font-sans text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I&apos;m Diwanta Godar.
            </h1>
            <p className="mt-4 max-w-xl text-lg sm:text-xl font-normal text-muted-foreground leading-relaxed">
              I build clean, responsive web apps with HTML, CSS, JavaScript, and React.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                render={<Link to="/projects" />}
                size="lg"
                className="h-12 rounded-full px-6 font-sans font-medium transition-transform hover:scale-105 active:scale-95 shadow-md shadow-primary/20"
              >
                View projects
                <ArrowRight className="size-4 ml-2" />
              </Button>
              <Button
                render={<Link to="/contact" />}
                variant="outline"
                size="lg"
                className="h-12 rounded-full px-6 font-sans font-medium transition-transform hover:scale-105 active:scale-95"
              >
                Get in touch
              </Button>
            </div>
          </div>

          <div className="relative shrink-0">
            {/* Glowing backdrop circle */}
            <div
              className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 via-indigo-500/20 to-purple-500/20 blur-xl opacity-75 dark:opacity-60"
              aria-hidden
            />
            {/* Outer circular styled container */}
            <div className="relative overflow-hidden rounded-full border-4 border-background bg-card p-1.5 shadow-2xl ring-2 ring-primary/20 transition-all duration-300 hover:ring-primary/40">
              <img
                src="/Gemini_Generated_Image_1ppnm1ppnm1ppnm1.jpeg"
                alt={site.name}
                loading="eager"
                className="aspect-square size-48 object-cover rounded-full sm:size-56 md:size-64 lg:size-72 shadow-inner transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
