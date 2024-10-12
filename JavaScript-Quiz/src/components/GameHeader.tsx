import { JavaScriptIcon } from './ui/icons'

export function GameHeader () {
  return (
    <header className='flex justify-center items-center gap-3'>
      <JavaScriptIcon className='ring-1 ring-black/75 size-8 hover:drop-shadow-[0_0_5px_#c8bf93] dark:hover:drop-shadow-[0_0_5px_#c8c3a8]' />
      <h1 className='text-4xl font-lato'>JavaScript Quizz</h1>
    </header>
  )
}
