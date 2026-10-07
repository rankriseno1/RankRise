import { ArrowRight, Clock, Flame, ListChecks, Target } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { DemoBadge } from '@/components/shared/demo-badge'
import { ProgressChart } from '@/components/shared/progress-chart'
import { Section, SectionHeader } from '@/components/shared/section'
import { StatCard } from '@/components/shared/stats'
import { demoSummary, weeklyAccuracy } from '@/lib/data/performance'

export function TrackProgress() {
  return (
    <Section tone="muted" labelledBy="track-title">
      <SectionHeader
        id="track-title"
        eyebrow="Analytics"
        title="Track Your Progress"
        description="Understand where you stand with clear, actionable insights after every practice session."
        action={
          <ButtonLink href="/performance" variant="outline">
            Open performance
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        }
      />
      <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
        <div className="grid grid-cols-2 gap-4">
          <StatCard label="Questions Attempted" value={demoSummary.questionsAttempted.toLocaleString('en-IN')} icon={ListChecks} />
          <StatCard label="Accuracy" value={`${demoSummary.accuracy}%`} icon={Target} hint="+6% vs last month" />
          <StatCard label="Day Streak" value={demoSummary.streakDays} icon={Flame} />
          <StatCard label="Avg. Time / Q" value={`${demoSummary.avgTimePerQuestion}s`} icon={Clock} />
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-sm md:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="font-heading text-base font-bold text-foreground">Weekly accuracy</h3>
              <p className="text-sm text-muted-foreground">Last 7 weeks</p>
            </div>
            <DemoBadge />
          </div>
          <ProgressChart data={weeklyAccuracy} title="Weekly accuracy, demo data" />
        </div>
      </div>
    </Section>
  )
}
