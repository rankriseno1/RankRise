import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { LogoMark } from '@/components/shared/logo'

export function CtaSection() {
  return (
    <section aria-labelledby="cta-title" className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center text-navy-foreground md:py-20">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <LogoMark className="mx-auto size-12" />
          <h2 id="cta-title" className="mt-6 text-3xl font-extrabold md:text-5xl">
            Ready to Rise?
          </h2>
          <p className="mt-4 text-lg text-navy-muted">Start preparing smarter for your government exam.</p>
          <ButtonLink href="/ai-quiz" variant="light" size="lg" className="mt-8">
            Start Preparing
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
