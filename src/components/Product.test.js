import React from 'react'
import Product from './Product'

const productProps = {
  name: "name1",
  lowPrice: 75,
  highPrice: 100,
  hero: {
    href: "image1.png"
  },
  thumbnail : {
    "0": {
      href: "thumb1.png"
    },
    "1": {
      href: "thumb2.png"
    }
  }
}
describe('<Product />', () => {
  let wrapper = shallow(<Product {...productProps} />)
  it('intiliazes showCarousel state with false', () => {
    expect(wrapper.instance().state.showCarousel).toEqual(false)
  })
  describe('hero-image', () => {
    let heroImage = wrapper.find('div.hero-image')
    it('renders a div with class hero-image to wrap the product', () => {
      expect(heroImage.length).toBe(1)
    })
    it('sets the div background to product hero image', () => {
      expect(heroImage.prop('style')).toHaveProperty('backgroundImage', 'url(image1.png)')
    })
    it('sets showCarousel state to true when hero iamge is clicked', () => {
      heroImage.simulate('click')
      expect(wrapper.instance().state.showCarousel).toEqual(true)
    })
  })
  it('renders a label with product name', () => {
    expect(wrapper.find('label.hero-name').text()).toEqual('name1')
  })
  it('displays low to high price tag', () => {
    expect(wrapper.find('b').text()).toEqual('$75 - $100')
  })
  it('renders <CarouselModal />', () => {
    expect(wrapper.find('CarouselModal').length).toBe(1)
  })
  it('renders CarouselModal with right props', () => {
    const target = wrapper.find('CarouselModal').props()
    expect(target.show).toEqual(wrapper.instance().state.showCarousel)
    expect(target.thumbnail).toBe(productProps.thumbnail)
  })
})
