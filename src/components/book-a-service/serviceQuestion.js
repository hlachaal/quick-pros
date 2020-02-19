import React, { Component, Fragment } from "react"
import bookingStyles from "../../pages/booking.module.scss"

class ServiceQuestion extends Component {
  renderAnswers(answers) {
    const res = answers.map(answer => {
      if (typeof answer === "string") {
        return (
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
        )
      } else {
        return (
          <div key={answer.option} className={bookingStyles.objAnswer}>
            <div className={bookingStyles.optionNbr}>
              <div className={bookingStyles.option}>{answer.option}</div>
              <div className={bookingStyles.number}>
                <button className={bookingStyles.manus}>-</button>
                <span className={bookingStyles.nbr}>0</span>
                <button className={bookingStyles.plus}>+</button>
              </div>
            </div>
            {answer.description && (
              <div className={bookingStyles.description}>
                <hr />
                {answer.description}
              </div>
            )}
          </div>
        )
      }
    })
    return res
  }
  render() {
    return (
      <Fragment>
        <div className={bookingStyles.question}>
          <p>{this.props.question}</p>
        </div>
        <div className={bookingStyles.serviceList}>
          {this.renderAnswers(this.props.answers)}
        </div>
      </Fragment>
    )
  }
}

export default ServiceQuestion
