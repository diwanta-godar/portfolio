import { Helmet } from 'react-helmet-async'
import { site } from '@/content/site'

type PageMetaProps = {
  title?: string
  description?: string
  path?: string
}

export function PageMeta({ title, description, path = '' }: PageMetaProps) {
  const pageTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.title}`
  const desc = description ?? site.meta.description
  const url = `${site.meta.siteUrl}${path}`

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site.meta.siteUrl}/og-image.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
