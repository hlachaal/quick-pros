import React, { Component, Fragment } from "react"

import tv from "../../images/services/tv-mounting.svg"
import appliance from "../../images/services/appliance-repair.svg"
import furniture from "../../images/services/furniture-assembly.svg"
import handyman from "../../images/services/handyman-services.svg"
import iPhone from "../../images/services/iphone-repair.svg"
import moving from "../../images/services/moving.svg"
import cleaning from "../../images/services/cleaning-services.svg"

import bookingStyles from "../../pages/booking.module.scss"

class ServiceType extends Component {
  render() {
    return (
      <Fragment>
        <div className={bookingStyles.pageHead}>
          <div className={bookingStyles.title}>
            <h1>Book a Service</h1>
          </div>
          <div className={bookingStyles.subTitle}>
            <p>Save time and money with same-day service</p>
          </div>
        </div>
        <section className={bookingStyles.services}>
          <div className={bookingStyles.serviceContainer}>
            <button
              onClick={() => this.props.onSelectServiceType("appliance")}
              className={bookingStyles.serviceWrapper}
            >
              <div className={bookingStyles.imageContainer}>
                <img
                  alt="appliance install and repair"
                  className={bookingStyles.serviceImage}
                  src={appliance}
                />
              </div>
              <div className={bookingStyles.serviceTitle}>
                <p>Appliance</p>
                <p>Repair</p>
              </div>
            </button>
          </div>

          <div className={bookingStyles.serviceContainer}>
            <button
              onClick={() => this.props.onSelectServiceType("tv")}
              className={bookingStyles.serviceWrapper}
            >
              <div className={bookingStyles.imageContainer}>
                <img
                  alt="TV mounting"
                  className={bookingStyles.serviceImage}
                  src={tv}
                />
              </div>
              <div className={bookingStyles.serviceTitle}>
                <p>TV</p>
                <p>Mounting</p>
              </div>
            </button>
          </div>

          <div className={bookingStyles.serviceContainer}>
            <button
              onClick={() => this.props.onSelectServiceType("furniture")}
              className={bookingStyles.serviceWrapper}
            >
              <div className={bookingStyles.imageContainer}>
                <img
                  alt="Furniture assembly and delivery"
                  className={bookingStyles.serviceImage}
                  src={furniture}
                />
              </div>
              <div className={bookingStyles.serviceTitle}>
                <p>Furniture</p>
                <p>Assembly</p>
              </div>
            </button>
          </div>

          <div className={bookingStyles.serviceContainer}>
            <button
              onClick={() => this.props.onSelectServiceType("handyman")}
              className={bookingStyles.serviceWrapper}
            >
              <div className={bookingStyles.imageContainer}>
                <img
                  alt="Handyman services"
                  className={bookingStyles.serviceImage}
                  src={handyman}
                />
              </div>
              <div className={bookingStyles.serviceTitle}>
                <p>Handyman</p>
                <p>Services</p>
              </div>
            </button>
          </div>

          <div className={bookingStyles.serviceContainer}>
            <button
              onClick={() => this.props.onSelectServiceType("iphone")}
              className={bookingStyles.serviceWrapper}
            >
              <div className={bookingStyles.imageContainer}>
                <img
                  alt="iPhone repair"
                  className={bookingStyles.serviceImage}
                  src={iPhone}
                />
              </div>
              <div className={bookingStyles.serviceTitle}>
                <p>Gadget</p>
                <p>Repair</p>
              </div>
            </button>
          </div>

          <div className={bookingStyles.serviceContainer}>
            <button
              onClick={() => this.props.onSelectServiceType("moving")}
              className={bookingStyles.serviceWrapper}
            >
              <div className={bookingStyles.imageContainer}>
                <img
                  alt="Moving and hauling"
                  className={bookingStyles.serviceImage}
                  src={moving}
                />
              </div>
              <div className={bookingStyles.serviceTitle}>
                <p>Heavy</p>
                <p>Lifting</p>
              </div>
            </button>
          </div>

          <div className={bookingStyles.serviceContainer}>
            <button
              onClick={() => this.props.onSelectServiceType("cleaning")}
              className={bookingStyles.serviceWrapper}
            >
              <div className={bookingStyles.imageContainer}>
                <img
                  alt="Cleaning Services"
                  className={bookingStyles.serviceImage}
                  src={cleaning}
                />
              </div>
              <div className={bookingStyles.serviceTitle}>
                <p>Cleaning</p>
                <p>Services</p>
              </div>
            </button>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default ServiceType
