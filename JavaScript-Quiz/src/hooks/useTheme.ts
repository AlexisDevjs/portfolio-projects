import { useEffect, useState } from 'react'
import type { Theme } from '../types'
import { getThemeFromStorage } from '../lib/utils'

export function useTheme () {
  const [theme, setTheme] = useState<Theme>(getThemeFromStorage)

  const toggleDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, toggleDarkMode }
}
