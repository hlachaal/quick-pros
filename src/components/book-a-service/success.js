import React, { Component, Fragment } from "react"
import bookingStyles from "../../pages/booking.module.scss"

class Success extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props.data }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    console.log(this.state)
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>Thank you for your request!</p>
        </div>
        <div className={bookingStyles.detailsWrapper}>
          <p>
            Your inquiry has been sent. If you have any questions please call{" "}
            <span>(619) 359-7532</span>.
          </p>
        </div>
      </Fragment>
    )
  }
}

export default Success
