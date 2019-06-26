import React from "react";
import styles from "./Likes.module.css";
import PeopleList from "../PeopleList/PeopleList";
import closeBtn from "../../images/cross.svg";
import happyIcon from "../../images/happy.svg";

const Likes = props => {
  return (
    <div className={styles.Likes}>
      <div className={styles.header}>
        <p>
          people who post helped{" "}
          <img
            style={{ width: "22px", verticalAlign: "middle" }}
            src={happyIcon}
            alt=""
          />
        </p>
        <img src={closeBtn} onClick={props.click} alt="close" />
      </div>
      <PeopleList people={props.people} />
    </div>
  );
};

export default Likes;
