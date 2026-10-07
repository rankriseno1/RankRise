import { ArrowRight } from 'lucide-react'
import { ExamCard } from '@/components/exams/exam-card'
import { ButtonLink } from '@/components/shared/button-link'
import { Section, SectionHeader } from '@/components/shared/section'
import { exams } from '@/lib/data/exams'

export function ExamsSection() {
  return (
    <Section id="exams" labelledBy="exams-title">
      <SectionHeader
        id="exams-title"
        eyebrow="Exams"
        title="Prepare for Your Target Exam"
        description="Focused practice tracks for India's most popular central and state government recruitment exams."
        action={
          <ButtonLink href="/exams" variant="outline">
            View all exams
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        }
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exams.map((exam) => (
          <ExamCard key={exam.slug} exam={exam} />
        ))}
      </div>
    </Section>
  )
}
