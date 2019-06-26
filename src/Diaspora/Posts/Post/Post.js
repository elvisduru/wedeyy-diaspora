import React, { Component } from 'react';
import styles from './Post.module.css';

import Comments from "../../../components/Comments/Comments";
import Likes from "../../../components/Likes/Likes";

import arrowBackIcon from '../../../images/arrow-back.svg';
import happyIcon from "../../../images/happy.svg";
import sadIcon from "../../../images/sad.svg";
import bubbleIcon from "../../../images/bubble-bold.svg";
import shareIcon from "../../../images/share.svg";


class Post extends Component {

  state = {
    commentOverlayOpen: false,
    likesOverlayOpen: false,
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

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    let commentOverlay = this.state.commentOverlayOpen ? (
      <Comments click={this.handleCommentOverlay} />
    ) : null;

    let likesOverlay = this.state.likesOverlayOpen ? (
      <Likes click={this.handleLikesOverlay} people={this.state.likes} />
    ) : null;
    return (
      <div className={styles.Post} >
        <div className={styles.Header}>
          <img onClick={this.goBack} src={arrowBackIcon} alt="" />
          <div>
            <img src="https://i.pravatar.cc/100" alt="" />
            <div>
              <h4>Chas Mccawley</h4>
              <p>12 January 2019, 08:29pm</p>
            </div>
          </div>
        </div>
        <div className={styles.Content}>
          <h1>
            Diamler is beating Tesla in making autonomous big rigs.
          </h1>
          <img src="https://i.pravatar.cc/400" alt="" />
          <div className={styles.Controls}>
            <button onClick={this.handleLikesOverlay}>
              <img src={happyIcon} alt="" />
              <span className={styles.happy}>25</span>
            </button>
            <button onClick={this.handleLikesOverlay}>
              <img src={sadIcon} alt="" />
              <span className={styles.sad}>10</span>
            </button>
            <button onClick={this.handleCommentOverlay}>
              <img src={bubbleIcon} alt="" />
              <span className={styles.comments}>15</span>
            </button>
            <button>
              <img src={shareIcon} alt="" />
            </button>
          </div>
          <div className={styles.text}>
            <p>"Cardiologist-level arrhythmia detection and classification in ambulatory electrocardiograms using a deep neural network."</p>

            <p>"Here, we develop a deep neural network (DNN) to classify 12 rhythm classes using 91,232 single-lead ECGs from 53,549 patients who used a single-lead ambulatory ECG monitoring device. When validated against an independent test dataset annotated by a consensus committee of board-certified practicing cardiologists, the DNN achieved an average area under the receiver operating characteristic curve (ROC) of 0.97. The average F1 score, which is the harmonic mean of the positive predictive value and sensitivity, for the DNN (0.837) exceeded that of average cardiologists (0.780). With specificity fixed at the average specificity achieved by cardiologists, the sensitivity of the DNN exceeded the average cardiologist sensitivity for all rhythm classes."</p>
          </div>
        </div>
        {likesOverlay}
        {commentOverlay}
      </div>
    )
  }

}

export default Post
