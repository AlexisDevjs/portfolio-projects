import Container from './components/Container'
import Game from './components/Game'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { GameWrapper } from './components/GameWrapper'
import { GameHeader } from './components/GameHeader'

export default function App () {
  return (
    <Container>
      <Navbar />
      <GameWrapper>
        <GameHeader />
        <Game />
      </GameWrapper>
      <Footer />
    </Container>
  )
}
