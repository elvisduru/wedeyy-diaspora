import React from "react";
import styles from "../../ParticipantsList/Participant/Participant.module.css";

const Person = props => {
  let btnText;
  if (props.shareContact) {
    btnText = props.shared ? "Share" : "Shared";
  } else if (props.shareItem) {
    btnText = props.shared ? "Send" : "Sent";
  }
  return (
    <div className={styles.Participant}>
      <div className={props.shared ? styles.added : null}>
        <img src={props.avatar} alt="avatar" />
        <p>{props.name}</p>
      </div>
      <button className={props.shared ? styles.added : null}>
        {btnText}
      </button>
    </div>
  );
};

export default Person;
