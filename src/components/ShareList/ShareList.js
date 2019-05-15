import React from "react";
import styles from "../ParticipantsList/ParticipantsList.module.css";
import Person from "./Person/Person";

const ShareList = props => {
  return (
    <div className={styles.ParticipantsList}>
      {props.participants.map((person, index) => (
        <Person
          name={person.name}
          avatar={person.avatar}
          shared={person.shared}
          key={person.name + index}
        />
      ))}
    </div>
  );
};

export default ShareList;
