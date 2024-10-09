import { useQuestionsStore } from '../store/questions'
import Question from './Question'

export default function Game () {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const getNextQuestion = useQuestionsStore((state) => state.getNextQuestion)
  const getPreviousQuestion = useQuestionsStore(
    (state) => state.getPreviousQuestion
  )

  return (
    <section className='ring-1 ring-gray-200 p-4 rounded-sm'>
      <p className='text-center text-base font-semibold text-gray-800/90'>
        PREGUNTA {currentQuestion + 1}/{questions.length}
      </p>

      <Question question={questions[currentQuestion]} />

      <div className='flex justify-between'>
        <button
          type='button'
          onClick={getPreviousQuestion}
          disabled={currentQuestion === 0}
          className='border border-gray-100'
        >
          {'< Anterior'}
        </button>

        <button
          type='button'
          onClick={getNextQuestion}
          disabled={
            currentQuestion === questions.length - 1
            || questions[currentQuestion]?.selectedAnswer === undefined
          }
        >
          {'Siguiente >'}
        </button>
      </div>
    </section>
  )
}
