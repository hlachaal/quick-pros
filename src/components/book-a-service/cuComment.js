import React, { Component, Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import bookingStyles from "../../pages/booking.module.scss"

class cuComment extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>Describe the job in detail</p>
          <button
            className={bookingStyles.arrowLeft}
            onClick={() => this.props.onClickLeft(3)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <div className={bookingStyles.commentForm}>
          <textarea
            onChange={e => {
              this.props.onUpdateComment(e.target.value)
            }}
            placeholder="Optional"
          ></textarea>
          <button
            className={bookingStyles.continue}
            onClick={() => {
              this.props.onSelectComment()
            }}
          >
            Continue
          </button>
        </div>
      </Fragment>
    )
  }
}

export default cuComment
