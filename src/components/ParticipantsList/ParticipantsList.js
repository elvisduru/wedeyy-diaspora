import React from "react";
import styles from "./ParticipantsList.module.css";
import Participant from "./Participant/Participant";

const ParticipantsList = props => {
  return (
    <div className={styles.ParticipantsList}>
      {props.participants.map((participant, index) => (
        <Participant
          name={participant.name}
          avatar={participant.avatar}
          added={participant.added}
          key={participant.name + index}
        />
      ))}
    </div>
  );
};

export default ParticipantsList;
