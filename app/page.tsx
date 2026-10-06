import type { Metadata } from 'next'
import { LegalPage } from '@/components/shared/legal-page'
import { AI_DISCLAIMER } from '@/lib/site'

export const metadata: Metadata = { title: 'Terms', description: 'Terms of use for Rank Rise.' }

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="October 2026"
      sections={[
        {
          heading: 'Use of the service',
          body: 'Rank Rise provides practice material for educational purposes. It is not affiliated with UPSC, SSC, RRB, IBPS, SBI, KPSC or any recruiting body.',
        },
        { heading: 'AI recommendations', body: AI_DISCLAIMER },
        {
          heading: 'Content accuracy',
          body: 'We aim for accurate questions and explanations, but always verify official notifications, syllabi and answer keys from the respective exam authority.',
        },
        {
          heading: 'Changes',
          body: 'These terms may be updated as new features such as accounts and AI-generated quizzes are introduced.',
        },
      ]}
    />
  )
}
