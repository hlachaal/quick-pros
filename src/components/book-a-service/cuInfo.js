import React, { Component, Fragment } from "react"
import bookingStyles from "../../pages/booking.module.scss"

class CuInfo extends Component {
  render() {
    const style = {
      display: this.props.customerInfo.buttonDisabled ? "none" : "block",
    }

    return (
      <Fragment>
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

          <button style={style} onClick={this.props.onSelectCusInfo}>
            Continue
          </button>
        </div>
      </Fragment>
    )
  }
}

export default CuInfo
