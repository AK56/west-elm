import React from 'react'
import CarouselImage from './CarouselImage'

const thumbnail = [
  {
    href: "thumb1.png"
  },
  {
    href: "thumb2.png"
  }
]

describe('<CarouselImage />', () => {
  let wrapper = mount(<CarouselImage thumbnail={thumbnail} />)
  it('renders bootstrap Carousel', () => {
    expect(wrapper.find('Carousel').length).toBe(1)
  })
  it('renders one image for each thumbnail', () => {
    expect(wrapper.find('img').length).toBe(2)
  })
  it('renders image with thumbnail source', () => {
    expect(wrapper.find('img').at(0).prop('src')).toEqual('thumb1.png')
  })
})
