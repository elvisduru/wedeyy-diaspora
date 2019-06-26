import React from "react";
import styles from "./Comment.module.css";
import moreIcon from "../../../images/more.svg";

const Comment = props => {
  return (
    <div className={styles.comment}>
      <div className={styles.top}>
        <img src={props.avatar} alt="avatar" />
        <div className={styles.commentBox}>
          <div className={styles.header}>
            <h4>{props.username}</h4>
            <img src={moreIcon} alt="more" />
          </div>
          <p>{props.comment}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>{props.time}</span>
        <span>
          Like <mark>{props.likeCount}</mark>
        </span>
        <span>
          Reply <mark>{props.replyCount}</mark>
        </span>
      </div>
    </div>
  );
};

export default Comment;
