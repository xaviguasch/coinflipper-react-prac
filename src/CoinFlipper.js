import React, { Component } from 'react'
import CoinImage from './CoinImage'

class CoinFlipper extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }

  constructor(props) {
    super(props)
    this.state = {
      isCoinFlipped: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  flipTheCoin() {
    this.setState(curState => ({
      isCoinFlipped: !curState.isCoinFlipped
    }))
  }

  handleClick() {
    this.flipTheCoin()
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin</h1>
        <CoinImage
          image={
            this.state.isCoinFlipped
              ? 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'
              : 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'
          }
        />

        <button onClick={this.handleClick}>FLIP ME!</button>

        <p>
          Out of {5} flips, there have been {2} {'heads'} and {3} {'tails'}.
        </p>
      </div>
    )
  }
}

export default CoinFlipper
