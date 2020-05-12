import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Welcome from "../components/widget/welcome"
import Appointment from "./../components/book-a-service/appointment"
import Reviews from "./../components/widget/reviews"
import Sponsors from "../components/widget/sponsors"

const BookingPage = () => {
  return (
    <Layout>
      <SEO title="Book a service" />
      <Welcome />
      <Appointment />
      <Reviews />
      <Sponsors />
    </Layout>
  )
}

export default BookingPage
