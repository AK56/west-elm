import React from 'react'
import ProductList from './ProductList'

let products = [
  {
    "name": "product1",
    "priceRange": {
      "selling": {
        "low": 75,
        "high": 100,
      },
    },
    "hero": "image1.png",
    "images": [
      {
        "href": "thumb1.png",
      },
      {
        "href": "thumb2.png",
      },
    ],
  },
  {
    "name": "product2",
    "priceRange": {
      "selling": {
        "low": 25,
        "high": 50,
      },
    },
    "hero": "image2.png",
    "images": [
      {
        "href": "thumb1.png",
      },
      {
        "href": "thumb2.png",
      },
    ],
  }
]

describe('<ProductList />', () => {
  it('replace &amp; with a & for html', () => {
    let wrapper = shallow(<ProductList products={products} />)
  })
  let wrapper = shallow(<ProductList products={products} />)
  it('renders 2 Products', () => {
    expect(wrapper.find('Product').length).toBe(2)
  })
  it('renders 1 column for each product', () => {
    expect(wrapper.find('Col').length).toBe(2)
  })
  it('renders Product with right props', () => {
    const target = wrapper.find('Product').at(0).props()
    expect(target.name).toEqual('product1')
    expect(target.lowPrice).toBe(75)
    expect(target.highPrice).toBe(100)
    expect(target.hero).toEqual('image1.png')
  })
})
