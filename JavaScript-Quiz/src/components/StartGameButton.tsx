import { GameState } from '../lib/constants'
import { useGameState } from '../store/game'
import { useQuestionsStore } from '../store/questions'

export default function StartGameButton () {
  const getQuestions = useQuestionsStore((state) => state.getQuestions)
  const setGameState = useGameState((state) => state.setState)

  const handleClick = () => {
    getQuestions(10)
    setGameState(GameState.GAMING)
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      className='w-full sm:max-w-[315px] rounded-[3px] py-3 px-3 text-center font-bold text-black text-base bg-gradient-to-t from-[#F0DB4F] via-[#F0DB4F] to-[#e9cc0e] ring-1 ring-black hover:from-[#ecce09] hover:via-[#ecce09] hover:to-[#d4ba0d] transition-all duration-300 ease-out active:scale-95'
    >
      Empezar
    </button>
  )
}
