import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./PrivateChat.module.css";
import OptionsOverlay from "../../../components/OptionsOverlay/OptionsOverlay";
import goBackIcon from "../../../images/arrow-left.svg";
import videoCamIcon from "../../../images/camera-video.svg";
import phoneIcon from "../../../images/phone-handset.svg";
import moreIcon from "../../../images/ic_more_vert.svg";
import attachIcon from "../../../images/attachment.svg";
import micIcon from "../../../images/mic.svg";
import smileyIcon from "../../../images/smile.svg";
import pictureIcon from "../../../images/picture.svg";
import addFileIcon from "../../../images/file-add.svg";
import userIcon from "../../../images/user.svg";
import ChatBubbleList from "../../../components/ChatBubbleList/ChatBubbleList";
import shareIcon from "../../../images/share.svg";
import usersIcon from "../../../images/users.svg";
import trashIcon from "../../../images/trash.svg";

class PrivateChat extends Component {
  state = {
    openShareOverlay: false,
    openMoreOverlay: false,
    messages: [
      { type: "text", content: "Hello Kehinde", sender: "you" },
      { type: "text", content: "I am coming home now...", sender: "you" },
      { type: "text", content: "Okay, see you soon.", sender: "me" },
      { type: "text", content: "Hello Kehinde", sender: "you" },
      { type: "text", content: "I am coming home now...", sender: "you" },
      { type: "divider", content: "Yesterday" },
      { type: "text", content: "Hello, how are you doing?", sender: "me" },
      { type: "text", content: "Hello Kehinde", sender: "you" },
      { type: "text", content: "I am coming home now...", sender: "you" },
      { type: "text", content: "Hello, how are you doing?", sender: "me" },
      { type: "image", content: "http://i.pravatar.cc/250", sender: "me" },
      { type: "text", content: "Oh, what a beautiful picture.", sender: "you" },
      { type: "text", content: "Wait for it.", sender: "you" },
      { type: "image", content: "http://i.pravatar.cc/251", sender: "you" },
      { type: "text", content: "File coming in now.", sender: "me" },
      { type: "text", content: "Please send me that link", sender: "you" },
      { type: "text", content: "Wow, thanks.", sender: "you" },
      {
        type: "text",
        content: "Sending you the contacts you asked for..",
        sender: "you"
      },
      {
        type: "contact",
        content: "Kehinde John Omotoso",
        rating: "3",
        sender: "you"
      }
    ]
  };

  goBack = () => {
    this.props.history.goBack();
  };

  handleShareOverlay = e => {
    e.stopPropagation();
    this.setState((state, props) => {
      return {
        openShareOverlay: !this.state.openShareOverlay
      };
    });
  };

  handleMoreOverlay = e => {
    e.stopPropagation();
    this.setState((state, props) => {
      return {
        openMoreOverlay: !this.state.openMoreOverlay
      };
    });
  };

  stopEventPropagation = e => {
    e.stopPropagation();
  };

  render() {
    let shareOptions = [
      { icon: pictureIcon, name: "Picture or Video" },
      { icon: addFileIcon, name: "Share File" },
      { icon: userIcon, name: "Share Friend" }
    ];
    let shareOverlay = this.state.openShareOverlay ? (
      <OptionsOverlay
        heading="Create and Share"
        options={shareOptions}
        click={this.handleShareOverlay}
        stopPropagation={this.stopEventPropagation}
      />
    ) : null;

    let moreOptions = [
      { icon: shareIcon, name: "View Shared Items" },
      { icon: userIcon, name: "View Chas Profile" },
      { icon: usersIcon, name: "Create a group with Chas" },
      { icon: trashIcon, name: "Clear Chat" }
    ];

    let moreOverlay = this.state.openMoreOverlay ? (
      <OptionsOverlay
        heading="More"
        options={moreOptions}
        click={this.handleMoreOverlay}
        stopPropagation={this.stopEventPropagation}
      />
    ) : null;

    return (
      <div className={styles.PrivateChat}>
        <div className={styles.Header}>
          <img onClick={this.goBack} src={goBackIcon} alt="Go Back" />
          <div>
            <img src="http://i.pravatar.cc/101" alt="avatar" />
            <div>
              <h3>Chas Mccawley</h3>
              <small>Last Seen 2m ago</small>
            </div>
          </div>
          <Link to="/video-call">
            <img src={videoCamIcon} alt="video chat" />
          </Link>
          <Link to="/voice-call">
            <img className={styles.phone} src={phoneIcon} alt="call" />
          </Link>
          <img src={moreIcon} alt="more" onClick={this.handleMoreOverlay} />
        </div>
        <div className={styles.chatWrapper}>
          <ChatBubbleList messages={this.state.messages} />
        </div>
        <div className={styles.footer}>
          <textarea placeholder="Type Here." />
          <div className={styles.controls}>
            <img
              src={attachIcon}
              alt="Attachment"
              onClick={this.handleShareOverlay}
            />
            <img src={micIcon} alt="Mic" />
            <img src={smileyIcon} alt="Smiley" />
          </div>
        </div>
        {shareOverlay}
        {moreOverlay}
      </div>
    );
  }
}

export default PrivateChat;
