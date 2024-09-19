import { ThemeToggle } from './ui/ToggleTheme'

export default function Header () {
  return (
    <header className='flex justify-between'>
      <h1 className='text-2xl'>JavaScript Quiz</h1>
      <ThemeToggle />
    </header>
  )
}
