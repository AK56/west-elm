import React from 'react'
import CarouselModal from './CarouselModal'
import { Modal } from 'react-bootstrap'
const modalProps = {
  show: true,
  closeCarousel: jest.fn(),
  thumbnail: {
    "0": {
      href: "thumb1.png"
    },
    "1": {
      href: "thumb2.png"
    }
  }
}
const modalPropsFalse = {
  show: false,
  closeCarousel: jest.fn(),
  thumbnail: {
    "0": {
      href: "thumb1.png"
    },
    "1": {
      href: "thumb2.png"
    }
  }
}

describe('<CarouselModal />', () => {
  let wrapper = shallow(<CarouselModal {...modalProps} />)
  it('renders bootstrap modal if show prop is true', () => {
    expect(wrapper.find(Modal).length).toBe(1)
  })
  it('passes thumbnail prop to render CarouselImage', () => {
    expect(wrapper.find('CarouselImage').props().thumbnail).toEqual(modalProps.thumbnail)
  })
  it('does not render bootstrap modal if show prop is false', () => {
    let wrapper = shallow(<CarouselModal {...modalPropsFalse} />)
    expect(wrapper.find(Modal).length).toBe(0)
  })
})
