import React, { Component, Fragment } from "react"
import bookingStyles from "../../pages/booking.module.scss"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
//import bookingStyles from "../../pages/booking.module.scss"

class Address extends Component {
  render() {
    //console.log(this.props.customerInfo)
    const style = {
      display: this.props.customerInfo.buttonDisabled ? "none" : "block",
    }
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>What's your address?</p>
        </div>
        <div className={bookingStyles.commentForm}>
          <div>
            <GooglePlacesAutocomplete
              onSelect={e => {
                this.props.onUpdateAddress(e.description)
              }}
              placeholder="Street Address"
              value={this.props.customerInfo.address}
            />
          </div>
          <input
            onChange={this.props.onUpdateInput}
            value={this.props.customerInfo.apt}
            name="apt"
            type="text"
            placeholder="Apt # (Optional)"
          />
          <textarea
            onChange={this.props.onUpdateInput}
            value={this.props.customerInfo.instructions}
            name="instructions"
            placeholder="Instructions (Optional)"
          ></textarea>
          <button
            style={style}
            className={bookingStyles.continue}
            onClick={this.props.onSelectAddress}
          >
            Continue
          </button>
        </div>
      </Fragment>
    )
  }
}

export default Address
