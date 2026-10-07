import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { DashboardPreview } from '@/components/performance/dashboard-preview'

const highlights = ['Previous-year questions', 'Frequently tested concepts', 'Progress tracking']

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-40 top-20 size-[28rem] rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 -top-20 size-[26rem] rounded-full bg-sky-500/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-sky-200">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Built for Government Exam Aspirants.
          </p>
          <h1 id="hero-title" className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Practice Smart.{' '}
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-200 bg-clip-text text-transparent">
              Rank Higher.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-navy-muted sm:text-lg">
            AI-powered preparation built around previous-year questions, frequently tested concepts and smart practice
            for Indian government exams.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/ai-quiz" size="lg" variant="light">
              Start Preparing
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/exams" size="lg" variant="outline-light">
              Explore Exams
            </ButtonLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-navy-muted">
            {highlights.map((h) => (
              <li key={h} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-sky-300" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
