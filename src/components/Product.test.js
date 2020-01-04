import React from 'react'
import Product from './Product'

const productProps = {
  name: "name1",
  lowPrice: 75,
  highPrice: 100,
  hero: {
    href: "image1.png"
  }
}
describe('<Product />', () => {
  let wrapper = shallow(<Product {...productProps} />)
  it('renders a div with class hero-image to wrap the product', () => {
    expect(wrapper.find('div').hasClass('hero-image')).toEqual(true)
  })
  it('sets the div background to product hero image', () => {
    expect(wrapper.find('div.hero-image').prop('style')).toHaveProperty('backgroundImage', 'url(image1.png)')
  })
  it('renders a label with product name', () => {
    expect(wrapper.find('label.hero-name').text()).toEqual('name1')
  })
  it('displays low to high price tag', () => {
    expect(wrapper.find('b').text()).toEqual('$75 - $100')
  })
})
