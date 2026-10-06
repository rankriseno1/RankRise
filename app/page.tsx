import type { Metadata } from 'next'
import { QuizRunner } from '@/components/quiz/quiz-runner'
import { DemoBadge } from '@/components/shared/demo-badge'
import { PageHeader } from '@/components/shared/page-header'

export const metadata: Metadata = {
  title: 'AI Quiz',
  description: 'Take a timed smart quiz with mixed subjects, instant scoring and explanations.',
}

export default function AiQuizPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Quiz"
        title="Smart practice, one question at a time"
        description="Pick a subject, beat the clock and review every answer with explanations. Personalised AI-generated quizzes are coming soon."
      >
        <DemoBadge tone="light" />
      </PageHeader>
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <QuizRunner />
      </div>
    </>
  )
}
