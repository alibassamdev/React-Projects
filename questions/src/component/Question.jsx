import React, { useState } from 'react'

function Question({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button onClick={() => setIsOpen(!isOpen)} className="question-btn">
          {isOpen ? '-' : '+'}
        </button>
      </header>
      {isOpen ? <p>{text}</p> : ''}
    </div>
  )
}

export default Question
