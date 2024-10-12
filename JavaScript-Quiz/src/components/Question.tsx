import { getBackgroundColor } from '../lib/utils'
import { useQuestionsStore } from '../store/questions'
import type { Question as QuestionType } from '../types'

interface Props {
  question: QuestionType
}

const answerOptions = ['A', 'B', 'C', 'D']

export default function Question ({ question }: Props) {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer)

  const handleClick = (answersIndex: number) => {
    return () => {
      selectAnswer(question.id, answersIndex)
    }
  }

  if (!question) return

  return (
    <section className='text-center w-full rounded-md'>
      <h2 className='text-base font-bold text-gray-900/95 py-5 px-4'>
        {question.question}
      </h2>

      {question.code && <pre>{question.code}</pre>}

      <div className='flex flex-col border-t border-t-gray-300 divide-y divide-gray-300'>
        {question.answers.map((answer, index) => (
          <button
            type='button'
            key={index}
            className='py-2 px-6 flex items-center text-pretty gap-4 sm:gap-6 w-full'
            onClick={handleClick(index)}
            disabled={question.selectedAnswer !== undefined}
            style={{
              background: getBackgroundColor(question, index)
            }}
          >
            <span className='rounded-full bg-yellow-300 size-8 grid place-items-center font-lato font-semibold'>
              {answerOptions[index]}
            </span>
            <span className='font-medium text-sm'>{answer}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
