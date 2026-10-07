'use client'

import { useState } from 'react'
import { CheckCircle2, ChevronDown, Eye } from 'lucide-react'
import type { Question } from '@/lib/data/questions'
import { cn } from '@/lib/utils'

const difficultyStyles: Record<Question['difficulty'], string> = {
  Easy: 'bg-emerald-50 text-emerald-800',
  Moderate: 'bg-sky-50 text-sky-800',
  Hard: 'bg-orange-50 text-orange-800',
}

export function DifficultyBadge({ level }: { level: Question['difficulty'] }) {
  return (
    <span className={cn('rounded-full px-2.5 py-0.5 text-xs font-medium', difficultyStyles[level])}>{level}</span>
  )
}

export function QuestionCard({ question, index }: { question: Question; index?: number }) {
  const [revealed, setRevealed] = useState(false)
  const panelId = `answer-${question.id}`

  return (
    <article className="flex h-full flex-col rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-navy px-2.5 py-0.5 font-semibold text-navy-foreground">
          {question.exam} {question.year}
        </span>
        <span className="rounded-full bg-accent px-2.5 py-0.5 font-medium text-accent-foreground">{question.subject}</span>
        <DifficultyBadge level={question.difficulty} />
      </div>
      <h3 className="mt-4 text-base font-semibold leading-relaxed text-foreground">
        {typeof index === 'number' ? <span className="mr-1 text-muted-foreground">Q{index + 1}.</span> : null}
        {question.question}
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">Topic: {question.topic}</p>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2">
        {question.options.map((option, i) => {
          const correct = revealed && i === question.answerIndex
          return (
            <li
              key={option}
              className={cn(
                'flex items-center gap-2.5 rounded-lg border px-3 py-2 text-sm transition-colors',
                correct ? 'border-emerald-300 bg-emerald-50 text-emerald-900' : 'bg-background text-foreground',
              )}
            >
              <span
                className={cn(
                  'flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-semibold',
                  correct ? 'bg-emerald-600 text-white' : 'bg-secondary text-secondary-foreground',
                )}
              >
                {String.fromCharCode(65 + i)}
              </span>
              {option}
              {correct ? <CheckCircle2 className="ml-auto size-4 text-emerald-600" aria-label="Correct answer" /> : null}
            </li>
          )
        })}
      </ol>
      <div className="mt-auto pt-4">
        <button
          type="button"
          onClick={() => setRevealed((v) => !v)}
          aria-expanded={revealed}
          aria-controls={panelId}
          className="inline-flex items-center gap-1.5 rounded-lg text-sm font-semibold text-primary outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Eye className="size-4" aria-hidden="true" />
          {revealed ? 'Hide answer' : 'Show answer'}
          <ChevronDown className={cn('size-4 transition-transform', revealed && 'rotate-180')} aria-hidden="true" />
        </button>
        <div id={panelId} hidden={!revealed} className="mt-3 rounded-lg bg-secondary p-3 text-sm leading-relaxed text-secondary-foreground">
          <span className="font-semibold">Explanation: </span>
          {question.explanation}
        </div>
      </div>
    </article>
  )
}
