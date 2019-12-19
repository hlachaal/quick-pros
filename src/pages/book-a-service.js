import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import tv from "../images/services/tv-mounting.svg"
import appliance from "../images/services/appliance-services.svg"
import furniture from "../images/services/furniture-assembly.svg"
import handyman from "../images/services/handyman-services.svg"
import iPhone from "../images/services/iphone-repair.svg"
import moving from "../images/services/moving.svg"

import bookingStyles from "./booking.module.scss"

const BookingPage = () => {
  return (
    <Layout>
      <SEO title="Book a service" />
      <div className={bookingStyles.pageHead}>
        <div className={bookingStyles.title}>
          <h1>Book a Service</h1>
        </div>
        <div className={bookingStyles.subTitle}>
          <p>Save time and money with same-day setup and repairs</p>
        </div>
      </div>
      <section className={bookingStyles.services}>
        <div className={bookingStyles.serviceContainer}>
          <a className={bookingStyles.serviceWrapper}>
            <div className={bookingStyles.imageContainer}>
              <img className={bookingStyles.serviceImage} src={appliance} />
            </div>
            <div className={bookingStyles.serviceTitle}>
              <p>Appliance</p>
              <p>Services</p>
            </div>
          </a>
        </div>

        <div className={bookingStyles.serviceContainer}>
          <a className={bookingStyles.serviceWrapper}>
            <div className={bookingStyles.imageContainer}>
              <img className={bookingStyles.serviceImage} src={tv} />
            </div>
            <div className={bookingStyles.serviceTitle}>
              <p>TV</p>
              <p>Mounting</p>
            </div>
          </a>
        </div>

        <div className={bookingStyles.serviceContainer}>
          <a className={bookingStyles.serviceWrapper}>
            <div className={bookingStyles.imageContainer}>
              <img className={bookingStyles.serviceImage} src={furniture} />
            </div>
            <div className={bookingStyles.serviceTitle}>
              <p>Furniture</p>
              <p>Assembly</p>
            </div>
          </a>
        </div>

        <div className={bookingStyles.serviceContainer}>
          <a className={bookingStyles.serviceWrapper}>
            <div className={bookingStyles.imageContainer}>
              <img className={bookingStyles.serviceImage} src={handyman} />
            </div>
            <div className={bookingStyles.serviceTitle}>
              <p>Handyman</p>
              <p>Services</p>
            </div>
          </a>
        </div>

        <div className={bookingStyles.serviceContainer}>
          <a className={bookingStyles.serviceWrapper}>
            <div className={bookingStyles.imageContainer}>
              <img className={bookingStyles.serviceImage} src={iPhone} />
            </div>
            <div className={bookingStyles.serviceTitle}>
              <p>iPhone</p>
              <p>Repair</p>
            </div>
          </a>
        </div>

        <div className={bookingStyles.serviceContainer}>
          <a className={bookingStyles.serviceWrapper}>
            <div className={bookingStyles.imageContainer}>
              <img className={bookingStyles.serviceImage} src={moving} />
            </div>
            <div className={bookingStyles.serviceTitle}>
              <p>Moving &</p>
              <p>Hauling</p>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default BookingPage
