import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Appointment from "./../components/book-a-service/appointment"

const BookingPage = () => {
  return (
    <Layout>
      <SEO title="Book a service" />
      <Appointment />
    </Layout>
  )
}

export default BookingPage
