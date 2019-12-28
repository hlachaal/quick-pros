import React, { Component, Fragment } from "react"
import Zip from "react-zipcode"

import bookingStyles from "../../pages/booking.module.scss"
import { OPEN_ZIPS } from "./openZipCodes"

class ZipCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: "",
      err: "",
      buttonDisabled: false,
    }
  }
  validate = value => {
    if (OPEN_ZIPS.includes(value.toString())) {
      this.setState({ zipCode: value })
    } else {
      this.setState({
        err: "sorry, we are not in your area yet.",
        buttonDisabled: true,
      })
    }
  }
  handleChange = e => {
    console.log("hi".e.value)
  }
  render() {
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>Check if we’re available in your area</p>
        </div>
        <section className={bookingStyles.zipCodeForm}>
          <Zip onValue={value => this.validate(value)} />
          <p className={bookingStyles.err}>{this.state.err}</p>
          <button
            disabled={this.state.buttonDisabled}
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
