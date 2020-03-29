import React, { Component, Fragment } from "react"

import bookingStyles from "../../pages/booking.module.scss"
import { OPEN_ZIPS } from "./openZipCodes"

class ZipCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: "",
      err: "",
      buttonDisabled: true,
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  validate = e => {
    this.setState({ zipCode: e.target.value })
    if (e.target.value.length >= 5) {
      console.log(e.target.value)
      if (OPEN_ZIPS.includes(e.target.value.toString())) {
        this.setState({
          zipCode: e.target.value,
          err: "",
          buttonDisabled: false,
        })
      } else {
        this.setState({
          zipCode: "",
          err: "sorry, we are not in your area.",
          buttonDisabled: true,
        })
      }
    } else {
      this.setState({
        err: "",
        buttonDisabled: true,
      })
    }
  }
  handleChange = e => {
    console.log("hi".e.value)
  }
  render() {
    const style = {
      display: this.state.buttonDisabled ? "none" : "inline-block",
    }
    const style2 = {
      display: this.state.buttonDisabled ? "none" : "block",
    }
    return (
      <Fragment>
        <div className={bookingStyles.pageHead}>
          <h1>Check if we’re available in your area</h1>

          <p>What's your zip code?</p>
        </div>
        <section className={bookingStyles.zipCodeForm}>
          <div>
            <input
              value={this.state.zipCode}
              type="number"
              placeholder="Zip Code"
              onChange={this.validate}
            ></input>
            <span style={style}>&#10003;</span>
          </div>

          <p className={bookingStyles.err}>{this.state.err}</p>
          <button
            style={style2}
            className={bookingStyles.continue}
            onClick={() => {
              this.props.onSelectZipCode(this.state.zipCode)
            }}
          >
            Continue
          </button>
        </section>
      </Fragment>
    )
  }
}

export default ZipCode
