import React from 'react'
import { Col } from 'react-bootstrap'
import Product from './Product'

const ProductList = ({products}) => {
  return products.map((product, index) => {
    const name = product.name.replace(/&amp;/g, '&')
    const lowPrice = product.priceRange.selling.low
    const highPrice =  product.priceRange.selling.high
    const hero = product.hero
    const thumbnail = product.images
    return (
      <Col xs={12} md={4} key={index.toString()}>
        <Product
          key={index.toString()}
          name={name}
          lowPrice={lowPrice}
          highPrice={highPrice}
          hero={hero}
          thumbnail={thumbnail}
        />
      </Col>
    )
  })
}
export default ProductList
