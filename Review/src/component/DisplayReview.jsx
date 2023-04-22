import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

function DisplayReview({ image, name, job, info }) {
  return (
    <div>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h3 className="author">{name}</h3>
      <h5 className="job">{job}</h5>
      <p className="info">{info}</p>
    </div>
  )
}

export default DisplayReview
