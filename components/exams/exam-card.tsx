import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Exam } from '@/lib/data/exams'

export function ExamCard({ exam }: { exam: Exam }) {
  const Icon = exam.icon
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
      <div className="flex items-start justify-between gap-4">
        <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-500 text-white shadow-md shadow-primary/20">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
          {exam.category}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-bold text-foreground">{exam.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{exam.description}</p>
      <Link
        href={`/exams#${exam.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
      >
        Explore
        <span className="sr-only"> {exam.name}</span>
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  )
}
