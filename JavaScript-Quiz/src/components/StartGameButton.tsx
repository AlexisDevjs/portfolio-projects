import { useQuestionsStore } from '../store/questions'

interface Props {
  onStart?: () => void
}

export default function StartGameButton ({ onStart }: Props) {
  const getQuestions = useQuestionsStore((state) => state.getQuestions)

  const handleClick = () => {
    getQuestions(5)
    if (onStart) onStart()
  }

  return (
    <button onClick={handleClick}>
      Start Game
      <svg
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        fill='currentColor'
        className='size-[26px]'
        viewBox='0 0 32 32'
      ></svg>
    </button>
  )
}
