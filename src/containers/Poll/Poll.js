import React, { Component } from 'react'
import styles from "./Poll.module.css";
import PollItem from './PollItem/PollItem';

class Poll extends Component {
  state = {
    questions: this.props.questions,
    selectedPoll: null
  }

  selectHandler = (id) => {
    this.setState({ selectedPoll: id });
  }

  render() {
    return (
      <div className={styles.Poll}>
        {
          this.state.questions.map((question, index) => {
            if (question.id === this.state.selectedPoll) {
              return <PollItem question={question} key={index} click={this.selectHandler} selected />
            } else {
              return <PollItem question={question} key={index} click={this.selectHandler} />
            }
          })
        }
      </div>
    )
  }
}

export default Poll;