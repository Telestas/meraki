export interface Client {
  name: string
  handle: string
  igUrl: string
  followers: string
  reach: string
  reachLabel: string
  quote: string
  type: string
  gradient: string
}

export interface Service {
  number: string
  name: string
  description: string
  icon: React.ReactNode
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface Value {
  name: string
  description: string
  icon: string
}

export interface QuizQuestion {
  question: string
  options: { label: string; text: string; value: number }[]
}

export type QuizAnswers = Record<number, { value: number; text: string }>

export interface QuizResult {
  level: string
  emoji: string
  text: string
  minScore: number
  maxScore: number
}
