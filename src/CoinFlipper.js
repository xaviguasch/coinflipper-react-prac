import React, { Component } from 'react'
import CoinImage from './CoinImage'
import { choice } from './helpers'

class CoinFlipper extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40,
    coins: [
      {
        side: 'heads',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'
      },
      { side: 'tails', imgSrc: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg' }
    ]
  }

  constructor(props) {
    super(props)
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  flipCoin() {
    const newCoin = choice(this.props.coins)
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
      }
    })
  }

  handleClick(e) {
    this.flipCoin()
  }

  render() {
    return (
      <div className='CoinFlipper'>
        <h2>Let's flip a coin!</h2>
        {this.state.currCoin && <CoinImage info={this.state.currCoin} />}

        <button onClick={this.handleClick}>FLIP ME!</button>

        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails}{' '}
          tails.
        </p>
      </div>
    )
  }
}

export default CoinFlipper
