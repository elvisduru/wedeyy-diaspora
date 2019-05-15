import React from "react";
import styles from "./ChatBubble.module.css";

const ChatBubble = props => {
  let message;

  if (props.message.type === "text") {
    message = (
      <p className={props.message.sender === "you" ? styles.left : null}>
        {props.message.content}
      </p>
    );
  }

  if (props.message.type === "image") {
    message = (
      <img
        className={props.message.sender === "you" ? styles.left : null}
        src={props.message.content}
        alt=""
      />
    );
  }

  return <div className={styles.ChatBubble}>{message}</div>;
};

export default ChatBubble;
