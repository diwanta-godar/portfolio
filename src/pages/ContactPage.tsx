import { FaEnvelope, FaGithub, FaGlobe, FaLinkedinIn } from 'react-icons/fa6'
import { PageContainer } from '@/components/layout/PageContainer'
import { PageMeta } from '@/components/layout/PageMeta'
import { ContactForm } from '@/components/sections/ContactForm'
import { site } from '@/content/site'

const icons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  mail: FaEnvelope,
  twitter: FaGlobe,
} as const

export function ContactPage() {
  return (
    <>
      <PageMeta title="Contact" path="/contact" />
      <PageContainer narrow>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-left">
            <h1 className="text-3xl font-semibold sm:text-4xl">Contact</h1>
            <p className="mt-2 text-muted-foreground">
              Tell me about your product, dashboard, or team - I usually reply within two business
              days.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <span className="text-muted-foreground">Email </span>
                <a className="font-medium hover:text-primary" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li className="text-muted-foreground">{site.location}</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {site.socials.map((social) => {
                const Icon = icons[social.icon]
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-border hover:border-primary/40 hover:text-primary"
                    aria-label={social.label}
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </PageContainer>
    </>
  )
}
