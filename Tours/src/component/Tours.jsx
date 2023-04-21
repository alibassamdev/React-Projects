import React, { useState } from 'react'

function Tours({ image, name, info, price, deleteTour }) {
  const [readMore, setReadMore] = useState(false)

  return (
    <article className="single-tour">
      <img className="img" src={image} alt={name} />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button className="info-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Show Less' : '  Read More'}
        </button>
        <button className="delete-btn btn-block btn" onClick={deleteTour}>
          Not Interested
        </button>
        <span className="tour-price">${price}</span>
      </div>
    </article>
  )
}

export default Tours
