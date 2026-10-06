import type { Metadata } from 'next'
import { Clock, Mail, MessageSquare } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'
import { PageHeader } from '@/components/shared/page-header'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Rank Rise team for questions, feedback or partnerships.',
}

const channels = [
  { icon: Mail, title: 'Email', text: siteConfig.email },
  { icon: Clock, title: 'Response time', text: 'Within 1–2 working days' },
  { icon: MessageSquare, title: 'Feedback', text: 'Suggest exams, subjects or features you want next.' },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Questions, feedback or partnership ideas — send us a message and the team will get back to you."
      />
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <ul className="flex flex-col gap-4">
          {channels.map((c) => (
            <li key={c.title} className="flex gap-4 rounded-2xl border bg-card p-5 shadow-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <c.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground">{c.title}</p>
                <p className="text-sm text-muted-foreground">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="rounded-3xl border bg-card p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-foreground">Send a message</h2>
          <ContactForm />
        </div>
      </div>
    </>
  )
}
