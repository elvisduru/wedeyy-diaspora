import React from "react";
import styles from "./Comments.module.css";
import CommentList from "../CommentList/CommentList";
import closeBtn from "../../images/cross.svg";
import emojiIcon from "../../images/faces.svg";
import albumIcon from "../../images/album.svg";

const Comments = props => {
  return (
    <div className={styles.Comments}>
      <div className={styles.header}>
        <p>comments</p>
        <img src={closeBtn} onClick={props.click} alt="close" />
      </div>
      <CommentList />
      <div className={styles.addComment}>
        <input type="text" placeholder="Write Comment" />
        <div>
          <img src={emojiIcon} alt="emoji" />
          <img src={albumIcon} alt="album" />
        </div>
      </div>
    </div>
  );
};

export default Comments;
