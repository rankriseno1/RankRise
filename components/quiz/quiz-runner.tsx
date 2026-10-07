'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Flag, Layers, ListOrdered, RotateCcw, XCircle } from 'lucide-react'
import { ActionButton, ButtonLink } from '@/components/shared/button-link'
import { Disclaimer } from '@/components/shared/demo-badge'
import { ProgressBar, ScoreRing } from '@/components/shared/stats'
import { DifficultyBadge } from '@/components/questions/question-card'
import { questions, type Question } from '@/lib/data/questions'
import { subjects } from '@/lib/data/subjects'
import { AI_DISCLAIMER } from '@/lib/site'
import { cn } from '@/lib/utils'

const MIXED = 'Mixed Subjects'
const QUIZ_LENGTH = 10
const SECONDS_PER_QUESTION = 60

type Phase = 'setup' | 'running' | 'results'

function buildQuiz(subject: string): Question[] {
  const pool = subject === MIXED ? questions : questions.filter((q) => q.subject === subject)
  return pool.slice(0, QUIZ_LENGTH)
}

function formatTime(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

const availableSubjects = [MIXED, ...subjects.map((s) => s.name).filter((n) => questions.some((q) => q.subject === n))]

export function QuizRunner() {
  const [phase, setPhase] = useState<Phase>('setup')
  const [subject, setSubject] = useState(MIXED)
  const [quiz, setQuiz] = useState<Question[]>([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [secondsLeft, setSecondsLeft] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [phase])

  useEffect(() => {
    if (phase !== 'running') return
    const timer = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setPhase('results')
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [phase])

  const start = () => {
    const next = buildQuiz(subject)
    setQuiz(next)
    setAnswers(Array(next.length).fill(null))
    setCurrent(0)
    setSecondsLeft(next.length * SECONDS_PER_QUESTION)
    setPhase('running')
  }

  if (phase === 'setup') {
    const count = buildQuiz(subject).length
    return (
      <div className="rounded-3xl border bg-card p-6 shadow-sm md:p-10">
        <h2 className="text-2xl font-bold text-foreground">Set up your quiz</h2>
        <p className="mt-2 text-muted-foreground">Choose a subject focus. The Daily Challenge uses mixed subjects.</p>

        <fieldset className="mt-8">
          <legend className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subject</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {availableSubjects.map((s) => (
              <label
                key={s}
                className={cn(
                  'cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/40',
                  subject === s
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-input bg-card text-foreground hover:border-primary/40 hover:bg-accent',
                )}
              >
                <input
                  type="radio"
                  name="quiz-subject"
                  value={s}
                  checked={subject === s}
                  onChange={() => setSubject(s)}
                  className="sr-only"
                />
                {s}
              </label>
            ))}
          </div>
        </fieldset>

        <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { icon: ListOrdered, label: 'Questions', value: `${count} Questions` },
            { icon: Clock, label: 'Time limit', value: `${count} minutes` },
            { icon: Layers, label: 'Focus', value: subject },
          ].map((d) => (
            <div key={d.label} className="rounded-xl bg-secondary/70 p-4">
              <dt className="flex items-center gap-2 text-xs text-muted-foreground">
                <d.icon className="size-4 text-primary" aria-hidden="true" />
                {d.label}
              </dt>
              <dd className="mt-1 font-semibold text-foreground">{d.value}</dd>
            </div>
          ))}
        </dl>

        <ActionButton size="lg" onClick={start} className="mt-8 w-full sm:w-auto">
          Start Quiz
          <ArrowRight aria-hidden="true" />
        </ActionButton>

        <Disclaimer className="mt-8">
          Demo mode: questions come from a small sample set. {AI_DISCLAIMER}
        </Disclaimer>
      </div>
    )
  }

  if (phase === 'results') {
    const correct = quiz.reduce((acc, q, i) => acc + (answers[i] === q.answerIndex ? 1 : 0), 0)
    const attempted = answers.filter((a) => a !== null).length
    const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0
    return (
      <div className="flex flex-col gap-6">
        <section aria-labelledby="results-title" className="rounded-3xl bg-navy p-6 text-navy-foreground md:p-10">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
            <ScoreRing value={correct} max={quiz.length} size={140} label="Score" tone="light" />
            <div className="flex-1">
              <h2 id="results-title" className="text-2xl font-bold md:text-3xl">
                {correct >= quiz.length * 0.7 ? 'Great work!' : 'Good effort — keep practising!'}
              </h2>
              <p className="mt-2 text-navy-muted">
                You answered {correct} of {quiz.length} correctly. Results are not saved in demo mode.
              </p>
              <dl className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: 'Correct', value: correct },
                  { label: 'Attempted', value: attempted },
                  { label: 'Accuracy', value: `${accuracy}%` },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/[0.06] p-3">
                    <dt className="text-xs text-navy-muted">{s.label}</dt>
                    <dd className="font-heading text-xl font-bold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionButton variant="light" onClick={start}>
              <RotateCcw aria-hidden="true" />
              Retry quiz
            </ActionButton>
            <ActionButton variant="outline-light" onClick={() => setPhase('setup')}>
              Change subject
            </ActionButton>
            <ButtonLink href="/performance" variant="outline-light">
              View performance
            </ButtonLink>
          </div>
        </section>

        <section aria-labelledby="review-title">
          <h2 id="review-title" className="mb-4 text-xl font-bold text-foreground">
            Answer review
          </h2>
          <ol className="flex flex-col gap-4">
            {quiz.map((q, i) => {
              const chosen = answers[i]
              const isCorrect = chosen === q.answerIndex
              return (
                <li key={q.id} className="rounded-2xl border bg-card p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-label="Correct" />
                    ) : (
                      <XCircle className="mt-0.5 size-5 shrink-0 text-red-600" aria-label="Incorrect" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-foreground">
                        {i + 1}. {q.question}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Your answer:{' '}
                        <span className={cn('font-medium', isCorrect ? 'text-emerald-700' : 'text-red-700')}>
                          {chosen === null ? 'Not answered' : q.options[chosen]}
                        </span>
                        {!isCorrect ? (
                          <>
                            {' · '}Correct: <span className="font-medium text-emerald-700">{q.options[q.answerIndex]}</span>
                          </>
                        ) : null}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.explanation}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </section>
      </div>
    )
  }

  const q = quiz[current]
  const selected = answers[current]
  const isLast = current === quiz.length - 1
  const answeredCount = answers.filter((a) => a !== null).length

  const choose = (optionIndex: number) => {
    setAnswers((prev) => prev.map((a, i) => (i === current ? optionIndex : a)))
  }

  return (
    <div className="rounded-3xl border bg-card p-5 shadow-sm md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-muted-foreground">
          Question <span className="text-foreground">{current + 1}</span> of {quiz.length}
        </p>
        <p
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-sm font-semibold tabular-nums',
            secondsLeft <= 60 ? 'bg-red-50 text-red-700' : 'bg-accent text-accent-foreground',
          )}
          role="timer"
          aria-label={`Time remaining ${formatTime(secondsLeft)}`}
        >
          <Clock className="size-4" aria-hidden="true" />
          {formatTime(secondsLeft)}
        </p>
      </div>
      <ProgressBar value={((current + 1) / quiz.length) * 100} label="Quiz progress" className="mt-4" />

      <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-secondary px-2.5 py-0.5 font-medium text-secondary-foreground">{q.subject}</span>
        <span className="rounded-full bg-secondary px-2.5 py-0.5 font-medium text-secondary-foreground">{q.topic}</span>
        <DifficultyBadge level={q.difficulty} />
      </div>
      <h2 className="mt-4 text-pretty text-xl font-bold leading-snug text-foreground md:text-2xl">{q.question}</h2>

      <fieldset className="mt-6">
        <legend className="sr-only">Choose an answer</legend>
        <div className="grid gap-3">
          {q.options.map((opt, i) => {
            const active = selected === i
            return (
              <label
                key={opt}
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-medium transition-all has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/40',
                  active
                    ? 'border-primary bg-accent text-accent-foreground shadow-sm'
                    : 'border-input bg-card text-foreground hover:border-primary/40 hover:bg-secondary/60',
                )}
              >
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  checked={active}
                  onChange={() => choose(i)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    'flex size-7 shrink-0 items-center justify-center rounded-lg border text-xs font-bold',
                    active ? 'border-primary bg-primary text-primary-foreground' : 'border-input bg-secondary text-muted-foreground',
                  )}
                  aria-hidden="true"
                >
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="mt-8 flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
        <ActionButton variant="ghost" onClick={() => setCurrent((c) => c - 1)} disabled={current === 0}>
          <ArrowLeft aria-hidden="true" />
          Previous
        </ActionButton>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <span className="text-center text-xs text-muted-foreground">{answeredCount} answered</span>
          {isLast ? (
            <ActionButton onClick={() => setPhase('results')}>
              <Flag aria-hidden="true" />
              Submit quiz
            </ActionButton>
          ) : (
            <ActionButton onClick={() => setCurrent((c) => c + 1)}>
              Next
              <ArrowRight aria-hidden="true" />
            </ActionButton>
          )}
        </div>
      </div>
    </div>
  )
}
