import React, { Component } from 'react'
import './CoinImage.css'

class CoinImage extends Component {
  render() {
    return (
      <div className='CoinImage'>
        <img src={this.props.image} alt='' />
      </div>
    )
  }
}

export default CoinImage
