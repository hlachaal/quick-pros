import React, { Component, Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import bookingStyles from "../../pages/booking.module.scss"
import DatePicker from "react-datepicker"
import setMinutes from "date-fns/setMinutes"
import setHours from "date-fns/setHours"
import "moment-timezone"
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css"

class Calendar extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const style = {
      display: this.props.errDate !== "" ? "none" : "block",
    }
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>What's your preferred timing?</p>
          <button
            className={bookingStyles.arrowLeft}
            onClick={() => this.props.onClickLeft(4)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <div>
          <DatePicker
            inline
            minDate={moment().toDate()}
            minTime={setHours(setMinutes(new Date(), 0), 7)}
            maxTime={setHours(setMinutes(new Date(), 0), 20)}
            selected={this.props.startDate}
            onChange={this.props.onHandleChange}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            calendarClassName={bookingStyles.calender}
          />
        </div>
        <div className={bookingStyles.ctrl}>
          <p className={bookingStyles.err}>{this.props.errDate}</p>
          <button
            style={style}
            className={bookingStyles.continue}
            onClick={this.props.onSelectDate}
          >
            Continue
          </button>
        </div>
      </Fragment>
    )
  }
}

export default Calendar
