import React, { Component, Fragment } from "react"

import ServiceType from "./serviceType"
import Service from "./service"
import ZipCode from "./zipCode"

import { getQuestions } from "./utils"
import ServiceQuestion from "./serviceQuestion"
import CuComment from "./cuComment"
import Calendar from "./calendar"

class Appointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serviceTypeSelected: false,
      zipCode: 0,
      zipCodeSelected: false,
      serviceSelected: false,
      detailsSelected: false,
      commentSelected: false,
      calendarSelected: false,
      allServiceInfo: {
        serviceType: "",
        service: {
          name: "",
          questions: [],
          answers: [],
        },
      },
      startDate: new Date(),
      timeSelected: false,
    }
  }

  selectServiceType = param => {
    const serviceType = param
    const serviceTypeSelected = true
    this.setState({
      serviceType,
      allServiceInfo: {
        ...this.state.allServiceInfo,
        serviceType: serviceType,
      },
      serviceTypeSelected,
    })
  }
  selectService = param => {
    const serviceName = param
    const serviceSelected = true
    this.setState({
      allServiceInfo: {
        ...this.state.allServiceInfo,
        service: { ...this.state.allServiceInfo.service, name: serviceName },
      },
      serviceSelected,
    })
  }
  selectZipCode = param => {
    const zipCode = param
    const zipCodeSelected = true
    this.setState({ zipCode, zipCodeSelected })
  }

  renderServiceType() {
    if (!this.state.serviceTypeSelected) {
      return <ServiceType onSelectServiceType={this.selectServiceType} />
    }
  }
  renderService() {
    if (
      this.state.serviceTypeSelected &&
      this.state.zipCodeSelected &&
      !this.state.serviceSelected
    ) {
      return (
        <Service
          onSelectService={this.selectService}
          serviceType={this.state.allServiceInfo.serviceType}
        />
      )
    }
  }

  renderZipCodeForm() {
    if (this.state.serviceTypeSelected && !this.state.zipCodeSelected) {
      return <ZipCode onSelectZipCode={this.selectZipCode} />
    }
  }

  renderServiceDetails() {
    if (
      this.state.serviceTypeSelected &&
      this.state.zipCodeSelected &&
      this.state.serviceSelected &&
      !this.state.detailsSelected
    ) {
      const questions = getQuestions(this.state.allServiceInfo.service.name)

      const screens =
        questions.length - this.state.allServiceInfo.service.questions.length
      if (screens > 0) {
        const current = questions.length - screens
        return (
          <ServiceQuestion
            question={questions[current].q}
            answers={questions[current].a}
            screens={screens}
            answerToQuestion={this.answerToQuestion}
          />
        )
      }

      //return <ServiceDetails allServiceInfo={this.state.allServiceInfo} />
    }
  }
  answerToQuestion = (q, a, screens) => {
    const service = this.state.allServiceInfo.service
    service.questions.push(q)
    service.answers.push(a)

    if (screens == 1) {
      this.setState({
        allServiceInfo: {
          ...this.state.allServiceInfo,
          service: service,
        },
        detailsSelected: true,
      })
    } else {
      this.setState({
        allServiceInfo: {
          ...this.state.allServiceInfo,
          service: service,
        },
      })
    }
  }
  renderComment() {
    if (
      this.state.serviceTypeSelected &&
      this.state.zipCodeSelected &&
      this.state.serviceSelected &&
      this.state.detailsSelected &&
      !this.state.commentSelected
    ) {
      return (
        <CuComment
          onUpdateComment={this.updateComment}
          onSelectComment={this.selectComment}
        />
      )
    }
  }
  selectComment = () => {
    this.setState({ commentSelected: true })
  }
  updateComment = param => {
    const comment = param
    this.setState({
      allServiceInfo: {
        ...this.state.allServiceInfo,
        comment,
      },
    })
  }
  renderCalendar() {
    if (
      this.state.serviceTypeSelected &&
      this.state.zipCodeSelected &&
      this.state.serviceSelected &&
      this.state.detailsSelected &&
      this.state.commentSelected &&
      !this.state.calendarSelected
    ) {
      return (
        <Calendar
          onHandleChange={this.handleDateChange}
          onSelectDate={this.selectDate}
          startDate={this.state.startDate}
          errDate={this.state.errDate}
        />
      )
    }
  }
  selectDate = () => {
    this.setState({ calendarSelected: true })
  }
  handleDateChange = date => {
    const now = new Date()
    if (date < now) {
      this.setState({
        startDate: date,
        errDate: "Please select a valid time.",
      })
    } else {
      this.setState({
        startDate: date,
        errDate: "",
      })
    }
  }

  renderCuInfo() {
    if (
      this.state.serviceTypeSelected &&
      this.state.zipCodeSelected &&
      this.state.serviceSelected &&
      this.state.detailsSelected &&
      this.state.commentSelected &&
      this.state.calendarSelected &&
      !this.state.cuInfoSelected
    ) {
      return <h1>Customer Info</h1>
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderServiceType()}
        {this.renderZipCodeForm()}
        {this.renderService()}
        {this.renderServiceDetails()}
        {this.renderComment()}
        {this.renderCalendar()}
        {this.renderCuInfo()}
      </Fragment>
    )
  }
}

export default Appointment
