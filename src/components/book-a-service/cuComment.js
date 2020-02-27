import React, { Component, Fragment } from "react"
import bookingStyles from "../../pages/booking.module.scss"

class cuComment extends Component {
  render() {
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>Describe the job in detail</p>
        </div>
        <div className={bookingStyles.commentForm}>
          <textarea
            onChange={e => {
              this.props.onUpdateComment(e.target.value)
            }}
            placeholder="Optional"
          ></textarea>
          <button
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
