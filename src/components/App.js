import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductList from './ProductList'
import './style.sass'

class App extends React.Component {
  checkJSON() {
    let jsonProducts = this.props.data
    return jsonProducts ? true : false
  }

  render(){
    return this.checkJSON() ? (
      <React.Fragment>
        <h1 className="main-header">
          west elm
        </h1>
        <Container>
          <Row>
            <ProductList products={this.props.data.groups} />
          </Row>
        </Container>
      </React.Fragment>
    ) : <h1 className="main-header-error">JSON loading error. <br/>Make sure the json file is available under /src</h1>
  }
}
export default App
