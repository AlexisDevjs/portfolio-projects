import { create } from 'zustand'
import type { State } from '../types'
import { fetchQuestions } from '../lib/utils'

export const useQuestionsStore = create<State>((set) => ({
  questions: [],
  currentQuestion: 0,

  getQuestions: async (limit: number) => {
    const questions = await fetchQuestions()
    const limitedQuestions = questions
      .sort(() => Math.random() - 0.5)
      .slice(0, limit)

    set({ questions: limitedQuestions })
  }
}))
