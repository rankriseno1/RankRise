import type { Metadata } from 'next'
import { Compass, HeartHandshake, ShieldCheck, Target } from 'lucide-react'
import { CtaSection } from '@/components/home/cta-section'
import { PageHeader } from '@/components/shared/page-header'
import { Section, SectionHeader } from '@/components/shared/section'

export const metadata: Metadata = {
  title: 'About',
  description: 'Rank Rise helps Indian government exam aspirants practise smarter with trend-based questions.',
}

const values = [
  { icon: Target, title: 'Focus on what matters', text: 'We prioritise high-yield topics so aspirants spend time where it counts.' },
  { icon: ShieldCheck, title: 'Honest guidance', text: 'Trend insights are clearly labelled — never promised as guaranteed predictions.' },
  { icon: HeartHandshake, title: 'Built for every aspirant', text: 'Clean, fast and mobile-first, so practice works on any device and any connection.' },
  { icon: Compass, title: 'Measurable progress', text: 'Every session feeds clear analytics that show you exactly what to study next.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Helping aspirants practise smarter"
        description="Rank Rise is an AI-powered preparation platform for Indian government exams, built around previous-year questions and frequently tested concepts."
      />
      <Section labelledBy="mission-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our mission</p>
            <h2 id="mission-title" className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Make focused, high-quality practice accessible to every aspirant.
            </h2>
          </div>
          <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              Lakhs of candidates prepare for UPSC, SSC, Railways, Banking, State PSC, Police and Defence exams every year.
              Most of that time goes into figuring out what to study rather than actually studying it.
            </p>
            <p>
              Rank Rise analyses question trends from past papers to surface frequently tested concepts, then turns them
              into smart, timed practice with clear explanations and progress tracking.
            </p>
          </div>
        </div>
      </Section>
      <Section tone="muted" labelledBy="values-title">
        <SectionHeader id="values-title" eyebrow="What we stand for" title="Our principles" align="center" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <article key={v.title} className="rounded-2xl border bg-card p-6 shadow-sm">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <v.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <div className="pt-20">
        <CtaSection />
      </div>
    </>
  )
}
