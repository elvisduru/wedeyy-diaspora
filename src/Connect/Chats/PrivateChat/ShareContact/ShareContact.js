import React from "react";
import crossIcon from "../../../../images/cross.svg";

const ShareContact = () => {
  return (
    <div className={styles.ShareContact}>
      <div className={styles.header}>
        <img src={crossIcon} alt="close" />
        <h3>Share Contact With Chas</h3>
      </div>
    </div>
  );
};

export default ShareContact;
