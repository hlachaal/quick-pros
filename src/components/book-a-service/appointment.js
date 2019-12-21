import React, { Component, Fragment } from "react"

import ServiceType from "./serviceType"
import Service from "./service"

class Appointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serviceType: "",
      serviceTypeSelected: false,
      service: 0,
      serviceSelected: false,
    }
  }

  selectServiceType = e => {
    console.log(e)
    const serviceType = e
    const serviceTypeSelected = true
    this.setState({ serviceType, serviceTypeSelected })
  }
  selectAppliance = () => {
    this.selectServiceType("appliance")
  }
  selectTv = () => {
    this.selectServiceType("tv")
  }
  selectFurniture = () => {
    this.selectServiceType("furniture")
  }
  selectHandyman = () => {
    this.selectServiceType("handyman")
  }
  selectIphone = () => {
    this.selectServiceType("iphone")
  }
  selectMoving = () => {
    this.selectServiceType("moving")
  }

  renderServiceType() {
    if (!this.state.serviceTypeSelected) {
      return (
        <ServiceType
          onSelectAppliance={this.selectAppliance}
          onSelectTv={this.selectTv}
          onSelectFurniture={this.selectFurniture}
          onSelectHandyman={this.selectHandyman}
          onSelectIphone={this.selectIphone}
          onSelectMoving={this.selectMoving}
        />
      )
    }
  }
  renderService() {
    if (this.state.serviceTypeSelected && !this.state.serviceSelected) {
      return <Service serviceType={this.state.serviceType} />
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderServiceType()}
        {this.renderService()}
      </Fragment>
    )
  }
}

export default Appointment
