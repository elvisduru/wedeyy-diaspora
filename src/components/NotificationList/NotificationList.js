import React from "react";
import styles from "./NotificationList.module.css";
import NotificationItem from "./NotificationItem/NotificationItem";

const NotificationList = () => {
  const notifications = [
    {
      username: "Susan Luisa",
      avatar: "http://i.pravatar.cc/101",
      message: "likes your post: Mordern day javascript programming practices.",
      time: "Yesterday"
    },
    {
      username: "Tommy Vercetti",
      avatar: "http://i.pravatar.cc/102",
      message: "likes your post: Mordern day javascript programming practices.",
      time: "Yesterday"
    },
    {
      username: "Carl Johnson",
      avatar: "http://i.pravatar.cc/103",
      message: "likes your post: Mordern day javascript programming practices.",
      time: "Yesterday"
    },
    {
      username: "John Doe",
      avatar: "http://i.pravatar.cc/104",
      message: "likes your post: Mordern day javascript programming practices.",
      time: "Yesterday"
    },
    {
      username: "Mike McKauley",
      avatar: "http://i.pravatar.cc/105",
      message: "likes your post: Mordern day javascript programming practices.",
      time: "Yesterday"
    },
    {
      username: "Susan Luisa",
      avatar: "http://i.pravatar.cc/101",
      message: "likes your post: Mordern day javascript programming practices.",
      time: "Yesterday"
    },
    {
      username: "Tommy Vercetti",
      avatar: "http://i.pravatar.cc/102",
      message: "likes your post: Mordern day javascript programming practices.",
      time: "Yesterday"
    },
    {
      username: "Carl Johnson",
      avatar: "http://i.pravatar.cc/103",
      message: "likes your post: Mordern day javascript programming practices.",
      time: "Yesterday"
    },
    {
      username: "John Doe",
      avatar: "http://i.pravatar.cc/104",
      message: "likes your post: Mordern day javascript programming practices.",
      time: "Yesterday"
    },
    {
      username: "Mike McKauley",
      avatar: "http://i.pravatar.cc/105",
      message: "likes your post: Mordern day javascript programming practices.",
      time: "Yesterday"
    }
  ];

  return (
    <div className={styles.NotificationList}>
      {notifications.map((notification, index) => {
        return (
          <NotificationItem
            avatar={notification.avatar}
            username={notification.username}
            message={notification.message}
            time={notification.time}
            key={notification.username + index}
          />
        );
      })}
    </div>
  );
};

export default NotificationList;
