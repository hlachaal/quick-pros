import React, { Component, Fragment } from "react"

import bookingStyles from "../../pages/booking.module.scss"

class ZipCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: 0,
    }
  }
  updateZipCode = param => {
    const zipCode = param
    this.setState({ zipCode })
  }
  render() {
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>Check if we’re already available in your area</p>
        </div>
        <section className={bookingStyles.zipCodeForm}>
          <input
            onChange={() => {
              this.updateZipCode()
            }}
            type="tel"
            id="zipcode"
            placeholder="Enter your zip code"
          />
          <button
            onClick={() => {
              console.log(this.state.zipCode)
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
