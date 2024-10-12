import { create } from 'zustand'
import type { GameStateType } from '../types'

type Game = {
  state: GameStateType
  setState: (newState: GameStateType) => void
}

export const useGameState = create<Game>((set) => ({
  state: 'Ready',
  setState: (newState: GameStateType) => {
    set({ state: newState })
  }
}))
