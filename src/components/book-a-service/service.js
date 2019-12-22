import React, { Component, Fragment } from "react"

import bookingStyles from "../../pages/booking.module.scss"

class Service extends Component {
  renderQuestion() {
    switch (this.props.serviceType) {
      case "appliance":
        return "Choose a service to get started"
      case "tv":
        return "What size is your TV?"
      case "furniture":
        return "Choose a service to get started"
      case "handyman":
        return "Choose a service to get started"
      case "iphone":
        return "Select your iPhone model"
      case "moving":
        return "Choose a service to get started"
      default:
        return null
    }
  }
  renderServices() {
    switch (this.props.serviceType) {
      case "appliance":
        return (
          <div className={bookingStyles.serviceList}>
            <button className={bookingStyles.listItem}>
              appliance service 1
            </button>
            <button className={bookingStyles.listItem}>
              appliance service 2
            </button>
          </div>
        )
      case "tv":
        return (
          <div className={bookingStyles.serviceList}>
            <button className={bookingStyles.listItem}>tv service 1</button>
            <button className={bookingStyles.listItem}>tv service 2</button>
          </div>
        )
      case "furniture":
        return (
          <div className={bookingStyles.serviceList}>
            <button className={bookingStyles.listItem}>
              furniture service 1
            </button>
            <button className={bookingStyles.listItem}>
              furniture service 2
            </button>
          </div>
        )
      case "handyman":
        return (
          <div className={bookingStyles.serviceList}>
            <button className={bookingStyles.listItem}>
              handyman service 1
            </button>
            <button className={bookingStyles.listItem}>
              handyman service 2
            </button>
          </div>
        )
      case "iphone":
        return (
          <div className={bookingStyles.serviceList}>
            <button className={bookingStyles.listItem}>iphone service 1</button>
            <button className={bookingStyles.listItem}>iphone service 2</button>
          </div>
        )
      case "moving":
        return (
          <div className={bookingStyles.serviceList}>
            <button className={bookingStyles.listItem}>moving service 1</button>
            <button className={bookingStyles.listItem}>moving service 2</button>
          </div>
        )
      default:
        return null
    }
  }
  render() {
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>Choose a service to get started</p>
        </div>
        {this.renderServices()}
      </Fragment>
    )
  }
}

export default Service
