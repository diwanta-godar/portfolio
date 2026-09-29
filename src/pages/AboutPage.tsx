import { PageContainer } from '@/components/layout/PageContainer'
import { PageMeta } from '@/components/layout/PageMeta'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { site } from '@/content/site'

export function AboutPage() {
  return (
    <>
      <PageMeta title="About" path="/about" />
      <PageContainer narrow>
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <Avatar className="size-24 shrink-0 border border-border md:size-28">
            <AvatarImage
              src="/Gemini_Generated_Image_1ppnm1ppnm1ppnm1.jpeg"
              alt={site.name}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-xl font-semibold text-primary">
              {site.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-6 text-left">
            <div>
              <h1 className="text-3xl font-semibold sm:text-4xl">About</h1>
              <p className="mt-2 text-muted-foreground">{site.location}</p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a frontend developer with a UI/UX mindset. I care about pixels, keyboard paths, and interfaces people actually enjoy using. I build with HTML, CSS, JavaScript, and React, and I pay close attention to accessibility, performance, and responsive design.
              </p>
              <p>
                Every screen I ship is a balance of clarity and delight: clean layouts, intentional interactions, and code that stays maintainable as the product grows.
              </p>
              <p>
                Outside of frontend, I&apos;m learning Business Data Analysis (BDA), focusing on analyzing data to support business decisions. I also enjoy exploring modern architectural patterns and experimenting with new UI designs.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  )
}
