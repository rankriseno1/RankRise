import type { Metadata } from 'next'
import { LegalPage } from '@/components/shared/legal-page'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = { title: 'Privacy Policy', description: 'How Rank Rise handles your information.' }

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 2026"
      sections={[
        {
          heading: 'Overview',
          body: 'This preview version of Rank Rise does not create accounts, store personal data or use tracking cookies. All statistics shown are demo data.',
        },
        {
          heading: 'Information we will collect',
          body: 'When accounts launch, we will collect only what is needed to provide the service: your email, exam preferences and practice history.',
        },
        {
          heading: 'How information will be used',
          body: 'Practice data will be used to show performance analytics and personalise recommendations. We will never sell your personal data.',
        },
        {
          heading: 'Contact',
          body: `For privacy questions, email ${siteConfig.email}.`,
        },
      ]}
    />
  )
}
