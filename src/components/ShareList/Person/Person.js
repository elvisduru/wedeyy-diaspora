import React from "react";
import styles from "../../ParticipantsList/Participant/Participant.module.css";

const Person = props => {
  return (
    <div className={styles.Participant}>
      <div className={props.shared ? styles.added : null}>
        <img src={props.avatar} alt="avatar" />
        <p>{props.name}</p>
      </div>
      <button className={props.shared ? styles.added : null}>
        {props.shared ? "Share" : "Shared"}
      </button>
    </div>
  );
};

export default Person;
