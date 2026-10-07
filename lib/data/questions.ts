export type Difficulty = 'Easy' | 'Moderate' | 'Hard'

export type Question = {
  id: string
  exam: string
  year: number
  subject: string
  topic: string
  question: string
  options: string[]
  answerIndex: number
  explanation: string
  difficulty: Difficulty
}

/** All questions below are DEMO DATA written for illustration. Exam/year tags are sample labels. */
export const questions: Question[] = [
  {
    id: 'q1',
    exam: 'UPSC',
    year: 2023,
    subject: 'Indian Polity',
    topic: 'Fundamental Rights',
    question: 'Which Article of the Constitution of India abolishes untouchability?',
    options: ['Article 14', 'Article 15', 'Article 17', 'Article 21'],
    answerIndex: 2,
    explanation: 'Article 17 abolishes untouchability and forbids its practice in any form.',
    difficulty: 'Easy',
  },
  {
    id: 'q2',
    exam: 'SSC CGL',
    year: 2022,
    subject: 'History',
    topic: 'Modern India',
    question: 'In which year was the Indian National Congress founded?',
    options: ['1857', '1885', '1905', '1919'],
    answerIndex: 1,
    explanation: 'The INC was founded in 1885, with its first session held in Bombay.',
    difficulty: 'Easy',
  },
  {
    id: 'q3',
    exam: 'RRB NTPC',
    year: 2021,
    subject: 'Geography',
    topic: 'Indian Rivers',
    question: 'Which river is known as the "Dakshin Ganga"?',
    options: ['Krishna', 'Kaveri', 'Godavari', 'Narmada'],
    answerIndex: 2,
    explanation: 'The Godavari is the longest river in peninsular India and is called Dakshin Ganga.',
    difficulty: 'Easy',
  },
  {
    id: 'q4',
    exam: 'RRB Group D',
    year: 2022,
    subject: 'General Science',
    topic: 'Physics — Units',
    question: 'What is the SI unit of electric resistance?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    answerIndex: 2,
    explanation: 'Resistance is measured in ohms (Ω), defined as one volt per ampere.',
    difficulty: 'Easy',
  },
  {
    id: 'q5',
    exam: 'IBPS / SBI',
    year: 2023,
    subject: 'Economics',
    topic: 'Monetary Policy',
    question: 'The repo rate in India is decided by which body?',
    options: ['Ministry of Finance', 'Monetary Policy Committee', 'NITI Aayog', 'SEBI'],
    answerIndex: 1,
    explanation: 'The RBI’s Monetary Policy Committee sets the policy repo rate.',
    difficulty: 'Moderate',
  },
  {
    id: 'q6',
    exam: 'UPSC',
    year: 2022,
    subject: 'Indian Polity',
    topic: 'Parliament',
    question: 'Who presides over a joint sitting of both Houses of Parliament?',
    options: ['President', 'Vice-President', 'Speaker of Lok Sabha', 'Prime Minister'],
    answerIndex: 2,
    explanation: 'Under Article 108, the Speaker of the Lok Sabha presides over a joint sitting.',
    difficulty: 'Moderate',
  },
  {
    id: 'q7',
    exam: 'SSC CHSL',
    year: 2023,
    subject: 'General Science',
    topic: 'Biology — Human Body',
    question: 'Which vitamin is produced in the human skin on exposure to sunlight?',
    options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
    answerIndex: 3,
    explanation: 'UVB exposure enables the skin to synthesise Vitamin D.',
    difficulty: 'Easy',
  },
  {
    id: 'q8',
    exam: 'KPSC',
    year: 2021,
    subject: 'History',
    topic: 'Medieval India',
    question: 'Hampi was the capital of which empire?',
    options: ['Chola', 'Vijayanagara', 'Rashtrakuta', 'Hoysala'],
    answerIndex: 1,
    explanation: 'Hampi (Vijayanagara) was the capital of the Vijayanagara Empire.',
    difficulty: 'Easy',
  },
  {
    id: 'q9',
    exam: 'SSC CGL',
    year: 2023,
    subject: 'Mathematics',
    topic: 'Percentages',
    question: 'If the price of an item rises by 25%, by what percent must consumption fall to keep expenditure unchanged?',
    options: ['20%', '25%', '15%', '22.5%'],
    answerIndex: 0,
    explanation: 'Reduction = 25 / (100 + 25) × 100 = 20%.',
    difficulty: 'Moderate',
  },
  {
    id: 'q10',
    exam: 'Defence Exams',
    year: 2022,
    subject: 'Geography',
    topic: 'Physical Geography',
    question: 'Which layer of the atmosphere contains the ozone layer?',
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    answerIndex: 1,
    explanation: 'Most atmospheric ozone is concentrated in the lower stratosphere.',
    difficulty: 'Moderate',
  },
  {
    id: 'q11',
    exam: 'Police / PSI',
    year: 2023,
    subject: 'Reasoning',
    topic: 'Series',
    question: 'Find the next number in the series: 3, 7, 15, 31, ?',
    options: ['47', '55', '63', '62'],
    answerIndex: 2,
    explanation: 'Each term is (previous × 2) + 1, so 31 × 2 + 1 = 63.',
    difficulty: 'Easy',
  },
  {
    id: 'q12',
    exam: 'UPSC',
    year: 2021,
    subject: 'Economics',
    topic: 'National Income',
    question: 'GDP at factor cost plus net indirect taxes equals?',
    options: ['GNP at factor cost', 'GDP at market price', 'NDP at factor cost', 'NNP at market price'],
    answerIndex: 1,
    explanation: 'GDP(MP) = GDP(FC) + Indirect taxes − Subsidies.',
    difficulty: 'Hard',
  },
]

export const pyqYears = [2023, 2022, 2021]

export type TopicFrequency = { topic: string; share: number; questions: number }
export type MostAskedSubject = { subject: string; topics: TopicFrequency[] }

/** Frequency values are DEMO DATA. */
export const mostAsked: MostAskedSubject[] = [
  {
    subject: 'Indian Polity',
    topics: [
      { topic: 'Fundamental Rights', share: 86, questions: 214 },
      { topic: 'Parliament & Legislature', share: 74, questions: 182 },
      { topic: 'Constitutional Amendments', share: 61, questions: 143 },
    ],
  },
  {
    subject: 'History',
    topics: [
      { topic: 'Freedom Struggle (1885–1947)', share: 82, questions: 236 },
      { topic: 'Mughal Empire', share: 64, questions: 158 },
      { topic: 'Ancient Indian Dynasties', share: 57, questions: 139 },
    ],
  },
  {
    subject: 'Geography',
    topics: [
      { topic: 'Indian Rivers & Drainage', share: 79, questions: 171 },
      { topic: 'Climate & Monsoon', share: 66, questions: 140 },
      { topic: 'Soils & Agriculture', share: 52, questions: 112 },
    ],
  },
  {
    subject: 'General Science',
    topics: [
      { topic: 'Human Body & Nutrition', share: 84, questions: 228 },
      { topic: 'Units & Measurements', share: 68, questions: 164 },
      { topic: 'Chemical Reactions', share: 55, questions: 131 },
    ],
  },
  {
    subject: 'Economics',
    topics: [
      { topic: 'Banking & RBI', share: 77, questions: 149 },
      { topic: 'Budget & Fiscal Policy', share: 63, questions: 118 },
      { topic: 'National Income', share: 49, questions: 92 },
    ],
  },
]

export type AiImportantItem = {
  id: string
  subject: string
  topic: string
  reason: string
  confidence: 'High' | 'Medium'
  sampleQuestion: string
}

/** AI recommendation cards are DEMO DATA — not real predictions. */
export const aiImportant: AiImportantItem[] = [
  {
    id: 'ai1',
    subject: 'Indian Polity',
    topic: 'Emergency Provisions',
    reason: 'Appeared in multiple recent cycles across UPSC and state PSC papers.',
    confidence: 'High',
    sampleQuestion: 'Under which Article can a National Emergency be proclaimed?',
  },
  {
    id: 'ai2',
    subject: 'General Science',
    topic: 'Vitamins & Deficiency Diseases',
    reason: 'Consistently tested in SSC and Railway general awareness sections.',
    confidence: 'High',
    sampleQuestion: 'Deficiency of which vitamin causes scurvy?',
  },
  {
    id: 'ai3',
    subject: 'Economics',
    topic: 'Inflation Measures (CPI / WPI)',
    reason: 'Rising frequency in banking exams over recent years.',
    confidence: 'Medium',
    sampleQuestion: 'Which index is used by the RBI for inflation targeting?',
  },
]
