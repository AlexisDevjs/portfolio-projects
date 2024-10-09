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
    <section className='text-center space-y-8 w-full'>
      <h2 className='text-base font-bold text-gray-900/95'>
        {question.question}
      </h2>
      {question.code && <pre>{question.code}</pre>}
      <div className='flex flex-col gap-4'>
        {question.answers.map((answer, index) => (
          <button
            type='button'
            key={index}
            className='py-3 px-6 flex items-center text-pretty gap-5 rounded-md shadow-md w-full'
            onClick={handleClick(index)}
            disabled={question.selectedAnswer !== undefined}
            style={{
              background: getBackgroundColor(question, index)
            }}
          >
            <span className='rounded-full bg-yellow-300 w-[32px] h-[32px] grid place-items-center font-bold'>
              {answerOptions[index]}
            </span>
            <span className='font-medium text-left text-sm'>{answer}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
