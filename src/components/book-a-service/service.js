import React, { Component, Fragment } from "react"

import bookingStyles from "../../pages/booking.module.scss"

class Service extends Component {
  renderQuestion() {
    switch (this.props.serviceType) {
      case "appliance":
        return "Select the appliance you want to repair"
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
  renderServices() {
    switch (this.props.serviceType) {
      case "appliance":
        return (
          <div className={bookingStyles.serviceList}>
            <button
              onClick={() => this.props.onSelectService("refrigerator")}
              className={bookingStyles.listItem}
            >
              Refrigerator
            </button>
            <button
              onClick={() => this.props.onSelectService("dryer")}
              className={bookingStyles.listItem}
            >
              Dryer
            </button>
            <button
              onClick={() => this.props.onSelectService("oven")}
              className={bookingStyles.listItem}
            >
              Oven
            </button>
            <button
              onClick={() => this.props.onSelectService("washer")}
              className={bookingStyles.listItem}
            >
              Washer
            </button>
            <button
              onClick={() => this.props.onSelectService("dishwasher")}
              className={bookingStyles.listItem}
            >
              Dishwasher
            </button>
            <button
              onClick={() => this.props.onSelectService("cooktop")}
              className={bookingStyles.listItem}
            >
              Cooktop
            </button>
            <button
              onClick={() => this.props.onSelectService("freezer")}
              className={bookingStyles.listItem}
            >
              Freezer
            </button>
            <button
              onClick={() => this.props.onSelectService("microwave")}
              className={bookingStyles.listItem}
            >
              Microwave
            </button>
          </div>
        )
      case "tv":
        return (
          <div className={bookingStyles.serviceList}>
            <button
              onClick={() => this.props.onSelectService("up31")}
              className={bookingStyles.listItem}
            >
              Up to 31"
            </button>
            <button
              onClick={() => this.props.onSelectService("3280")}
              className={bookingStyles.listItem}
            >
              32" - 60"
            </button>
            <button
              onClick={() => this.props.onSelectService("6180")}
              className={bookingStyles.listItem}
            >
              61" - 80"
            </button>
            <button
              onClick={() => this.props.onSelectService("over81")}
              className={bookingStyles.listItem}
            >
              Over 81"
            </button>
          </div>
        )
      case "furniture":
        return (
          <div className={bookingStyles.serviceList}>
            <button
              onClick={() => this.props.onSelectService("ikea")}
              className={bookingStyles.listItem}
            >
              IKEA furniture items only
            </button>
            <button
              onClick={() => this.props.onSelectService("other")}
              className={bookingStyles.listItem}
            >
              Other furniture items (non-IKEA)
            </button>
            <button
              onClick={() => this.props.onSelectService("both")}
              className={bookingStyles.listItem}
            >
              Both IKEA and non-IKEA furniture
            </button>
          </div>
        )
      case "handyman":
        return (
          <div className={bookingStyles.serviceList}>
            <button
              onClick={() => this.props.onSelectService("applianceInstall")}
              className={bookingStyles.listItem}
            >
              Appliance install
            </button>
            <button
              onClick={() => this.props.onSelectService("drywallRepair")}
              className={bookingStyles.listItem}
            >
              Drywall repair
            </button>
            <button
              onClick={() => this.props.onSelectService("electricalServices")}
              className={bookingStyles.listItem}
            >
              Electrical services
            </button>
            <button
              onClick={() => this.props.onSelectService("fanInstall")}
              className={bookingStyles.listItem}
            >
              Fan install
            </button>
            <button
              onClick={() => this.props.onSelectService("furnitureAssembly")}
              className={bookingStyles.listItem}
            >
              Furniture assembly
            </button>
            <button
              onClick={() => this.props.onSelectService("gutterCleaning")}
              className={bookingStyles.listItem}
            >
              Gutter cleaning
            </button>
            <button
              onClick={() => this.props.onSelectService("hardwareInstallation")}
              className={bookingStyles.listItem}
            >
              Hardware installation
            </button>
            <button
              onClick={() => this.props.onSelectService("interiorPainting")}
              className={bookingStyles.listItem}
            >
              Interior painting
            </button>
            <button
              onClick={() => this.props.onSelectService("lightInstall")}
              className={bookingStyles.listItem}
            >
              Light install
            </button>
            <button
              onClick={() => this.props.onSelectService("wallHanging")}
              className={bookingStyles.listItem}
            >
              Wall hanging
            </button>
            <button
              onClick={() => this.props.onSelectService("other")}
              className={bookingStyles.listItem}
            >
              Other handyman services
            </button>
          </div>
        )
      case "iphone":
        return (
          <div className={bookingStyles.serviceList}>
            <button
              onClick={() => this.props.onSelectService("xsmax")}
              className={bookingStyles.listItem}
            >
              XS Max
            </button>
            <button
              onClick={() => this.props.onSelectService("xr")}
              className={bookingStyles.listItem}
            >
              XR
            </button>
            <button
              onClick={() => this.props.onSelectService("xs")}
              className={bookingStyles.listItem}
            >
              XS
            </button>
            <button
              onClick={() => this.props.onSelectService("x")}
              className={bookingStyles.listItem}
            >
              X
            </button>
            <button
              onClick={() => this.props.onSelectService("8plus")}
              className={bookingStyles.listItem}
            >
              8 Plus
            </button>
            <button
              onClick={() => this.props.onSelectService("8")}
              className={bookingStyles.listItem}
            >
              8
            </button>
            <button
              onClick={() => this.props.onSelectService("7plus")}
              className={bookingStyles.listItem}
            >
              7 Plus
            </button>
            <button
              onClick={() => this.props.onSelectService("7")}
              className={bookingStyles.listItem}
            >
              7
            </button>
            <button
              onClick={() => this.props.onSelectService("6splus")}
              className={bookingStyles.listItem}
            >
              6s Plus
            </button>
            <button
              onClick={() => this.props.onSelectService("6s")}
              className={bookingStyles.listItem}
            >
              6s
            </button>
            <button
              onClick={() => this.props.onSelectService("6plus")}
              className={bookingStyles.listItem}
            >
              6 Plus
            </button>
            <button
              onClick={() => this.props.onSelectService("6")}
              className={bookingStyles.listItem}
            >
              6
            </button>
          </div>
        )
      case "moving":
        return (
          <div className={bookingStyles.serviceList}>
            <button
              onClick={() => this.props.onSelectService("upto1")}
              className={bookingStyles.listItem}
            >
              Up to 1 hr
            </button>
            <button
              onClick={() => this.props.onSelectService("23")}
              className={bookingStyles.listItem}
            >
              2-3 hr
            </button>
            <button
              onClick={() => this.props.onSelectService("4")}
              className={bookingStyles.listItem}
            >
              4+ hr
            </button>
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
          <p>{this.renderQuestion()}</p>
        </div>
        {this.renderServices()}
      </Fragment>
    )
  }
}

export default Service
