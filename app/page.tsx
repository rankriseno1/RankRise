import { Hero } from '@/components/home/hero'
import { ExamsSection } from '@/components/home/exams-section'
import { HowItWorks } from '@/components/home/how-it-works'
import { MostAsked } from '@/components/home/most-asked'
import { AiImportant } from '@/components/home/ai-important'
import { PyqPreview } from '@/components/home/pyq-preview'
import { DailyChallenge } from '@/components/home/daily-challenge'
import { TrackProgress } from '@/components/home/track-progress'
import { SubjectsSection } from '@/components/home/subjects-section'
import { WhySection } from '@/components/home/why-section'
import { CtaSection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExamsSection />
      <HowItWorks />
      <MostAsked />
      <AiImportant />
      <PyqPreview />
      <DailyChallenge />
      <TrackProgress />
      <SubjectsSection />
      <WhySection />
      <CtaSection />
    </>
  )
}
