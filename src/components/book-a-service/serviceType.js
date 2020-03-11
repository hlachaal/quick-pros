import React, { Component, Fragment } from "react"

import tv from "../../images/services/tv-mounting.svg"
import appliance from "../../images/services/appliance-repair.svg"
import furniture from "../../images/services/furniture-assembly.svg"
import handyman from "../../images/services/handyman-services.svg"
import iPhone from "../../images/services/iphone-repair.svg"
import moving from "../../images/services/moving.svg"
import cleaning from "../../images/services/cleaning-services.svg"
import plumbing from "../../images/services/plumbing.svg"

import bookingStyles from "../../pages/booking.module.scss"

class ServiceType extends Component {
  render() {
    return (
      <Fragment>
        <div className={bookingStyles.pageHead}>
          <h1>Connect with your local maintenance pro</h1>

          <p>Which service do you need?</p>
        </div>
        <section className={bookingStyles.services}>
          <button
            className={bookingStyles.serviceContainer}
            onClick={() => this.props.onSelectServiceType("handyman services")}
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

          <button
            onClick={() => this.props.onSelectServiceType("appliance repair")}
            className={bookingStyles.serviceContainer}
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

          <button
            onClick={() => this.props.onSelectServiceType("iphone repair")}
            className={bookingStyles.serviceContainer}
          >
            <div className={bookingStyles.imageContainer}>
              <img
                alt="iPhone repair"
                className={bookingStyles.serviceImage}
                src={iPhone}
              />
            </div>
            <div className={bookingStyles.serviceTitle}>
              <p>iPhone</p>
              <p>Repair</p>
            </div>
          </button>

          <button
            onClick={() => this.props.onSelectServiceType("furniture assembly")}
            className={bookingStyles.serviceContainer}
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

          <button
            onClick={() => this.props.onSelectServiceType("Plumbing")}
            className={bookingStyles.serviceContainer}
          >
            <div className={bookingStyles.imageContainer}>
              <img
                alt="Plumber services"
                className={bookingStyles.serviceImage}
                src={plumbing}
              />
            </div>
            <div className={bookingStyles.serviceTitle}>
              <p>Plumbing</p>
            </div>
          </button>

          <button
            onClick={() => this.props.onSelectServiceType("cleaning services")}
            className={bookingStyles.serviceContainer}
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

          <button
            onClick={() => this.props.onSelectServiceType("tv mounting")}
            className={bookingStyles.serviceContainer}
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

          <button
            onClick={() => this.props.onSelectServiceType("heavy lifting")}
            className={bookingStyles.serviceContainer}
          >
            <div className={bookingStyles.imageContainer}>
              <img
                alt="Moving and hauling"
                className={bookingStyles.serviceImage}
                src={moving}
              />
            </div>
            <div className={bookingStyles.serviceTitle}>
              <p>Small</p>
              <p>Moves</p>
            </div>
          </button>
        </section>
      </Fragment>
    )
  }
}

export default ServiceType
