import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isRunning: false,
    seconds: 0,
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {isRunning} = this.state
    if (isRunning) {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1,
      }))
    }
  }

  onStart = () => {
    this.setState({
      isRunning: true,
    })
  }

  onStop = () => {
    this.setState({
      isRunning: false,
    })
  }

  onReset = () => {
    this.setState({
      isRunning: false,
      seconds: 0,
    })
  }

  render() {
    const {seconds} = this.state
    const date = new Date(0, 0, 0, 0, 0, 0)
    date.setSeconds(date.getSeconds() + seconds)
    const modifiedMin =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const modifiedSec =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

    return (
      <div className="bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="time-container">
          <div className="time-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-icon"
            />
            <p className="timer">Timer</p>
          </div>
          <h1 className="time">
            {modifiedMin}:{modifiedSec}
          </h1>
          <div className="buttons-container">
            <button
              type="button"
              className="start-button"
              onClick={this.onStart}
            >
              Start
            </button>
            <button type="button" className="stop-button" onClick={this.onStop}>
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
