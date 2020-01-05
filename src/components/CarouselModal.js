import React from 'react'
import { Modal } from 'react-bootstrap'
import CarouselImage from './CarouselImage'
const CarouselModal = ({show, closeCarousel, thumbnail}) => {
  return show ? (
    <Modal show={show} onHide={closeCarousel}>
      <Modal.Header closeButton>
      </Modal.Header>

      <Modal.Body>
        <CarouselImage thumbnail={thumbnail} />
      </Modal.Body>
    </Modal>
  ) : null
}
export default CarouselModal
