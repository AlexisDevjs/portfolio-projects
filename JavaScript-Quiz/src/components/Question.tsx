import { getBackgroundColor } from '../lib/utils'
import { useQuestionsStore } from '../store/questions'
import type { Question as QuestionType } from '../types'

interface Props {
  question: QuestionType
}

export default function Question ({ question }: Props) {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer)

  const handleClick = (answersIndex: number) => {
    return () => {
      selectAnswer(question.id, answersIndex)
    }
  }

  if (!question) return

  return (
    <div className='text-center space-y-8'>
      <p>{question.question}</p>
      {question.code && <pre>{question.code}</pre>}
      <div className='flex flex-col'>
        {question.answers.map((answer, index) => (
          <button
            type='button'
            key={index}
            className='py-1'
            onClick={handleClick(index)}
            disabled={question.selectedAnswer !== undefined}
            style={{
              background: getBackgroundColor(question, index)
            }}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  )
}
