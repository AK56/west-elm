import React from 'react'
import { Modal } from 'react-bootstrap'
import CarouselImage from './CarouselImage'
const CarouselModal = ({show, closeCarousel, thumbnail}) => {
  return show ? (
    <Modal show={show} onHide={closeCarousel}>
      <Modal.Header closeButton bsPrefix="carousel-modal-header">
      </Modal.Header>

      <Modal.Body bsPrefix="carousel-modal-body">
        <CarouselImage thumbnail={thumbnail} />
      </Modal.Body>
    </Modal>
  ) : null
}
export default CarouselModal
