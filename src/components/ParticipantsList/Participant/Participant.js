import React from "react";
import styles from "./Participant.module.css";

const Participant = props => {
  return (
    <div className={styles.Participant}>
      <div className={props.added ? styles.added : null}>
        <img src={props.avatar} alt="avatar" />
        <p>{props.name}</p>
      </div>
      <button className={props.added ? styles.added : null}>
        {props.added ? "Add" : "Remove"}
      </button>
    </div>
  );
};

export default Participant;
