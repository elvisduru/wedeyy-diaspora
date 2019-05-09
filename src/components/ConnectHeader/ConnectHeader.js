import React from "react";
import styles from "./ConnectHeader.module.css";
import Logo from "../../images/Wedeyy Connect.png";
import menuIcon from "../../images/menu.svg";

const ConnectHeader = () => {
  return (
    <div className={styles.ConnectHeader}>
      <img src={Logo} alt="logo" className={styles.Logo} />
      <img src={menuIcon} alt="menu" className={styles.menuIcon} />
    </div>
  );
};

export default ConnectHeader;
