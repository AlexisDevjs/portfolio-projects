import { GithubIcon } from './ui/icons'
import { ThemeToggle } from './ui/ToggleTheme'

export default function Navbar () {
  return (
    <nav className='flex justify-center items-center py-2 px-6 gap-5 rounded-full ring-1 ring-neutral-500/75'>
      <a
        href='https://github.com/AlexisDevjs/portfolio-projects/tree/master/JavaScript-Quiz'
        target='_blank'
        rel='noreferrer'
        aria-label='Github'
        title='Github'
      >
        <GithubIcon />
      </a>
      <ThemeToggle />
    </nav>
  )
}
