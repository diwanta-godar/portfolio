import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { site } from '@/content/site'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof schema>

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const formId = import.meta.env.VITE_FORMSPREE_ID as string | undefined

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', message: '' },
  })

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true)
    try {
      if (formId) {
        const res = await fetch(`https://formspree.io/f/${formId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error('Submit failed')
        toast.success('Message sent - thanks for reaching out!')
        reset()
        return
      }

      const subject = encodeURIComponent(`Portfolio contact from ${values.name}`)
      const body = encodeURIComponent(`${values.message}\n\n- ${values.name} (${values.email})`)
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      toast.message('Opening your email client…')
    } catch {
      toast.error('Something went wrong. Try email directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register('name')} />
        {errors.name && (
          <p className="text-sm text-destructive" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register('email')}
        />
        {errors.email && (
          <p className="text-sm text-destructive" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          {...register('message')}
        />
        {errors.message && (
          <p className="text-sm text-destructive" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>
      <Button type="submit" disabled={submitting} className="h-11 min-w-[8rem]">
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" data-icon="inline-start" />
            Sending…
          </>
        ) : (
          'Send message'
        )}
      </Button>
      {!formId && (
        <p className="text-xs text-muted-foreground">
          Set <code className="rounded bg-muted px-1">VITE_FORMSPREE_ID</code> for in-browser
          submit; otherwise we open your mail app.
        </p>
      )}
    </form>
  )
}
