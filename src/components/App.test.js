import React from 'react'
import App from './App'

let goodJSON = {
  "id":"shop/new/all-new",
  "name":"All New",
  "groups": {
    "0": {
      "name": "product1",
      "hero": "image1.jpg",
    },
    "1": {
      "name": "product2",
      "hero": "image2.jpg",
    },
  }
}
let badJSON = ''

describe('<App />', () => {
  it('renders header with error details if no JSON read', () => {
    let wrapper = shallow(<App data={badJSON} />)
    expect(wrapper.find('h1').text()).toEqual('JSON loading error. Make sure the json file is available under /src')
  })
  let wrapper = shallow(<App data={goodJSON} />)
  it('renders header', () => {
    expect(wrapper.find('h1').length).toBe(1)
  })
  it('renders Container', () => {
    expect(wrapper.find('Container').length).toBe(1)
  })
  it('renders ProductList', () => {
    expect(wrapper.find('ProductList').length).toBe(1)
  })
  describe('checkJson()', () => {
    it('returns true if JSON data is read', () => {
      let wrapper = shallow(<App data={goodJSON} />)
      expect(wrapper.instance().checkJSON()).toEqual(true)
    })
    it('renders false if JSON data is an empty string', () => {
      let wrapper = shallow(<App data={badJSON} />)
      expect(wrapper.instance().checkJSON()).toEqual(false)
    })
    it('renders false if JSON data is null', () => {
      let wrapper = shallow(<App data={null} />)
      expect(wrapper.instance().checkJSON()).toEqual(false)
    })
    it('renders false if JSON data is undefined', () => {
      let wrapper = shallow(<App data={undefined} />)
      expect(wrapper.instance().checkJSON()).toEqual(false)
    })
  })
})
