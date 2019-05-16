import React, { Component } from "react";
import styles from "./ChatBubble.module.css";
import StarRatingComponent from "react-star-rating-component";
import img2 from "../../../images/chaz-mcgregor-51043.png";
import img3 from "../../../images/philipp-kammerer-346387.png";

class ChatBubble extends Component {
  state = {
    revealTime: false
  }
  handleRevealMessageTime = () => {
    this.setState((state, props) => {
      return {
        revealTime: !this.state.revealTime
      }
    })
  }
  render() {
    let message;

    let floatLeftStyle = this.props.message.sender === "you" ? styles["left"] : null;

    if (this.props.message.type === "text") {
      message = <p>{this.props.message.content}</p>;
    }

    if (this.props.message.type === "image") {
      message = <img src={this.props.message.content} alt="" />;
    }

    if (this.props.message.type === "divider") {
      message = (
        <div className={styles.divider}>
          <div />
          <p>{this.props.message.content}</p>
          <div />
        </div>
      )
    }

    if (this.props.message.type === "link") {
      message = (
        <div className={styles.link}>
          <img src={img2} alt="" />
          <small>{this.props.message.content}</small>
          <button>Open Link</button>
        </div>
      )
    }

    if (this.props.message.type === "contact") {
      message = (
        <div className={styles.contact}>
          <img src={img3} alt="" />
          <div>
            <div className={styles.top}>
              <h4>Kehinde John Omotoso</h4>
              <StarRatingComponent
                name="rate"
                editing={false}
                starCount={5}
                value={3}
                starColor="#000000"
                emptyStarColor="#707070"
              />
            </div>
            <div className={styles.bottom}>
              <button>VIEW PROFILE</button>
              <button>FOLLOW</button>
            </div>
          </div>
        </div>
      )
    }

    if (this.props.message.type === "missed") {
      message = <p className={styles.missed}>{this.props.message.content}</p>
    }

    return (
      <div onClick={this.handleRevealMessageTime} className={floatLeftStyle + " " + styles.ChatBubble}>
        {this.state.revealTime ? <p className={styles.time}>{this.props.message.time}</p> : null}
        {message}
      </div>
    );
  }

};

export default ChatBubble;
