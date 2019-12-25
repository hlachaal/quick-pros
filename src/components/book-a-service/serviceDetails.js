import React, { Component, Fragment } from "react"

import bookingStyles from "../../pages/booking.module.scss"

class ServiceDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>
            serviceType:{this.props.serviceType}
            <br />
            service:{this.props.service}
            <br />
            zipCode:{this.props.zipCode}
          </p>
        </div>
        <section className={bookingStyles.serviceDetails}></section>
      </Fragment>
    )
  }
}

export default ServiceDetails
