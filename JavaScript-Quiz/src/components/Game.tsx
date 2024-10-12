import { useQuestionsStore } from '../store/questions'
import Question from './Question'

export default function Game () {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const getNextQuestion = useQuestionsStore((state) => state.getNextQuestion)
  const getPreviousQuestion = useQuestionsStore(
    (state) => state.getPreviousQuestion
  )

  const isSelectedAnswer
    = questions[currentQuestion]?.selectedAnswer !== undefined

  return (
    <>
      <div className='ring-1 ring-neutral-200 shadow-[0_5px_10px_rgba(0,0,0,0.3)]'>
        <section className='flex justify-center items-center gap-5 py-3 border-b border-gray-300'>
          <button
            type='button'
            onClick={getPreviousQuestion}
            disabled={currentQuestion === 0}
            className='border border-gray-100'
          >
            {'<'}
          </button>

          <h2 className='text-center text-sm font-lato font-semibold text-gray-900'>
            PREGUNTA {currentQuestion + 1}/{questions.length}
          </h2>
          <button
            type='button'
            onClick={getNextQuestion}
            disabled={
              currentQuestion === questions.length - 1 || !isSelectedAnswer
            }
          >
            {'>'}
          </button>
        </section>

        <Question question={questions[currentQuestion]} />
      </div>

      <button
        type='button'
        onClick={getNextQuestion}
        disabled={currentQuestion === questions.length - 1 || !isSelectedAnswer}
        className={`py-3 w-full bg-yellow-300 text-black font-bold text-center ring-1 ring-black/90 ${
          !isSelectedAnswer ? 'opacity-65' : ''
        } `}
      >
        Siguiente pregunta
      </button>
    </>
  )
}
