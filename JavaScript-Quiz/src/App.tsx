import Footer from './components/Footer'
import StartGameButton from './components/StartGameButton'
import Game from './components/Game'
import { JavaScriptIcon } from './components/ui/icons'
import Navbar from './components/Navbar'
import { useGameState } from './store/game'
import { GameState } from './lib/constants'

export default function App () {
  const currentGameState = useGameState((state) => state.state)

  return (
    <div className='min-h-[100svh] h-full flex flex-col justify-between items-center py-2 relative'>
      <Navbar />
      <main className='flex-grow flex flex-col justify-center gap-10 my-5 max-w-[448px] mx-auto items-center py-2 px-4'>
        <header className='flex justify-center items-center gap-3'>
          <JavaScriptIcon className='ring-1 ring-black/75 size-8 hover:drop-shadow-[0_0_5px_#c8bf93] dark:hover:drop-shadow-[0_0_5px_#c8c3a8]' />
          <h1 className='text-4xl font-lato'>JavaScript Quizz</h1>
        </header>
        <article
          className={`w-full flex flex-col gap-10 ${
            currentGameState === GameState.GAMING ? 'sm:min-w-[410px]' : ''
          }`}
        >
          {currentGameState === GameState.READY && <StartGameButton />}
          {currentGameState === GameState.GAMING && <Game />}
        </article>
      </main>
      <Footer />
    </div>
  )
}
