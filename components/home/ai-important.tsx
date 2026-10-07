import { Sparkles } from 'lucide-react'
import { DemoBadge, Disclaimer } from '@/components/shared/demo-badge'
import { Section, SectionHeader } from '@/components/shared/section'
import { aiImportant } from '@/lib/data/questions'
import { AI_DISCLAIMER } from '@/lib/site'
import { cn } from '@/lib/utils'

export function AiImportant() {
  return (
    <Section tone="navy" labelledBy="ai-important-title" className="overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 size-96 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
      <div className="relative">
        <SectionHeader
          id="ai-important-title"
          eyebrow="Smart recommendations"
          title="AI Important Questions"
          description="Topics surfaced from question trends to help you prioritise revision."
          tone="light"
          action={<DemoBadge tone="light" />}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {aiImportant.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">{item.subject}</span>
                <span
                  className={cn(
                    'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
                    item.confidence === 'High' ? 'bg-emerald-400/15 text-emerald-200' : 'bg-sky-400/15 text-sky-200',
                  )}
                >
                  <Sparkles className="size-3" aria-hidden="true" />
                  {item.confidence} trend
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{item.topic}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted">{item.reason}</p>
              <div className="mt-5 rounded-xl bg-white/[0.06] p-4">
                <p className="text-xs font-medium text-navy-muted">Sample practice question</p>
                <p className="mt-1 text-sm font-medium text-white">{item.sampleQuestion}</p>
              </div>
            </article>
          ))}
        </div>
        <Disclaimer className="mt-8 border-amber-300/30 bg-amber-300/10 text-amber-100">{AI_DISCLAIMER}</Disclaimer>
      </div>
    </Section>
  )
}
