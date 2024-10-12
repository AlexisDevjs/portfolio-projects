import { GameState } from '../lib/constants'
import { useGameState } from '../store/game'

export function useCurrentGameState () {
  const currentState = useGameState((state) => state.state)

  const currentGameState = {
    isReady: currentState === GameState.READY,
    isGaming: currentState === GameState.GAMING,
    isGameOver: currentState === GameState.GAME_OVER
  }

  return currentGameState
}
