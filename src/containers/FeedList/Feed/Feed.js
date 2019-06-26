import React, { Component, Fragment } from 'react';
import styles from "./Feed.module.css";

import { Link } from "react-router-dom";

import Comments from "../../../components/Comments/Comments";
import OptionsOverlay from "../../../components/OptionsOverlay/OptionsOverlay";

import moreIcon from "../../../images/more.svg";
import happyIcon from "../../../images/happy.svg";
import sadIcon from "../../../images/sad.svg";
import bubbleIcon from "../../../images/bubble-bold.svg";
import shareIcon from "../../../images/share.svg";
import Poll from '../../Poll/Poll';
import Likes from '../../../components/Likes/Likes';

import downloadIcon from "../../../images/download.svg";
import warningIcon from "../../../images/warning.svg";
import linkIcon from "../../../images/link.svg";

class Feed extends Component {
  state = {
    commentOverlayOpen: false,
    likesOverlayOpen: false,
    optionsOverlayOpen: false,
    likes: [
      {
        username: "Susan Luisa",
        avatar: "http://i.pravatar.cc/101",
        relationship: "family friend"
      },
      {
        username: "Tommy Vercetti",
        avatar: "http://i.pravatar.cc/102",
        relationship: "family friend"
      },
      {
        username: "Carl Johnson",
        avatar: "http://i.pravatar.cc/103",
        relationship: "family friend"
      },
      {
        username: "John Doe",
        avatar: "http://i.pravatar.cc/104",
        relationship: "family friend"
      },
      {
        username: "Mike McKauley",
        avatar: "http://i.pravatar.cc/105",
        relationship: "family friend"
      },
      {
        username: "Susan Luisa",
        avatar: "http://i.pravatar.cc/101",
        relationship: "family friend"
      },
      {
        username: "Tommy Vercetti",
        avatar: "http://i.pravatar.cc/102",
        relationship: "family friend"
      },
      {
        username: "Carl Johnson",
        avatar: "http://i.pravatar.cc/103",
        relationship: "family friend"
      },
      {
        username: "John Doe",
        avatar: "http://i.pravatar.cc/104",
        relationship: "family friend"
      },
    ]
  }

  handleCommentOverlay = () => {
    this.setState(prevState => {
      return { commentOverlayOpen: !prevState.commentOverlayOpen };
    });
  };

  handleLikesOverlay = () => {
    this.setState(prevState => {
      return { likesOverlayOpen: !prevState.likesOverlayOpen };
    });
  };

  handleOptionsOverlay = () => {
    this.setState(prevState => {
      return { optionsOverlayOpen: !prevState.optionsOverlayOpen };
    });
  };

  stopPropagation = e => {
    e.stopPropagation();
  };

  render() {
    let content;
    let textBackground = false;
    let feedClass = styles.Feed;

    let commentOverlay = this.state.commentOverlayOpen ? (
      <Comments click={this.handleCommentOverlay} />
    ) : null;

    let likesOverlay = this.state.likesOverlayOpen ? (
      <Likes click={this.handleLikesOverlay} people={this.state.likes} />
    ) : null;

    let options = [
      { icon: warningIcon, text: "Report Post" },
      { icon: linkIcon, text: "Copy Post Link" },
      { icon: downloadIcon, text: "Save Post" },
    ]

    let optionsOverlay = this.state.optionsOverlayOpen ? (
      <OptionsOverlay options={options} click={this.handleOptionsOverlay} stopPropagation={this.stopPropagation} />
    ) : null;

    if (this.props.type === "image") {
      content = (
        <Link to="/post">
          <p className={styles.description}>{this.props.description}</p>
          <img src={this.props.image} alt="" />
        </Link>
      )
    }

    if (this.props.type === "poll") {
      content = (
        <Fragment>
          <p className={styles.description}>{this.props.description}</p>
          <Poll questions={this.props.questions} />
        </Fragment>
      )
    }

    if (this.props.type === "text") {
      content = (
        <Link to="/post">
          <h2>{this.props.text}</h2>
        </Link>
      )
      textBackground = true
    }

    if (textBackground) {
      feedClass = styles.Feed + " " + styles.textBackground
    }

    return (
      <div className={feedClass}>
        <div className={styles.Header}>
          <div>
            <img src={this.props.avatar} alt="" />
            <div>
              <h4>{this.props.username}</h4>
              <p>{this.props.time}</p>
            </div>
          </div>
          <img src={moreIcon} alt="" onClick={this.handleOptionsOverlay} />
        </div>
        <div className={styles.Content}>
          {content}
        </div>
        <div className={styles.Footer}>
          <button onClick={this.handleLikesOverlay}>
            <img src={happyIcon} alt="" />
            <span className={styles.happy}>{this.props.happy}</span>
          </button>
          <button onClick={this.handleLikesOverlay}>
            <img src={sadIcon} alt="" />
            <span className={styles.sad}>{this.props.sad}</span>
          </button>
          <button onClick={this.handleCommentOverlay}>
            <img src={bubbleIcon} alt="" />
            <span className={styles.comments}>{this.props.comments}</span>
          </button>
          <button>
            <img src={shareIcon} alt="" />
          </button>
        </div>
        {commentOverlay}
        {likesOverlay}
        {optionsOverlay}
      </div >
    )
  }
}

export default Feed;