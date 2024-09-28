import { useQuestionsStore } from '../store/questions'
import Question from './Question'

export default function Game () {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)

  return (
    <>
      <p className='text-center'>
        {currentQuestion + 1}/{questions.length}
      </p>

      <Question question={questions[currentQuestion]} />
    </>
  )
}
