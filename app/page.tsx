import type { Metadata } from 'next'
import { PyqExplorer } from '@/components/questions/pyq-explorer'
import { DemoBadge } from '@/components/shared/demo-badge'
import { PageHeader } from '@/components/shared/page-header'

export const metadata: Metadata = {
  title: 'Previous Year Questions',
  description: 'Practise previous-year style questions filtered by exam, subject and year, with explanations.',
}

type SearchParams = Promise<{ exam?: string; subject?: string }>

export default async function PreviousYearQuestionsPage({ searchParams }: { searchParams: SearchParams }) {
  const { exam, subject } = await searchParams

  return (
    <>
      <PageHeader
        eyebrow="Previous Year Questions"
        title="Practise with past-paper patterns"
        description="Filter by exam, subject and year. Reveal answers with explanations when you are ready."
      >
        <DemoBadge tone="light" />
      </PageHeader>
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <PyqExplorer initialExam={exam} initialSubject={subject} />
      </div>
    </>
  )
}
