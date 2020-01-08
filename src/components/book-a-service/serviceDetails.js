import React, { Component, Fragment } from "react"
import bookingStyles from "../../pages/booking.module.scss"
import { getQuestions } from "./utils"

class ServiceDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderStep1() {
    switch (this.props.allServiceInfo.service.name) {
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
    return <Fragment>{this.renderStep1()}</Fragment>
  }
}

export default ServiceDetails
