import { useQuestionsStore } from '../store/questions'
import Question from './Question'

export default function Game () {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const goToNextQuestion = useQuestionsStore((state) => state.goToNextQuestion)
  const goToPreviousQuestion = useQuestionsStore(
    (state) => state.goToPreviousQuestion
  )

  return (
    <>
      <p className='text-center'>
        {currentQuestion + 1}/{questions.length}
      </p>

      <Question question={questions[currentQuestion]} />

      <div className='flex justify-between'>
        <button
          type='button'
          onClick={goToPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          {'< Anterior'}
        </button>

        <button
          type='button'
          onClick={goToNextQuestion}
          disabled={
            currentQuestion === questions.length - 1
            || questions[currentQuestion]?.selectedAnswer === undefined
          }
        >
          {'Siguiente >'}
        </button>
      </div>
    </>
  )
}
