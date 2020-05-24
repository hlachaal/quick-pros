import React, { Component, Fragment } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import bookingStyles from "../../pages/booking.module.scss"
import { OPEN_ZIPS } from "./openZipCodes"

class ZipCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openServices: [
        "handyman services",
        "appliance repair",
        "furniture assembly",
        "tv mounting",
      ],
      zipCode: "",
      err: "",
      buttonDisabled: true,
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  validate = e => {
    this.setState({ zipCode: e.target.value })
    if (e.target.value.length >= 5) {
      if (
        OPEN_ZIPS.includes(e.target.value.toString()) &&
        this.state.openServices.includes(this.props.allServiceInfo.serviceType)
      ) {
        this.setState({
          zipCode: e.target.value,
          err: "",
          buttonDisabled: false,
        })
      } else {
        this.setState({
          zipCode: "",
          err: "Sorry, this service isn't available yet in your area.",
          buttonDisabled: true,
        })
      }
    } else {
      this.setState({
        err: "",
        buttonDisabled: true,
      })
    }
  }
  render() {
    const style = {
      display: this.state.buttonDisabled ? "none" : "inline-block",
    }
    const style2 = {
      display: this.state.buttonDisabled ? "none" : "block",
    }
    return (
      <Fragment>
        <div className={bookingStyles.pageHead}>
          <p>Check if we’re available in your area</p>
          <button
            className={bookingStyles.arrowLeft}
            onClick={() => this.props.onClickLeft(11)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <section className={bookingStyles.zipCodeForm}>
          <div>
            <input
              className={bookingStyles.zipInput}
              value={this.state.zipCode}
              type="number"
              placeholder="zip code (92123)"
              onChange={this.validate}
            ></input>
            <span style={style}>&#10003;</span>
          </div>

          <button
            style={style2}
            className={bookingStyles.continue}
            onClick={() => {
              this.props.onSelectZipCode(this.state.zipCode)
            }}
          >
            Continue
          </button>
        </section>
        <p className={bookingStyles.err}>{this.state.err}</p>
      </Fragment>
    )
  }
}

export default ZipCode
