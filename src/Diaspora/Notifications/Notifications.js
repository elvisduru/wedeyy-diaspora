import React from "react";
import styles from "./Notifications.module.css";
import NotificationList from "../../components/NotificationList/NotificationList";
import NavHeader from "../../components/NavHeader/NavHeader";

const Notifications = () => {
  return (
    <div className={styles.Notifications}>
      <NavHeader heading="Notifications" />
      <NotificationList />
    </div>
  );
};

export default Notifications;
