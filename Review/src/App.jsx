import { useState } from 'react'
import reviews from './data.js'
import DisplayReview from './component/DisplayReview.jsx'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const App = () => {
  const [count, setCount] = useState(0)
  const [currentPerson, setCurrentPerson] = useState(reviews[0])

  const goNext = () => {
    setCount((index) => {
      const newValue = (index + 1) % reviews.length
      return newValue
    })
    setCurrentPerson(reviews[count])
  }

  const goPrev = () => {
    setCount((index) => {
      const newValue = (index - 1 + reviews.length) % reviews.length
      return newValue
    })
    setCurrentPerson(reviews[count])
  }

  function randomSelection() {
    setCurrentPerson(reviews[Math.floor(Math.random() * reviews.length)])
  }
  return (
    <main>
      <div className="review">
        <DisplayReview
          image={currentPerson.image}
          name={currentPerson.name}
          job={currentPerson.job}
          info={currentPerson.text}
        />
        <div className="btn-container">
          <button className="prev-btn" onClick={goPrev}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={goNext}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomSelection}>
          Surprise Me
        </button>
      </div>
    </main>
  )
}
export default App
