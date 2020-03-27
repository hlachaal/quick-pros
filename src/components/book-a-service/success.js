import React, { Component, Fragment } from "react"
import bookingStyles from "../../pages/booking.module.scss"

class Success extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props.data }
  }
  render() {
    console.log(this.state)
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>Your request has been successfully sent!</p>
        </div>
        <div className={bookingStyles.detailsWrapper}>
          <div className={bookingStyles.detail}>
            <p>
              We will review the provided information, communicate them with our
              trusted maintenance professional in your area and send you
              updates. If you have any questions please call{" "}
              <span>(619) 359-7532</span>. Thank you for choosing our service.
            </p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Success
