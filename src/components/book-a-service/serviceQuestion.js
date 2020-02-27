import React, { Component, Fragment } from "react"
import bookingStyles from "../../pages/booking.module.scss"

class ServiceQuestion extends Component {
  renderQuantity(answer, pAnswers) {
    if (pAnswers[0]) {
      let qty = pAnswers[0].filter(pAnswer => {
        return pAnswer.option === answer
      })
      return qty.length
    } else {
      return 0
    }
  }

  renderAnswers(answers, prevAnswers) {
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
      } else if (typeof answer === "object") {
        const quantity = this.renderQuantity(answer.option, prevAnswers)
        return (
          <div key={answer.option} className={bookingStyles.objAnswer}>
            <div className={bookingStyles.optionNbr}>
              <div className={bookingStyles.option}>{answer.option}</div>
              <div className={bookingStyles.number}>
                <button
                  disabled={quantity === 0 ? true : false}
                  onClick={() => this.props.onUpdateItem(answer, "remove")}
                  className={bookingStyles.manus}
                >
                  -
                </button>
                <span className={bookingStyles.nbr}>{quantity}</span>
                <button
                  disabled={quantity === 10 ? true : false}
                  onClick={() => this.props.onUpdateItem(answer, "add")}
                  className={bookingStyles.plus}
                >
                  +
                </button>
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
      } else console.log(typeof answer)
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
          {this.renderAnswers(this.props.answers, this.props.prevAnswers)}
          {typeof this.props.prevAnswers[0] === "object" &&
            this.props.prevAnswers[0].length > 0 &&
            this.props.prevAnswers.length > this.props.prevQuestions.length && (
              <button
                onClick={() => this.props.onCloseMulti(this.props.question)}
                className={bookingStyles.continue}
              >
                Continue
              </button>
            )}
        </div>
      </Fragment>
    )
  }
}

export default ServiceQuestion
