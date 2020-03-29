import React, { Component, Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import bookingStyles from "../../pages/booking.module.scss"

class CuInfo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const style = {
      display: this.props.customerInfo.buttonDisabled ? "none" : "block",
    }

    return (
      <Fragment>
        <button
          onKeyDown={() => this.props.onClickLeft(6)}
          className={bookingStyles.arrowLeft}
          onClick={() => this.props.onClickLeft(6)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className={bookingStyles.question}>
          <p>Where can we send the appointment updates?</p>
        </div>
        <div className={bookingStyles.commentForm}>
          <input
            onChange={this.props.onUpdateInput}
            value={this.props.customerInfo.fname}
            name="fname"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={this.props.onUpdateInput}
            value={this.props.customerInfo.lname}
            name="lname"
            type="text"
            placeholder="Last Name"
          />
          <div>
            <input
              onChange={this.props.onCusInfoChange}
              value={this.props.customerInfo.phone}
              name="phone"
              type="text"
              placeholder="Phone #"
            />
            <p className={bookingStyles.err}>
              {this.props.customerInfo.phoneErr}
            </p>
          </div>
          <div>
            <input
              onChange={this.props.onCusInfoChange}
              value={this.props.customerInfo.email}
              name="email"
              type="email"
              placeholder="Email"
            />
            <p className={bookingStyles.err}>
              {this.props.customerInfo.emailErr}
            </p>
          </div>

          <button
            style={style}
            className={bookingStyles.continue}
            onClick={this.props.onSelectCusInfo}
          >
            Request Service
          </button>
        </div>
      </Fragment>
    )
  }
}

export default CuInfo
