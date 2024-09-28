export type Theme = 'light' | 'dark'

interface Question {
  id: number
  question: string
  code?: string
  answers: readonly [string, string, string, string]
  correctAnswer: number
  selectedAnswer?: number
  isCorrectSelectedAnswer?: boolean
}

type StateProperties = {
  questions: Question[]
  currentQuestion: number
}

type StateActions = {
  getQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex) => void
  goToNextQuestion: () => void
  goToPreviousQuestion: () => void
}

export type State = StateProperties & StateActions
