import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Groups.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import ContactList from "../../components/ContactList/ContactList";

class Groups extends Component {
  state = {
    contacts: [
      {
        name: "Chas Mccawley",
        avatar: "http://i.pravatar.cc/101",
        lastMessage: "I am coming home now...",
        lastUser: "James",
        time: "2:22am"
      },
      {
        name: "Karyl Philpott",
        avatar: "http://i.pravatar.cc/102",
        lastMessage: "Why did you not answer my calls?",
        lastUser: "Elena",
        time: "2:22am"
      },
      {
        name: "Eugene Rosen",
        avatar: "http://i.pravatar.cc/103",
        lastMessage: "Hello Frank, called to check on mum.",
        lastUser: "Francis",
        time: "2:22am"
      }
    ]
  };
  render() {
    return (
      <div className={styles.Groups}>
        <SearchBar placeholder="Filter Group" />
        <h2>Groups</h2>
        <Link to="/creategroup">CREATE NEW GROUP</Link>
        <ContactList
          contacts={this.state.contacts}
          groupList
        />
      </div>
    );
  }
}

export default Groups;
