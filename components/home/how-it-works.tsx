import { BookOpenCheck, LineChart, MousePointerClick, Target } from 'lucide-react'
import { Section, SectionHeader } from '@/components/shared/section'

const steps = [
  { n: '01', title: 'Choose Your Exam', text: 'Pick your target exam to unlock a syllabus-aligned practice track.', icon: Target },
  { n: '02', title: 'Select Your Subject', text: 'Focus on one subject or mix them to mirror the real paper.', icon: MousePointerClick },
  { n: '03', title: 'Practice Smart Questions', text: 'Solve PYQs and trend-based questions with instant explanations.', icon: BookOpenCheck },
  { n: '04', title: 'Track Your Improvement', text: 'See accuracy, speed and weak topics improve week after week.', icon: LineChart },
]

export function HowItWorks() {
  return (
    <Section tone="muted" labelledBy="how-title">
      <SectionHeader
        id="how-title"
        eyebrow="How it works"
        title="How Rank Rise Works"
        description="A simple, repeatable loop designed to turn daily practice into measurable progress."
        align="center"
      />
      <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
          aria-hidden="true"
        />
        {steps.map((step) => (
          <li key={step.n} className="relative rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                <step.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-3xl font-extrabold text-primary/20">{step.n}</span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-foreground">
              <span className="sr-only">Step {step.n}: </span>
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
