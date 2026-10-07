import { ArrowRight, FileQuestion } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import type { Exam } from '@/lib/data/exams'

export function ExamDetailCard({ exam }: { exam: Exam }) {
  const Icon = exam.icon
  return (
    <article
      id={exam.slug}
      className="scroll-mt-24 rounded-2xl border bg-card p-6 shadow-sm transition-shadow target:border-primary target:ring-3 target:ring-primary/20 hover:shadow-md md:p-7"
    >
      <div className="flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-500 text-white shadow-md shadow-primary/20">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-xl font-bold text-foreground">{exam.name}</h3>
          <p className="text-sm text-muted-foreground">{exam.fullName}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{exam.description}</p>

      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key subjects</dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {exam.subjects.map((s) => (
              <span key={s} className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                {s}
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stages</dt>
          <dd className="mt-2 flex flex-wrap items-center gap-1.5 text-sm text-foreground">
            {exam.stages.map((stage, i) => (
              <span key={stage} className="inline-flex items-center gap-1.5">
                {i > 0 ? <span className="text-muted-foreground" aria-hidden="true">→</span> : null}
                {stage}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <ButtonLink href={`/ai-quiz?exam=${encodeURIComponent(exam.name)}`} size="sm">
          Start practice
          <ArrowRight aria-hidden="true" />
        </ButtonLink>
        <ButtonLink href={`/previous-year-questions?exam=${encodeURIComponent(exam.name)}`} size="sm" variant="outline">
          <FileQuestion aria-hidden="true" />
          Previous year questions
        </ButtonLink>
      </div>
    </article>
  )
}
