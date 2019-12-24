import React, { Component, Fragment } from "react"

import ServiceType from "./serviceType"
import Service from "./service"
import ZipCode from "./zipCode"

class Appointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serviceType: "",
      serviceTypeSelected: false,
      service: 0,
      serviceSelected: false,
      zipCode: 0,
      zipCodeSelected: false,
    }
    this.selectServiceType = this.selectServiceType.bind(this)
    this.selectService = this.selectService.bind(this)
  }

  selectServiceType = param => {
    const serviceType = param
    const serviceTypeSelected = true
    this.setState({ serviceType, serviceTypeSelected })
  }
  selectService = param => {
    const service = param
    const serviceSelected = true
    this.setState({ service, serviceSelected })
    console.log("ok")
  }

  renderServiceType() {
    if (!this.state.serviceTypeSelected) {
      return <ServiceType onSelectServiceType={this.selectServiceType} />
    }
  }
  renderService() {
    if (this.state.serviceTypeSelected && !this.state.serviceSelected) {
      return (
        <Service
          onSelectService={this.selectService}
          service={this.state.service}
          serviceSelected={this.state.serviceSelected}
          serviceType={this.state.serviceType}
        />
      )
    }
  }

  renderZipCodeForm() {
    if (
      this.state.serviceTypeSelected &&
      this.state.serviceSelected &&
      !this.state.zipCodeSelected
    ) {
      return <ZipCode />
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderServiceType()}
        {this.renderService()}
        {this.renderZipCodeForm()}
      </Fragment>
    )
  }
}

export default Appointment
