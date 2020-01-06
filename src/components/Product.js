import React from 'react'
import CarouselModal from './CarouselModal'
class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCarousel: false
    }
  }
  closeCarousel = () => this.setState({showCarousel: false})
  openCarousel = () => this.setState({showCarousel: true})

  render() {
    const { name, lowPrice, highPrice, hero, thumbnail } = this.props
    let styles = {
      backgroundImage: `url(${hero.href})`,
    }
    return (
      <React.Fragment>
        <div className="hero-image" style={styles} onClick={this.openCarousel} aria-label="Main Product Image">
          <label className="hero-name">{name}</label>
          <b className="hero-price" aria-label="Product Price Range">${lowPrice} - ${highPrice}</b>
        </div>
        <CarouselModal show={this.state.showCarousel} closeCarousel={this.closeCarousel} thumbnail={thumbnail} />
      </React.Fragment>
    )
  }
}

export default Product
