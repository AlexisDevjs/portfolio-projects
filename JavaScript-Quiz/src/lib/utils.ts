import type { Theme } from '../types'

export function getThemeFromStorage () {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    return savedTheme as Theme
  }

  const match = window.matchMedia('(prefer-color-scheme: dark)').matches
  const theme: Theme = match ? 'dark' : 'light'

  return theme
}
