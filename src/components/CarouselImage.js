import React from 'react'
import { Carousel } from 'react-bootstrap'
const CarouselImage = ({thumbnail}) => {
  return (
    <Carousel>
      {thumbnail.map((image, index) => {
        return (
          <Carousel.Item key={index.toString()}>
            <img
              key={index.toString()}
              className="d-block w-100"
              src={image.href}
              alt="Product thumbnail"
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
export default CarouselImage
