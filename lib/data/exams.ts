import {
  Banknote,
  BadgeCheck,
  Briefcase,
  Building2,
  ClipboardList,
  FileText,
  GraduationCap,
  Landmark,
  type LucideIcon,
  Shield,
  ShieldCheck,
  TrainFront,
  TrainTrack,
} from 'lucide-react'

export type ExamCategory = 'Civil Services' | 'SSC' | 'Railways' | 'Banking' | 'State & Police' | 'Defence' | 'Other'

export type Exam = {
  slug: string
  name: string
  fullName: string
  description: string
  category: ExamCategory
  icon: LucideIcon
  subjects: string[]
  stages: string[]
}

export const exams: Exam[] = [
  {
    slug: 'upsc',
    name: 'UPSC',
    fullName: 'Union Public Service Commission — Civil Services',
    description: 'Prelims-focused practice across Polity, History, Economy, Environment and current affairs.',
    category: 'Civil Services',
    icon: Landmark,
    subjects: ['Indian Polity', 'History', 'Geography', 'Economics', 'Current Affairs'],
    stages: ['Prelims', 'Mains', 'Interview'],
  },
  {
    slug: 'ssc-cgl',
    name: 'SSC CGL',
    fullName: 'Staff Selection Commission — Combined Graduate Level',
    description: 'Quantitative aptitude, reasoning, English and general awareness for Tier 1 and Tier 2.',
    category: 'SSC',
    icon: Briefcase,
    subjects: ['Mathematics', 'Reasoning', 'English', 'General Knowledge'],
    stages: ['Tier 1', 'Tier 2'],
  },
  {
    slug: 'ssc-chsl',
    name: 'SSC CHSL',
    fullName: 'Staff Selection Commission — Combined Higher Secondary Level',
    description: 'Speed-focused practice for LDC, JSA, PA/SA and DEO posts with sectional drills.',
    category: 'SSC',
    icon: FileText,
    subjects: ['Mathematics', 'Reasoning', 'English', 'General Knowledge'],
    stages: ['Tier 1', 'Tier 2'],
  },
  {
    slug: 'ssc-mts',
    name: 'SSC MTS',
    fullName: 'Staff Selection Commission — Multi-Tasking Staff',
    description: 'Foundational numeracy, reasoning and general awareness with session-wise practice.',
    category: 'SSC',
    icon: ClipboardList,
    subjects: ['Mathematics', 'Reasoning', 'English', 'General Knowledge'],
    stages: ['Session 1', 'Session 2'],
  },
  {
    slug: 'ssc-gd',
    name: 'SSC GD',
    fullName: 'Staff Selection Commission — General Duty Constable',
    description: 'Elementary maths, reasoning, GK and Hindi/English for CAPF, NIA and SSF posts.',
    category: 'SSC',
    icon: Shield,
    subjects: ['Mathematics', 'Reasoning', 'General Knowledge', 'English'],
    stages: ['CBE', 'PET / PST', 'Medical'],
  },
  {
    slug: 'rrb-ntpc',
    name: 'RRB NTPC',
    fullName: 'Railway Recruitment Board — Non-Technical Popular Categories',
    description: 'CBT 1 and CBT 2 practice with railway-specific general awareness and aptitude.',
    category: 'Railways',
    icon: TrainFront,
    subjects: ['Mathematics', 'Reasoning', 'General Science', 'General Knowledge'],
    stages: ['CBT 1', 'CBT 2', 'Skill Test'],
  },
  {
    slug: 'rrb-group-d',
    name: 'RRB Group D',
    fullName: 'Railway Recruitment Board — Level 1 Posts',
    description: 'General science, maths and reasoning drills aligned to the Level 1 CBT pattern.',
    category: 'Railways',
    icon: TrainTrack,
    subjects: ['General Science', 'Mathematics', 'Reasoning', 'Current Affairs'],
    stages: ['CBT', 'PET', 'Document Verification'],
  },
  {
    slug: 'ibps-sbi',
    name: 'IBPS / SBI',
    fullName: 'Banking — IBPS PO, Clerk, RRB and SBI PO, Clerk',
    description: 'Banking awareness, data interpretation, puzzles and English for prelims and mains.',
    category: 'Banking',
    icon: Banknote,
    subjects: ['Mathematics', 'Reasoning', 'English', 'Economics', 'Current Affairs'],
    stages: ['Prelims', 'Mains', 'Interview'],
  },
  {
    slug: 'kpsc',
    name: 'KPSC',
    fullName: 'Karnataka Public Service Commission',
    description: 'State-specific history, geography and current affairs alongside general studies.',
    category: 'State & Police',
    icon: Building2,
    subjects: ['History', 'Geography', 'Indian Polity', 'Current Affairs'],
    stages: ['Prelims', 'Mains', 'Personality Test'],
  },
  {
    slug: 'police-psi',
    name: 'Police / PSI',
    fullName: 'State Police Constable and Sub-Inspector Exams',
    description: 'General studies, reasoning, numerical ability and law basics for state police roles.',
    category: 'State & Police',
    icon: BadgeCheck,
    subjects: ['General Knowledge', 'Reasoning', 'Mathematics', 'Indian Polity'],
    stages: ['Written Test', 'PET / PST', 'Interview'],
  },
  {
    slug: 'defence',
    name: 'Defence Exams',
    fullName: 'NDA, CDS, AFCAT and Agniveer',
    description: 'Mathematics, English and general ability practice for armed forces entrances.',
    category: 'Defence',
    icon: ShieldCheck,
    subjects: ['Mathematics', 'English', 'General Science', 'History', 'Geography'],
    stages: ['Written Exam', 'SSB Interview', 'Medical'],
  },
  {
    slug: 'other',
    name: 'Other Government Exams',
    fullName: 'State PSCs, Teaching, Insurance and More',
    description: 'Common general studies and aptitude practice for a wide range of recruitment exams.',
    category: 'Other',
    icon: GraduationCap,
    subjects: ['General Knowledge', 'Reasoning', 'Mathematics', 'English'],
    stages: ['Varies by exam'],
  },
]

export const examCategories: ExamCategory[] = [
  'Civil Services',
  'SSC',
  'Railways',
  'Banking',
  'State & Police',
  'Defence',
  'Other',
]
