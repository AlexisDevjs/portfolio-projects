import { useQuestionsStore } from '../store/questions'

interface Props {
  onStart?: () => void
}

export default function StartGameButton ({ onStart }: Props) {
  const getQuestions = useQuestionsStore((state) => state.getQuestions)

  const handleClick = () => {
    getQuestions(10)
    if (onStart) onStart()
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
