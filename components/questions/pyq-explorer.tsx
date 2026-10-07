'use client'

import { useMemo, useState } from 'react'
import { RotateCcw, Search, SearchX } from 'lucide-react'
import { QuestionCard } from '@/components/questions/question-card'
import { ActionButton } from '@/components/shared/button-link'
import { exams } from '@/lib/data/exams'
import { pyqYears, questions } from '@/lib/data/questions'
import { subjects } from '@/lib/data/subjects'

const ALL = 'all'

type PyqExplorerProps = { initialExam?: string; initialSubject?: string }

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-xl border border-input bg-card px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export function PyqExplorer({ initialExam, initialSubject }: PyqExplorerProps) {
  const examNames = exams.map((e) => e.name)
  const subjectNames = subjects.map((s) => s.name)

  const [exam, setExam] = useState(initialExam && examNames.includes(initialExam) ? initialExam : ALL)
  const [subject, setSubject] = useState(initialSubject && subjectNames.includes(initialSubject) ? initialSubject : ALL)
  const [year, setYear] = useState(ALL)
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return questions.filter(
      (item) =>
        (exam === ALL || item.exam === exam) &&
        (subject === ALL || item.subject === subject) &&
        (year === ALL || String(item.year) === year) &&
        (!q || item.question.toLowerCase().includes(q) || item.topic.toLowerCase().includes(q)),
    )
  }, [exam, subject, year, query])

  const hasFilters = exam !== ALL || subject !== ALL || year !== ALL || query !== ''

  const reset = () => {
    setExam(ALL)
    setSubject(ALL)
    setYear(ALL)
    setQuery('')
  }

  return (
    <div>
      <div className="rounded-2xl border bg-card p-4 shadow-sm md:p-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.7fr_auto] lg:items-end">
          <div className="flex flex-col gap-1.5 sm:col-span-2 lg:col-span-1">
            <label htmlFor="pyq-search" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Search
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <input
                id="pyq-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions or topics"
                className="h-11 w-full rounded-xl border border-input bg-card pl-9 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
              />
            </div>
          </div>
          <SelectField
            id="pyq-exam"
            label="Exam"
            value={exam}
            onChange={setExam}
            options={[{ value: ALL, label: 'All exams' }, ...examNames.map((n) => ({ value: n, label: n }))]}
          />
          <SelectField
            id="pyq-subject"
            label="Subject"
            value={subject}
            onChange={setSubject}
            options={[{ value: ALL, label: 'All subjects' }, ...subjectNames.map((n) => ({ value: n, label: n }))]}
          />
          <SelectField
            id="pyq-year"
            label="Year"
            value={year}
            onChange={setYear}
            options={[{ value: ALL, label: 'All years' }, ...pyqYears.map((y) => ({ value: String(y), label: String(y) }))]}
          />
          <ActionButton variant="outline" onClick={reset} disabled={!hasFilters} className="h-11">
            <RotateCcw aria-hidden="true" />
            Reset
          </ActionButton>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {questions.length} demo questions
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-5 lg:grid-cols-2">
          {filtered.map((q, i) => (
            <QuestionCard key={q.id} question={q} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-4 flex flex-col items-center rounded-2xl border border-dashed bg-secondary/40 px-6 py-16 text-center">
          <SearchX className="size-10 text-muted-foreground" aria-hidden="true" />
          <h2 className="mt-4 text-lg font-bold text-foreground">No questions match these filters</h2>
          <p className="mt-1 max-w-md text-sm text-muted-foreground">
            Our demo set is small. Try a different exam, subject or year — the full question bank is coming soon.
          </p>
          <ActionButton variant="primary" onClick={reset} className="mt-6">
            Clear filters
          </ActionButton>
        </div>
      )}
    </div>
  )
}
