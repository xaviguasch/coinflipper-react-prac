import React, { Component } from 'react'

class CoinFlipper extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }

  constructor(props) {
    super(props)
    this.state = {
      isCoinFlipped: true
    }
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin</h1>

        <button>FLIP ME!</button>
      </div>
    )
  }
}

export default CoinFlipper
