import React, { Component, Fragment } from "react"
import bookingStyles from "../../pages/booking.module.scss"

class ServiceQuestion extends Component {
  render() {
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>{this.props.question}</p>
        </div>
        <div className={bookingStyles.serviceList}>
          {this.props.answers.map(answer => (
            <button
              key={answer}
              className={bookingStyles.listItem}
              onClick={() =>
                this.props.answerToQuestion(
                  this.props.question,
                  answer,
                  this.props.screens
                )
              }
            >
              {answer}
            </button>
          ))}
        </div>
      </Fragment>
    )
  }
}

export default ServiceQuestion
