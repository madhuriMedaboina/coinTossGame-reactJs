// Write your code here

import {Component} from 'react'
import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {head: 0, tail: 0, finalImage: headImg}

  onClick = () => {
    const {head, tail} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    let updateHeadCount = head
    let updateTailCount = tail
    let updateImage = ''

    if (tossResult === 0) {
      updateImage = headImg
      updateHeadCount += 1
    } else {
      updateImage = tailImg
      updateTailCount += 1
    }

    this.setState({
      head: updateHeadCount,
      tail: updateTailCount,
      finalImage: updateImage,
    })
  }

  render() {
    const {head, tail, finalImage} = this.state
    const totalCount = head + tail
    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={finalImage} alt="toss result" className="coin-img" />
          <button type="button" className="button" onClick={this.onClick}>
            Toss Coin
          </button>
          <div className="total-count-container">
            <p className="tail-para">Total: {totalCount}</p>
            <p className="tail-para">Heads: {head}</p>
            <p className="tail-para">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
