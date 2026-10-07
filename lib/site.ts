export const siteConfig = {
  name: 'Rank Rise',
  tagline: 'Practice Smart. Rank Higher.',
  description: 'AI-powered preparation for Indian government exams.',
  email: 'support@rankrise.example',
}

export type NavLink = { label: string; href: string }

export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Exams', href: '/exams' },
  { label: 'Previous Year Questions', href: '/previous-year-questions' },
  { label: 'AI Quiz', href: '/ai-quiz' },
  { label: 'Performance', href: '/performance' },
]

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Practice',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Exams', href: '/exams' },
      { label: 'Previous Year Questions', href: '/previous-year-questions' },
      { label: 'AI Quiz', href: '/ai-quiz' },
      { label: 'Performance', href: '/performance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

export const AI_DISCLAIMER =
  'AI recommendations are based on available question trends and are not guaranteed predictions of future exam questions.'
