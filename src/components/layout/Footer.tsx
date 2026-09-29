import { ArrowUp, MapPin, Send } from 'lucide-react'
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { site } from '@/content/site'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  mail: FaEnvelope,
  twitter: FaGlobe,
} as const

export function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative mt-auto border-t border-border/60 bg-gradient-to-b from-primary/95 to-primary text-primary-foreground">
      {/* Decorative ambient background accents */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-10"
        aria-hidden
      >
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-300 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Identity Column */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-white/10 font-display text-lg font-bold text-white shadow-inner backdrop-blur-sm">
                {site.name.charAt(0)}
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                {site.name}
              </span>
            </div>
            <p className="max-w-md text-sm sm:text-base text-primary-foreground/80 leading-relaxed font-sans">
              {site.shortBio}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-primary-foreground/70 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 text-primary-foreground/90" />
                {site.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-primary-foreground/90 mb-4 sm:mb-5">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 sm:gap-y-3 font-sans text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="inline-block text-primary-foreground/75 transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials Column */}
          <div className="space-y-4 lg:col-span-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-primary-foreground/90">
              Get in Touch
            </h3>
            <p className="text-sm text-primary-foreground/80 font-sans leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {site.socials.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap] || FaEnvelope
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    aria-label={social.label}
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all hover:bg-white/25 active:scale-95"
              >
                <span>Send message</span>
                <Send className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs sm:text-sm font-sans text-primary-foreground/70 sm:flex-row">
          <p className="text-center sm:text-left">
            © {year} <span className="font-medium text-white">{site.name}</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/about"
              className="transition-colors hover:text-white"
            >
              About
            </Link>
            <Link
              to="/education"
              className="transition-colors hover:text-white"
            >
              Education
            </Link>
            <Link
              to="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-primary-foreground/80 transition-colors hover:bg-white/15 hover:text-white"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="size-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
