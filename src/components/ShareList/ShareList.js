import React from "react";
import styles from "./ShareList.module.css";
import Person from "./Person/Person";
import crossIcon from "../../images/cross.svg";

const ShareList = props => {
  let heading;
  let content;
  if (props.shareType === "contact") {
    heading = "Share Contact With Chas";
    content = props.contacts.map((person, index) => (
      <Person
        name={person.name}
        avatar={person.avatar}
        shareContact={true}
        shared={person.shared}
        key={person.name + index}
      />
    ))
  } else if (props.shareType === "item") {
    heading = "Share With";
    content = props.contacts.map((person, index) => (
      <Person
        name={person.name}
        avatar={person.avatar}
        shareItem={true}
        shared={person.shared}
        key={person.name + index}
      />
    ))
  }
  return (
    <div className={styles.ShareList}>
      <div className={styles.header}>
        <img src={crossIcon} alt="close" onClick={props.closeShareOverlay} />
        <h2>{heading}</h2>
      </div>
      <div className={styles.content}>
        {content}
      </div>
    </div>
  );
};

export default ShareList;
