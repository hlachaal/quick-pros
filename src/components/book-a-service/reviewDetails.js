import React, { Component, Fragment } from "react"
import bookingStyles from "../../pages/booking.module.scss"

class ReviewDetails extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props.data }
  }
  render() {
    console.log(this.state)
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>Please review the details and submit the request.</p>
        </div>
        <div className={bookingStyles.detailsWrapper}>
          <div className={bookingStyles.detail}>
            <p></p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ReviewDetails
