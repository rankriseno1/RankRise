import {
  Atom,
  BookOpen,
  Brain,
  Calculator,
  Globe2,
  Languages,
  Lightbulb,
  type LucideIcon,
  Newspaper,
  Scale,
  ScrollText,
  TrendingUp,
} from 'lucide-react'

export type Subject = {
  slug: string
  name: string
  icon: LucideIcon
  questionCount: number
}

/** questionCount values are DEMO DATA. */
export const subjects: Subject[] = [
  { slug: 'general-knowledge', name: 'General Knowledge', icon: Lightbulb, questionCount: 4820 },
  { slug: 'current-affairs', name: 'Current Affairs', icon: Newspaper, questionCount: 2310 },
  { slug: 'indian-polity', name: 'Indian Polity', icon: Scale, questionCount: 3140 },
  { slug: 'history', name: 'History', icon: ScrollText, questionCount: 3960 },
  { slug: 'geography', name: 'Geography', icon: Globe2, questionCount: 2780 },
  { slug: 'economics', name: 'Economics', icon: TrendingUp, questionCount: 1920 },
  { slug: 'general-science', name: 'General Science', icon: Atom, questionCount: 3410 },
  { slug: 'reasoning', name: 'Reasoning', icon: Brain, questionCount: 5260 },
  { slug: 'mathematics', name: 'Mathematics', icon: Calculator, questionCount: 5880 },
  { slug: 'english', name: 'English', icon: Languages, questionCount: 3670 },
]

export const subjectIconFallback: LucideIcon = BookOpen

export function getSubjectIcon(name: string): LucideIcon {
  return subjects.find((s) => s.name === name)?.icon ?? subjectIconFallback
}
