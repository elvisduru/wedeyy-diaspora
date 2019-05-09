import React from "react";
import styles from "./OverlayHeader.module.css";
import crossIcon from "../../images/cross.svg";

const OverlayHeader = props => {
  return (
    <div className={styles.OverlayHeader}>
      <h2>{props.title}</h2>
      <img src={crossIcon} alt="close" onClick={props.click} />
    </div>
  );
};

export default OverlayHeader;
