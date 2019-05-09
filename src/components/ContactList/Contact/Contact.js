import React from "react";
import styles from "./Contact.module.css";

const Contact = props => {
  return (
    <div className={styles.Contact}>
      <img src={props.avatar} alt="avatar" />
      <div>
        <h4>{props.name}</h4>
        <p>
          <span
            style={
              props.lastMessage === "Missed Video Call"
                ? { color: "#E74D3D" }
                : null
            }
          >
            {props.lastUser ? (
              <span style={{ fontFamily: "heebomedium" }}>
                {props.lastUser}:{" "}
              </span>
            ) : null}
            {props.lastMessage}
          </span>
          <span>{props.time}</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
