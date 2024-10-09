import { useState } from 'react'
import Footer from './components/Footer'
import StartGameButton from './components/StartGameButton'
import Game from './components/Game'
import { JavaScriptIcon } from './components/ui/icons'
import Navbar from './components/Navbar'

export default function App () {
  const [startedGame, setStartedGame] = useState(false)

  const handleClick = () => {
    setStartedGame(!startedGame)
  }

  return (
    <div className='min-h-[100svh] h-full flex flex-col justify-between items-center py-2'>
      <Navbar />
      <main className='flex-grow flex flex-col justify-center gap-10 my-5 max-w-md mx-auto items-center py-2 px-7'>
        <header className='flex justify-center items-center gap-3'>
          <JavaScriptIcon className='ring-1 ring-black/75 size-8 hover:drop-shadow-[0_0_5px_#c8bf93] dark:hover:drop-shadow-[0_0_5px_#c8c3a8]' />
          <h1 className='text-3xl font-lato'>JavaScript Quizz</h1>
        </header>
        <article className='w-full flex flex-col gap-10'>
          {!startedGame && <StartGameButton onStart={handleClick} />}
          {startedGame && <Game />}
        </article>
      </main>
      <Footer />
    </div>
  )
}
