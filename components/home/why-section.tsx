import { BarChart3, Repeat2, Sparkles, TrendingUp } from 'lucide-react'
import { Section, SectionHeader } from '@/components/shared/section'

const reasons = [
  {
    icon: TrendingUp,
    title: 'Trend-Based Practice',
    text: 'Practise what exams actually test. Questions are prioritised by how often topics appear in past papers.',
  },
  {
    icon: Repeat2,
    title: 'Frequently Tested Concepts',
    text: 'Revise high-yield concepts repeatedly until they stick — no time wasted on rarely asked trivia.',
  },
  {
    icon: Sparkles,
    title: 'Smart Quiz Experience',
    text: 'Clean, distraction-free quizzes with timers, instant feedback and clear explanations for every answer.',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    text: 'Accuracy, speed and topic-level strengths in one dashboard so you always know what to study next.',
  },
]

export function WhySection() {
  return (
    <Section labelledBy="why-title">
      <SectionHeader
        id="why-title"
        eyebrow="Why Rank Rise"
        title="Preparation that respects your time"
        description="Built for aspirants who want focused, measurable progress — not endless scrolling."
        align="center"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r) => (
          <article key={r.title} className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
            <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-500 text-white">
              <r.icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-foreground">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
