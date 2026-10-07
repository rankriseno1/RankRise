import { ArrowRight, Clock, Gauge, Layers, ListOrdered, Flame } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { Section } from '@/components/shared/section'

const details = [
  { icon: ListOrdered, label: 'Questions', value: '10 Questions' },
  { icon: Layers, label: 'Subjects', value: 'Mixed Subjects' },
  { icon: Clock, label: 'Duration', value: '10 minutes' },
  { icon: Gauge, label: 'Difficulty', value: 'Moderate' },
]

export function DailyChallenge() {
  return (
    <Section labelledBy="daily-title">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[oklch(0.28_0.12_264)] to-primary p-8 text-white shadow-2xl shadow-primary/20 md:p-12">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-amber-200">
              <Flame className="size-3.5" aria-hidden="true" />
              New challenge every day
            </p>
            <h2 id="daily-title" className="mt-4 text-3xl font-bold md:text-4xl">
              Daily Challenge
            </h2>
            <p className="mt-3 max-w-xl text-pretty leading-relaxed text-navy-muted">
              A quick, balanced quiz to build consistency. Ten questions, ten minutes — keep your streak alive.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {details.map((d) => (
                <div key={d.label} className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                  <dt className="flex items-center gap-2 text-xs text-navy-muted">
                    <d.icon className="size-4 text-sky-300" aria-hidden="true" />
                    {d.label}
                  </dt>
                  <dd className="mt-1.5 font-semibold">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ButtonLink href="/ai-quiz" variant="light" size="lg" className="w-full lg:w-auto">
            Start Daily Quiz
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
