import React, { Component } from 'react'
import './CoinImage.css'

class CoinImage extends Component {
  render() {
    return (
      <div className='CoinImage'>
        <img src={this.props.info.imgSrc} alt={this.props.info.side} />
      </div>
    )
  }
}

export default CoinImage
