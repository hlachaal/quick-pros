import React, { Component, Fragment } from "react"
import bookingStyles from "../../pages/booking.module.scss"
class ServiceDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(
      ` ${this.props.serviceType} ${this.props.service} ${this.props.zipCode}`
    )
  }

  renderQuestion() {
    switch (this.props.service) {
      case "refrigerator":
        return "Is your refrigerator built-in?"
      case "tv":
        return "What size is your TV?"
      case "furniture":
        return "Choose a service to get started"
      case "handyman":
        return "Choose a service to get started"
      case "iphone":
        return "Select your iPhone model"
      case "moving":
        return "Approximately how long time the task would take?"
      default:
        return null
    }
  }
  render() {
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p></p>
        </div>
        <section className={bookingStyles.zipCodeForm}></section>
      </Fragment>
    )
  }
}

export default ServiceDetails
