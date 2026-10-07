import { DemoBadge } from '@/components/shared/demo-badge'
import { Section, SectionHeader } from '@/components/shared/section'
import { ProgressBar } from '@/components/shared/stats'
import { mostAsked } from '@/lib/data/questions'
import { getSubjectIcon } from '@/lib/data/subjects'

export function MostAsked() {
  return (
    <Section labelledBy="most-asked-title">
      <SectionHeader
        id="most-asked-title"
        eyebrow="Question trends"
        title="Most Asked Questions"
        description="Topics that appear most often across previous-year papers, grouped by subject."
        action={<DemoBadge />}
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {mostAsked.map((group) => {
          const Icon = getSubjectIcon(group.subject)
          return (
            <article key={group.subject} className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-foreground">{group.subject}</h3>
              </div>
              <ul className="mt-5 flex flex-col gap-4">
                {group.topics.map((t) => (
                  <li key={t.topic}>
                    <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                      <span className="font-medium text-foreground">{t.topic}</span>
                      <span className="shrink-0 text-xs text-muted-foreground">{t.questions} Qs</span>
                    </div>
                    <ProgressBar value={t.share} label={`${t.topic} frequency ${t.share}%`} />
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
        <div className="flex flex-col justify-center rounded-2xl border border-dashed bg-secondary/50 p-6">
          <p className="font-heading text-lg font-bold text-foreground">How to read this</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Bars show the relative frequency of each topic in our sample question set. Question counts and percentages
            are demo values for preview purposes only.
          </p>
        </div>
      </div>
    </Section>
  )
}
