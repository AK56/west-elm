import React from 'react'
const Product = ({name, lowPrice, highPrice, hero, thumbnail}) => {
  let styles = {
    backgroundImage: `url(${hero.href})`,
  }
  return (
    <div className="hero-image" style={styles}>
      <label className="hero-name">{name}</label>
      <b className="hero-price">${lowPrice} - ${highPrice}</b>
    </div>
  )
}

export default Product
