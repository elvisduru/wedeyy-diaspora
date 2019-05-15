import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContactList.module.css";
import Contact from "./Contact/Contact";

const ContactList = props => {
  let contacts;
  if (props.groupList) {
    contacts = props.contacts.map((contact, index) => (
      <Link to="/private-chat" key={contact.name + index}>
        <Contact
          name={contact.name}
          avatar={contact.avatar}
          lastMessage={contact.lastMessage}
          time={contact.time}
          lastUser={contact.lastUser}
        />
      </Link>
    ));
  } else {
    contacts = props.contacts.map((contact, index) => (
      <Link to="/private-chat" key={contact.name + index}>
        <Contact
          name={contact.name}
          avatar={contact.avatar}
          lastMessage={contact.lastMessage}
          time={contact.time}
        />
      </Link>
    ));
  }
  return (
    <div className={styles.ContactList}>
      {props.createBtn ? <button>{props.createBtn}</button> : null}
      {contacts}
    </div>
  );
};

export default ContactList;
