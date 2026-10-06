import type { Metadata } from 'next'
import { ExamDetailCard } from '@/components/exams/exam-detail-card'
import { PageHeader } from '@/components/shared/page-header'
import { examCategories, exams } from '@/lib/data/exams'

export const metadata: Metadata = {
  title: 'Exams',
  description: 'Explore practice tracks for UPSC, SSC, Railways, Banking, State PSC, Police and Defence exams.',
}

function categoryId(category: string) {
  return `cat-${category.toLowerCase().replace(/[^a-z]+/g, '-')}`
}

export default function ExamsPage() {
  const groups = examCategories
    .map((category) => ({ category, items: exams.filter((e) => e.category === category) }))
    .filter((g) => g.items.length > 0)

  return (
    <>
      <PageHeader
        eyebrow="Exams"
        title="Choose your target exam"
        description="Syllabus-aligned practice tracks for central and state government recruitment exams. Pick an exam to see its subjects and stages."
      >
        <nav aria-label="Exam categories">
          <ul className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <li key={g.category}>
                <a
                  href={`#${categoryId(g.category)}`}
                  className="inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  {g.category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        {groups.map((g) => (
          <section key={g.category} id={categoryId(g.category)} aria-labelledby={`${categoryId(g.category)}-title`} className="scroll-mt-24">
            <h2 id={`${categoryId(g.category)}-title`} className="mb-6 text-2xl font-bold text-foreground">
              {g.category}
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {g.items.map((exam) => (
                <ExamDetailCard key={exam.slug} exam={exam} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
