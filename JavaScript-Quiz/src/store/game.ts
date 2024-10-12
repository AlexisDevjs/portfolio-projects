import { create } from 'zustand'
import { GameState } from '../lib/constants'
import type { GameStateType } from '../types'

type Game = {
  state: GameStateType
  setState: (newState: GameStateType) => void
}

export const useGameState = create<Game>((set) => ({
  state: GameState.READY,
  setState: (newState: GameStateType) => {
    set({ state: newState })
  }
}))
