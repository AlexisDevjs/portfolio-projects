import type { Question as QuestionType } from '../types'

interface Props {
  question: QuestionType
}

export default function Question ({ question }: Props) {
  if (!question) return

  return (
    <div className='text-center space-y-8'>
      <p>{question.question}</p>
      {question.code && (
        <pre>
          {question.code}
        </pre>
      )}
      <ul>
        {question.answers.map((question, index) => (
          <li key={index}>
            {question}
          </li>
        ))}
      </ul>
    </div>
  )
}
