import { useTheme } from '../../hooks/useTheme'
import { ToggleThemeIcon } from './icons'

export function ThemeToggle () {
  const { theme, toggleDarkMode } = useTheme()
  const isDarkMode = theme === 'dark'

  return (
    <button
      className={`theme-toggle ${isDarkMode ? 'theme-toggle--toggled' : ''}`}
      type='button'
      title='Toggle theme'
      aria-label='Toggle theme'
      onClick={() => {
        toggleDarkMode()
      }}
    >
      <ToggleThemeIcon />
    </button>
  )
}
