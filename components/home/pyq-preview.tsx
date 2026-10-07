import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { DemoBadge } from '@/components/shared/demo-badge'
import { Section, SectionHeader } from '@/components/shared/section'
import { QuestionCard } from '@/components/questions/question-card'
import { questions } from '@/lib/data/questions'

export function PyqPreview() {
  const preview = questions.slice(0, 3)
  return (
    <Section tone="muted" labelledBy="pyq-title">
      <SectionHeader
        id="pyq-title"
        eyebrow="Previous Year Questions"
        title="Learn from real exam patterns"
        description="Practise questions in the style of past papers, tagged by exam, year, subject and difficulty — with clear explanations."
        action={
          <div className="flex flex-wrap items-center gap-3">
            <DemoBadge />
            <ButtonLink href="/previous-year-questions" variant="outline">
              Browse all PYQs
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </div>
        }
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {preview.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </Section>
  )
}
