import { useState } from 'react'
import data from './data'

const App = () => {
  const [paragraphCount, setParagraphCount] = useState(1)
  const [text, setText] = useState([])

  function generateBtn(e) {
    e.preventDefault()
    setText(data.slice(0, parseInt(paragraphCount)))
  }

  return (
    <section className="section-center">
      <h4>Tired of Boring Lorem Ipsum?</h4>
      <div className="lorem-form">
        <label htmlFor="count">Paragraph</label>
        <input
          type="number"
          min="1"
          max="8"
          id="count"
          value={paragraphCount}
          onChange={(e) => setParagraphCount(e.target.value)}
        />
        <button className="btn" onClick={generateBtn}>
          Generate
        </button>
      </div>
      <div className="lorem-text">
        {text.map((v, idx) => {
          return <p key={idx}>{v}</p>
        })}
      </div>
    </section>
  )
}
export default App
