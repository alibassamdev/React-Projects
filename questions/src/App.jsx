import Question from './component/Question'
import questions from './data'

const App = () => {
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {questions.map((qna) => {
          return <Question key={qna.id} title={qna.title} text={qna.info} />
        })}
      </div>
    </main>
  )
}
export default App
