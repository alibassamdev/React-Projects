import React from 'react'

function Item({ image, name, price, text }) {
  return (
    <div className="menu-item">
      <img className="img" src={image} alt="" />
      <div className="item-info">
        <header>
          <h5>{name}</h5>
          <span className="item-price">{price}</span>
        </header>
        <p className="item-text">{text}</p>
      </div>
    </div>
  )
}

export default Item
