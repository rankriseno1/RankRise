import { Target, TrendingUp, ListChecks } from 'lucide-react'
import { DemoBadge } from '@/components/shared/demo-badge'
import { ProgressBar, ScoreRing, TopicChip } from '@/components/shared/stats'
import { demoSummary, weeklyAccuracy } from '@/lib/data/performance'

export function DashboardPreview() {
  const maxBar = Math.max(...weeklyAccuracy.map((w) => w.value))
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="rounded-[1.25rem] bg-card p-5 text-card-foreground md:p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-muted-foreground">Your dashboard</p>
            <p className="font-heading text-base font-bold">SSC CGL · Tier 1</p>
          </div>
          <DemoBadge />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border bg-background p-4">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <ListChecks className="size-4 text-primary" aria-hidden="true" />
              Questions Attempted
            </div>
            <p className="mt-2 font-heading text-2xl font-bold">{demoSummary.questionsAttempted.toLocaleString('en-IN')}</p>
          </div>
          <div className="rounded-xl border bg-background p-4">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Target className="size-4 text-primary" aria-hidden="true" />
              Accuracy
            </div>
            <p className="mt-2 font-heading text-2xl font-bold">{demoSummary.accuracy}%</p>
            <ProgressBar value={demoSummary.accuracy} label="Accuracy" className="mt-2 h-1.5" />
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-[auto_1fr]">
          <div className="flex items-center gap-4 rounded-xl border bg-background p-4">
            <ScoreRing value={demoSummary.rankRiseScore} max={demoSummary.rankRiseScoreMax} size={92} />
            <div>
              <p className="text-xs font-medium text-muted-foreground">Rank Rise Score</p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                <TrendingUp className="size-3.5" aria-hidden="true" />
                +38 this week
              </p>
            </div>
          </div>
          <div className="rounded-xl border bg-background p-4">
            <p className="text-xs font-medium text-muted-foreground">Weekly accuracy</p>
            <div className="mt-3 flex h-16 items-end gap-1.5" aria-hidden="true">
              {weeklyAccuracy.map((w) => (
                <div
                  key={w.label}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-sky-400"
                  style={{ height: `${(w.value / maxBar) * 100}%`, opacity: 0.45 + (w.value / maxBar) * 0.55 }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border bg-background p-4">
            <p className="text-xs font-medium text-muted-foreground">Strong Topics</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {demoSummary.strongTopics.map((t) => (
                <TopicChip key={t} tone="strong">
                  {t}
                </TopicChip>
              ))}
            </div>
          </div>
          <div className="rounded-xl border bg-background p-4">
            <p className="text-xs font-medium text-muted-foreground">Weak Topics</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {demoSummary.weakTopics.map((t) => (
                <TopicChip key={t} tone="weak">
                  {t}
                </TopicChip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
