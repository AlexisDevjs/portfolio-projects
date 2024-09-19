import { useEffect, useState } from 'react'
import type { Theme } from '../../types'

export function useDarkMode () {
  const getInitialTheme = (): Theme => {
    const storedTheme = (localStorage.getItem('theme') as Theme) || null

    if (storedTheme) {
      return storedTheme
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    return userMedia.matches ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  const toggleDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    const root = window.document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  return {theme, toggleDarkMode}
}
