import type { Question, Theme } from '../types'

export function getThemeFromStorage () {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    return savedTheme as Theme
  }

  const match = window.matchMedia('(prefer-color-scheme: dark)').matches
  const theme: Theme = match ? 'dark' : 'light'

  return theme
}

export function getBackgroundColor (question: Question, index: number) {
  const { selectedAnswer, correctAnswer } = question

  if (selectedAnswer === undefined) return 'transparent'

  if (index !== selectedAnswer && index !== correctAnswer) {
    return 'transparent'
  }

  if (index === correctAnswer) return 'green'

  if (index === selectedAnswer) return 'red'

  return 'transparent'
}

export async function fetchQuestions () {
  try {
    const response = await fetch('http://localhost:5173/questions.json')
    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
}
