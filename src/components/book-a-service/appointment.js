import React, { Component, Fragment } from "react"
/* import { browserHistory } from "react-router" */

import ServiceType from "./serviceType"
import Service from "./service"
import ZipCode from "./zipCode"

import { getQuestions } from "./utils"
import ServiceQuestion from "./serviceQuestion"
import CuComment from "./cuComment"
import Calendar from "./calendar"
import CuInfo from "./cuInfo"
import Success from "./success"
import Address from "./address"

class Appointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serviceTypeSelected: false,
      zipCode: 0,
      zipCodeSelected: true,
      serviceSelected: false,
      detailsSelected: false,
      commentSelected: false,
      calendarSelected: false,
      addressSelected: false,
      cuInfoSelected: false,
      detailsReviewed: false,
      allServiceInfo: {
        serviceType: "",
        service: {
          name: "",
          questions: [],
          answers: [],
        },
      },
      startDate: new Date(),
      customerInfo: {
        address: "",
        apt: "",
        fname: "",
        lname: "",
        phone: "",
        email: "",
        instructions: "",
        phoneErr: "",
        emailErr: "",
        addressErr: "",
        buttonDisabled: true,
      },
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  /* 
  componentDidMount() {
    this.onScrollNearBottom(this.scrollToLoad)

    this.backListener = browserHistory.listen(location => {
      if (location.action === "POP") {
        // Do your stuff
      }
    })
  }

  componentWillUnmount() {
    // Unbind listener
    this.backListener()
  }
 */
  selectServiceType = param => {
    const serviceType = param
    const serviceTypeSelected = true
    this.setState({
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
      window.scrollTo(0, 0)
      return <ServiceType onSelectServiceType={this.selectServiceType} />
    }
  }
  renderService() {
    if (this.state.serviceTypeSelected && !this.state.serviceSelected) {
      window.scrollTo(0, 0)
      return (
        <Service
          onSelectService={this.selectService}
          serviceType={this.state.allServiceInfo.serviceType}
          onClickLeft={this.handleClickLeft}
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
      window.scrollTo(0, 0)
      return <ZipCode onSelectZipCode={this.selectZipCode} />
    }
  }
  handleClickLeft = e => {
    switch (e) {
      case 1:
        this.setState({
          ...this.state,
          serviceTypeSelected: false,
        })
        break

      case 2:
        if (this.state.allServiceInfo.service.questions.length > 0) {
          const asi = this.state.allServiceInfo
          asi.service.questions.pop()
          asi.service.answers.pop()
          this.setState({
            ...this.state,
            allServiceInfo: asi,
          })
        } else {
          this.setState({
            ...this.state,
            serviceSelected: false,
          })
        }
        break

      case 3:
        const asi = this.state.allServiceInfo
        asi.service.questions.pop()
        asi.service.answers.pop()
        this.setState({
          ...this.state,
          allServiceInfo: asi,
          detailsSelected: false,
        })
        break

      case 4:
        this.setState({
          ...this.state,
          commentSelected: false,
        })
        break

      case 5:
        this.setState({
          ...this.state,
          calendarSelected: false,
        })
        break

      case 6:
        this.setState({
          ...this.state,
          addressSelected: false,
        })
        break

      default:
        break
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
        window.scrollTo(0, 0)
        return (
          <ServiceQuestion
            question={questions[current].q}
            answers={questions[current].a}
            screens={screens}
            prevQuestions={this.state.allServiceInfo.service.questions}
            prevAnswers={this.state.allServiceInfo.service.answers}
            answerToQuestion={this.answerToQuestion}
            onUpdateItem={this.updateItem}
            onCloseMulti={this.closeMulti}
            onClickLeft={this.handleClickLeft}
          />
        )
      }
    }
  }
  closeMulti = q => {
    let questions = this.state.allServiceInfo.service.questions
    questions.push(q)
    this.setState({
      allServiceInfo: {
        ...this.state.allServiceInfo,
        service: {
          ...this.state.allServiceInfo.service,
          questions,
        },
      },
    })
  }
  answerToQuestion = (q, a, screens) => {
    const service = this.state.allServiceInfo.service
    service.questions.push(q)
    service.answers.push(a)

    if (screens === 1) {
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
  updateItem = (answer, method) => {
    let answers = this.state.allServiceInfo.service.answers
    if (method === "add") {
      if (answers.length) answers[0].push(answer)
      else answers.push([answer])
    }

    if (method === "remove") {
      let a = answer.option
      let newA = answers[0].map(ans => {
        if (ans.option === a) {
          a = ""
          return null
        } else return ans
      })
      answers = newA.filter(a => {
        return a !== null
      })
      answers = [answers]
    }
    this.setState({
      allServiceInfo: {
        ...this.state.allServiceInfo,
        service: {
          ...this.state.allServiceInfo.service,
          answers: answers,
        },
      },
    })
  }

  renderComment() {
    if (
      this.state.serviceTypeSelected &&
      this.state.zipCodeSelected &&
      this.state.serviceSelected &&
      this.state.detailsSelected &&
      !this.state.commentSelected
    ) {
      window.scrollTo(0, 0)
      return (
        <CuComment
          onUpdateComment={this.updateComment}
          onSelectComment={this.selectComment}
          onClickLeft={this.handleClickLeft}
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
      window.scrollTo(0, 0)
      return (
        <Calendar
          onHandleChange={this.handleDateChange}
          onSelectDate={this.selectDate}
          startDate={this.state.startDate}
          errDate={this.state.errDate}
          onClickLeft={this.handleClickLeft}
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

  selectAddress = () => {
    this.setState({
      ...this.state,
      addressSelected: true,
      customerInfo: {
        ...this.state.customerInfo,
        buttonDisabled: true,
      },
    })
  }
  updateAddress = e => {
    this.setState({
      ...this.state,
      customerInfo: {
        ...this.state.customerInfo,
        address: e,
        buttonDisabled: false,
      },
    })
  }
  updateInput = e => {
    this.setState({
      ...this.state,
      customerInfo: {
        ...this.state.customerInfo,
        [e.target.name]: e.target.value,
      },
    })
  }
  renderAddress() {
    if (
      this.state.serviceTypeSelected &&
      this.state.zipCodeSelected &&
      this.state.serviceSelected &&
      this.state.detailsSelected &&
      this.state.commentSelected &&
      this.state.calendarSelected &&
      !this.state.addressSelected
    ) {
      window.scrollTo(0, 0)
      return (
        <Address
          customerInfo={this.state.customerInfo}
          onUpdateAddress={this.updateAddress}
          onUpdateInput={this.updateInput}
          onSelectAddress={this.selectAddress}
          onClickLeft={this.handleClickLeft}
        />
      )
    }
  }

  cusInfoChange = e => {
    let phoneErr = ""
    let emailErr = ""
    let buttonDisabled = true

    if (e.target.name === "phone") {
      let re = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/
      if (!re.test(e.target.value)) {
        phoneErr = "Please enter a valid phone number."
      } else {
        if (
          this.state.customerInfo.phone !== "" &&
          this.state.customerInfo.email !== ""
        ) {
          buttonDisabled = false
        }
      }
    } else {
      let re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      if (!re.test(e.target.value)) {
        emailErr = "Please enter a valid email."
      } else {
        if (
          this.state.customerInfo.phone !== "" &&
          this.state.customerInfo.email !== ""
        ) {
          buttonDisabled = false
        }
      }
    }
    this.setState({
      ...this.state,
      customerInfo: {
        ...this.state.customerInfo,
        [e.target.name]: e.target.value,
        phoneErr,
        emailErr,
        buttonDisabled,
      },
    })
  }
  selectCusInfo = () => {
    this.setState({
      ...this.state,
      cuInfoSelected: true,
    })
  }
  renderCuInfo() {
    if (
      this.state.serviceTypeSelected &&
      this.state.zipCodeSelected &&
      this.state.serviceSelected &&
      this.state.detailsSelected &&
      this.state.commentSelected &&
      this.state.calendarSelected &&
      this.state.addressSelected &&
      !this.state.cuInfoSelected
    ) {
      window.scrollTo(0, 0)
      return (
        <CuInfo
          customerInfo={this.state.customerInfo}
          onCusInfoChange={this.cusInfoChange}
          onUpdateInput={this.updateInput}
          onSelectCusInfo={this.selectCusInfo}
          onClickLeft={this.handleClickLeft}
        />
      )
    }
  }
  renderSuccess() {
    if (
      this.state.serviceTypeSelected &&
      this.state.zipCodeSelected &&
      this.state.serviceSelected &&
      this.state.detailsSelected &&
      this.state.commentSelected &&
      this.state.calendarSelected &&
      this.state.cuInfoSelected &&
      !this.state.detailsReviewed
    ) {
      window.scrollTo(0, 0)
      return <Success data={this.state} />
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderServiceType()}
        {this.renderService()}
        {this.renderZipCodeForm()}
        {this.renderServiceDetails()}
        {this.renderComment()}
        {this.renderCalendar()}
        {this.renderAddress()}
        {this.renderCuInfo()}
        {this.renderSuccess()}
      </Fragment>
    )
  }
}

export default Appointment
