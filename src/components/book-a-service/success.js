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
          <p>
            Our trusted maintenance pro will review your request and contact you
            soon. If you have any questions please call{" "}
            <span>(619) 359-7532</span>.
          </p>
        </div>
      </Fragment>
    )
  }
}

export default Success
