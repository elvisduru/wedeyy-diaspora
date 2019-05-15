import React from "react";
import styles from "./ChatBubble.module.css";

const ChatBubble = props => {
  let message;

  let floatLeftStyle = props.message.sender === "you" ? styles["left"] : null;

  if (props.message.type === "text") {
    message = <p>{props.message.content}</p>;
  }

  if (props.message.type === "image") {
    message = <img src={props.message.content} alt="" />;
  }

  return (
    <div className={floatLeftStyle + " " + styles.ChatBubble}>{message}</div>
  );
};

export default ChatBubble;
