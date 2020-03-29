import React, { Component, Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import bookingStyles from "../../pages/booking.module.scss"

class Service extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  renderQuestion() {
    switch (this.props.serviceType) {
      case "appliance repair":
        return "Select the appliance you want to repair"
      case "tv mounting":
        return "What size is your TV?"
      case "furniture assembly":
        return "Choose a service to get started"
      case "handyman services":
        return "Choose a service to get started"
      case "iphone repair":
        return "Select your iPhone model"
      case "heavy lifting":
        return "Approximately how long time the task would take?"
      default:
        return null
    }
  }
  renderServices() {
    switch (this.props.serviceType) {
      case "appliance repair":
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
            <button
              onClick={() => this.props.onSelectService("range hood")}
              className={bookingStyles.listItem}
            >
              Range hood
            </button>
            <button
              onClick={() => this.props.onSelectService("trash compactor")}
              className={bookingStyles.listItem}
            >
              Trash compactor
            </button>
            <button
              onClick={() => this.props.onSelectService("washer dryer combo")}
              className={bookingStyles.listItem}
            >
              Washer and dryer combo
            </button>
          </div>
        )
      case "tv mounting":
        return (
          <div className={bookingStyles.serviceList}>
            <button
              onClick={() => this.props.onSelectService('up to 31"')}
              className={bookingStyles.listItem}
            >
              Up to 31"
            </button>
            <button
              onClick={() => this.props.onSelectService('32" - 60"')}
              className={bookingStyles.listItem}
            >
              32" - 60"
            </button>
            <button
              onClick={() => this.props.onSelectService('61" - 80"')}
              className={bookingStyles.listItem}
            >
              61" - 80"
            </button>
            <button
              onClick={() => this.props.onSelectService('over 81"')}
              className={bookingStyles.listItem}
            >
              Over 81"
            </button>
          </div>
        )
      case "furniture assembly":
        return (
          <div className={bookingStyles.serviceList}>
            <button
              onClick={() =>
                this.props.onSelectService("IKEA furniture items only")
              }
              className={bookingStyles.listItem}
            >
              IKEA furniture items only
            </button>
            <button
              onClick={() =>
                this.props.onSelectService("other furniture items (non-IKEA)")
              }
              className={bookingStyles.listItem}
            >
              Other furniture items (non-IKEA)
            </button>
            <button
              onClick={() =>
                this.props.onSelectService("both IKEA and non-IKEA furniture")
              }
              className={bookingStyles.listItem}
            >
              Both IKEA and non-IKEA furniture
            </button>
          </div>
        )
      case "handyman services":
        return (
          <div className={bookingStyles.serviceList}>
            <button
              onClick={() => this.props.onSelectService("appliance install")}
              className={bookingStyles.listItem}
            >
              Appliance install
            </button>
            <button
              onClick={() => this.props.onSelectService("drywall repair")}
              className={bookingStyles.listItem}
            >
              Drywall repair
            </button>
            <button
              onClick={() => this.props.onSelectService("electrical services")}
              className={bookingStyles.listItem}
            >
              Electrical services
            </button>
            <button
              onClick={() => this.props.onSelectService("fan install")}
              className={bookingStyles.listItem}
            >
              Fan install
            </button>
            <button
              onClick={() => this.props.onSelectService("furniture assembly")}
              className={bookingStyles.listItem}
            >
              Furniture assembly
            </button>
            <button
              onClick={() => this.props.onSelectService("gutter cleaning")}
              className={bookingStyles.listItem}
            >
              Gutter cleaning
            </button>
            <button
              onClick={() =>
                this.props.onSelectService("hardware installation")
              }
              className={bookingStyles.listItem}
            >
              Hardware installation
            </button>
            <button
              onClick={() => this.props.onSelectService("interior painting")}
              className={bookingStyles.listItem}
            >
              Interior painting
            </button>
            <button
              onClick={() => this.props.onSelectService("light install")}
              className={bookingStyles.listItem}
            >
              Light install
            </button>
            <button
              onClick={() => this.props.onSelectService("tv mounting")}
              className={bookingStyles.listItem}
            >
              TV mounting
            </button>
            <button
              onClick={() => this.props.onSelectService("wall hanging")}
              className={bookingStyles.listItem}
            >
              Wall hanging
            </button>
            <button
              onClick={() =>
                this.props.onSelectService("window treatment installation")
              }
              className={bookingStyles.listItem}
            >
              Window treatment installation
            </button>
            <button
              onClick={() =>
                this.props.onSelectService("other handyman services")
              }
              className={bookingStyles.listItem}
            >
              Other handyman services
            </button>
          </div>
        )
      case "iphone repair":
        return (
          <div className={bookingStyles.serviceList}>
            <button
              onClick={() => this.props.onSelectService("XS Max")}
              className={bookingStyles.listItem}
            >
              XS Max
            </button>
            <button
              onClick={() => this.props.onSelectService("XR")}
              className={bookingStyles.listItem}
            >
              XR
            </button>
            <button
              onClick={() => this.props.onSelectService("XS")}
              className={bookingStyles.listItem}
            >
              XS
            </button>
            <button
              onClick={() => this.props.onSelectService("X")}
              className={bookingStyles.listItem}
            >
              X
            </button>
            <button
              onClick={() => this.props.onSelectService("8 Plus")}
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
              onClick={() => this.props.onSelectService("7 Plus")}
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
              onClick={() => this.props.onSelectService("6s Plus")}
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
              onClick={() => this.props.onSelectService("6 Plus")}
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
      case "heavy lifting":
        return (
          <div className={bookingStyles.serviceList}>
            <button
              onClick={() => this.props.onSelectService("up to 1 hr")}
              className={bookingStyles.listItem}
            >
              Up to 1 hr
            </button>
            <button
              onClick={() => this.props.onSelectService("2-3 hr")}
              className={bookingStyles.listItem}
            >
              2-3 hr
            </button>
            <button
              onClick={() => this.props.onSelectService("4+ hr")}
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
        <button
          className={bookingStyles.arrowLeft}
          onClick={() => this.props.onClickLeft(1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className={bookingStyles.question}>
          <p>{this.renderQuestion()}</p>
        </div>
        {this.renderServices()}
      </Fragment>
    )
  }
}

export default Service
