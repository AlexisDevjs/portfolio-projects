import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import StartGameButton from './components/StartGameButton'
import Game from './components/Game'

export default function App () {
  const [startedGame, setStartedGame] = useState(false)

  const handleClick = () => {
    setStartedGame(!startedGame)
  }

  return (
    <>
      <Header />
      <div className='self-center h-full gird place-items-center'>
        {!startedGame && <StartGameButton onStart={handleClick} />}
        {startedGame && <Game />}
      </div>
      <Footer />
    </>
  )
}
