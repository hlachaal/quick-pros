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
        console.log(answer)
        return (
          <div key={answer.option} className={bookingStyles.objAnswer}>
            <div className={bookingStyles.option}>{answer.option}</div>
            <div className={bookingStyles.number}>
              <span className={bookingStyles.manus}>-</span>
              <span className={bookingStyles.nbr}>0</span>
              <span className={bookingStyles.plus}>+</span>
            </div>
            <hr />
            <div className={bookingStyles.description}>
              {answer.description}
            </div>
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
