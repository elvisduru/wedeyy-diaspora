import React from "react";
import styles from "./Group.module.css";

const Group = props => {
  return (
    <div className={styles.Group}>
      <img src={props.avatar} alt="avatar" />
      <div>
        <h4>{props.username}</h4>
        <p>
          <span>{props.lastMessage}</span>
          <span>{props.time}</span>
        </p>
      </div>
    </div>
  );
};

export default Group;
