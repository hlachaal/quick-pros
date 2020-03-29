import React, { Component, Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import bookingStyles from "../../pages/booking.module.scss"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
//import bookingStyles from "../../pages/booking.module.scss"

class Address extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    //console.log(this.props.customerInfo)
    const style = {
      display: this.props.customerInfo.buttonDisabled ? "none" : "block",
    }
    return (
      <Fragment>
        <button
          className={bookingStyles.arrowLeft}
          onClick={() => this.props.onClickLeft(5)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
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
