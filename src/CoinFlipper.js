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
      isCoinHeads: true,
      headFlips: 0,
      tailFlips: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  flipTheCoin() {
    const side = Math.floor(Math.random() * 2)
    if (side === 0) {
      this.setState({
        isCoinHeads: true
      })

      this.setState(curState => ({ headFlips: curState.headFlips + 1 }))
    } else {
      this.setState({
        isCoinHeads: false
      })
      this.setState(curState => ({ tailFlips: curState.tailFlips + 1 }))
    }
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
            this.state.isCoinHeads
              ? 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'
              : 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'
          }
        />

        <button onClick={this.handleClick}>FLIP ME!</button>

        <p>
          Out of {this.state.headFlips + this.state.tailFlips} flips, there have been {this.state.headFlips}{' '}
          heads and {this.state.tailFlips} tails.
        </p>
      </div>
    )
  }
}

export default CoinFlipper
