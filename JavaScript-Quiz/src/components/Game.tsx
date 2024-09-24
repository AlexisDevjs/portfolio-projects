import { useQuestionsStore } from '../store/questions'
import Question from './Question'

export default function Game () {
  const questions = useQuestionsStore((state) => state.questions)

  return (
    <article>
      <Question question={questions[0]} />
    </article>
  )
}
