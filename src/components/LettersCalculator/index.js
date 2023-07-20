// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputValue: '',
  }

  onChangeEvent = event => {
    const {value} = event.target

    this.setState({inputValue: value})
  }

  render() {
    const {inputValue} = this.state

    return (
      <div className="bg-container">
        <div className="row-container">
          <h1 className="heading">Calculate the Letters You Enter</h1>
          <label htmlFor="input" className="label">
            Enter the Phrase
          </label>
          <input
            onChange={this.onChangeEvent}
            value={inputValue}
            id="input"
            type="text"
            className="input-element"
            placeholder="Enter the Phrase"
          />
          <p className="letters-count">No.of letters: {inputValue.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
