import type { GameState } from './lib/constants'

export type Theme = 'light' | 'dark'

interface Question {
  id: number
  question: string
  code?: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
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
  getNextQuestion: () => void
  getPreviousQuestion: () => void
}

export type State = StateProperties & StateActions


export type GameStateType = (typeof GameState)[keyof typeof GameState]
