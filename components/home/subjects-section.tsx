import Link from 'next/link'
import { DemoBadge } from '@/components/shared/demo-badge'
import { Section, SectionHeader } from '@/components/shared/section'
import { subjects } from '@/lib/data/subjects'

export function SubjectsSection() {
  return (
    <Section labelledBy="subjects-title">
      <SectionHeader
        id="subjects-title"
        eyebrow="Subjects"
        title="Every subject, one place"
        description="Practise across the core subjects tested in government recruitment exams."
        action={<DemoBadge />}
      />
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {subjects.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/previous-year-questions?subject=${encodeURIComponent(s.name)}`}
              className="group flex h-full flex-col items-start gap-4 rounded-2xl border bg-card p-5 shadow-sm outline-none transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-foreground">{s.name}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {s.questionCount.toLocaleString('en-IN')} questions
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
