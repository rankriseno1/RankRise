import type { Metadata } from 'next'
import { Clock, Flame, ListChecks, Target, Trophy, TrendingUp } from 'lucide-react'
import { DemoBadge, Disclaimer } from '@/components/shared/demo-badge'
import { PageHeader } from '@/components/shared/page-header'
import { ProgressChart } from '@/components/shared/progress-chart'
import { ProgressBar, ScoreRing, StatCard, TopicChip } from '@/components/shared/stats'
import { demoSummary, recentAttempts, subjectAccuracy, weeklyAccuracy } from '@/lib/data/performance'

export const metadata: Metadata = {
  title: 'Performance',
  description: 'Track accuracy, speed, strong and weak topics, and your Rank Rise Score.',
}

function Panel({ title, subtitle, children, className }: { title: string; subtitle?: string; children: React.ReactNode; className?: string }) {
  return (
    <section aria-label={title} className={`rounded-2xl border bg-card p-5 shadow-sm md:p-6 ${className ?? ''}`}>
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <h2 className="font-heading text-lg font-bold text-foreground">{title}</h2>
          {subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>
        <DemoBadge />
      </div>
      {children}
    </section>
  )
}

export default function PerformancePage() {
  const s = demoSummary
  return (
    <>
      <PageHeader
        eyebrow="Performance"
        title="Your preparation at a glance"
        description="A sample dashboard showing how Rank Rise will track your progress once you sign in and start practising."
      >
        <DemoBadge tone="light" />
      </PageHeader>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <Disclaimer>All figures on this page are DEMO DATA. Your real performance will appear here after login is enabled.</Disclaimer>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard label="Questions Attempted" value={s.questionsAttempted.toLocaleString('en-IN')} icon={ListChecks} />
          <StatCard label="Accuracy" value={`${s.accuracy}%`} icon={Target} hint="+6% vs last month" />
          <StatCard label="Tests Taken" value={s.testsTaken} icon={Trophy} />
          <StatCard label="Avg. Time / Q" value={`${s.avgTimePerQuestion}s`} icon={Clock} />
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <Panel title="Weekly accuracy" subtitle="Last 7 weeks">
            <ProgressChart data={weeklyAccuracy} title="Weekly accuracy, demo data" />
          </Panel>
          <Panel title="Rank Rise Score" subtitle="Composite of accuracy, speed and consistency">
            <div className="flex flex-col items-center gap-5">
              <ScoreRing value={s.rankRiseScore} max={s.rankRiseScoreMax} size={160} />
              <div className="flex w-full items-center justify-around text-center">
                <div>
                  <p className="inline-flex items-center gap-1 font-heading text-xl font-bold text-foreground">
                    <Flame className="size-4 text-orange-500" aria-hidden="true" />
                    {s.streakDays}
                  </p>
                  <p className="text-xs text-muted-foreground">Day streak</p>
                </div>
                <div>
                  <p className="inline-flex items-center gap-1 font-heading text-xl font-bold text-foreground">
                    <TrendingUp className="size-4 text-emerald-600" aria-hidden="true" />
                    +38
                  </p>
                  <p className="text-xs text-muted-foreground">This week</p>
                </div>
              </div>
            </div>
          </Panel>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="Subject-wise accuracy">
            <ul className="flex flex-col gap-4">
              {subjectAccuracy.map((item) => (
                <li key={item.subject}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium text-foreground">{item.subject}</span>
                    <span className="tabular-nums text-muted-foreground">{item.accuracy}%</span>
                  </div>
                  <ProgressBar
                    value={item.accuracy}
                    label={`${item.subject} accuracy ${item.accuracy}%`}
                    barClassName={item.accuracy < 65 ? 'from-orange-500 to-amber-400' : undefined}
                  />
                </li>
              ))}
            </ul>
          </Panel>

          <div className="flex flex-col gap-5">
            <Panel title="Strong & weak topics">
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Strong Topics</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {s.strongTopics.map((t) => (
                      <TopicChip key={t} tone="strong">{t}</TopicChip>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Weak Topics</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {s.weakTopics.map((t) => (
                      <TopicChip key={t} tone="weak">{t}</TopicChip>
                    ))}
                  </div>
                </div>
              </div>
            </Panel>

            <Panel title="Recent attempts">
              <ul className="divide-y">
                {recentAttempts.map((a) => (
                  <li key={a.id} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-foreground">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.date}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-semibold tabular-nums text-foreground">{a.score}</p>
                      <p className="text-xs tabular-nums text-muted-foreground">{a.accuracy}%</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </div>
    </>
  )
}
