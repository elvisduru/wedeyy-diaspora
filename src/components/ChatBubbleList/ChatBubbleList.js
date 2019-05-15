import React from "react";
import ChatBubble from "./ChatBubble/ChatBubble";

const ChatBubbleList = props => {
  return (
    <div className={StyleSheet.ChatBubbleList}>
      {props.messages.map((message, index) => (
        <ChatBubble message={message} key={index} />
      ))}
    </div>
  );
};

export default ChatBubbleList;
