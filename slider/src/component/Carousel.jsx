import React from 'react'
import { shortList, list, longList } from '../data'
import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useEffect } from 'react'

function Carousel() {
  const [people, setPeople] = useState(longList)
  const [currentPerson, setCurrentPerson] = useState(0)

  const prevSlide = () => {
    setCurrentPerson((prev) => {
      const result = (prev - 1 + people.length) % people.length
      return result
    })
  }

  const nextSlide = () => {
    setCurrentPerson((prev) => {
      const result = (prev + 1) % people.length
      return result
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [currentPerson])

  return (
    <section className="slider-container">
      {people.map((person, idx) => {
        const { id, image, name, title, quote } = person
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (idx - currentPerson)}%)`,
              opacity: idx === currentPerson ? 1 : 0,
              visibility: idx === currentPerson ? 'visible' : 'hidden',
            }}
            key={idx}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        )
      })}
      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  )
}

export default Carousel
