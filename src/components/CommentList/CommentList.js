import React from "react";
import styles from "./CommentList.module.css";
import Comment from "./Comment/Comment";

const CommentList = props => {
  const comments = [
    {
      username: "John Doe",
      avatar: "http://i.pravatar.cc/100",
      comment:
        "Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque. Aenean at leo tellus. Morbi eu leo sapien. Fusce libero dolor, venenatis eget enim sed, commodo efficitur arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce justo ipsum, placerat vitae erat ac, porttitor tincidunt lacus. In fermentum nulla nec fermentum tempus.",
      time: "10m",
      likeCount: 3,
      replyCount: 8
    },
    {
      username: "Tommy Lee",
      avatar: "http://i.pravatar.cc/101",
      comment:
        "Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque. Aenean at leo tellus. Morbi eu leo sapien. Fusce libero dolor, venenatis eget enim sed, commodo efficitur arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce justo ipsum, placerat vitae erat ac, porttitor tincidunt lacus. In fermentum nulla nec fermentum tempus.",
      time: "10m",
      likeCount: 3,
      replyCount: 8
    },
    {
      username: "Andy Mark",
      avatar: "http://i.pravatar.cc/102",
      comment:
        "Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque. Aenean at leo tellus. Morbi eu leo sapien. Fusce libero dolor, venenatis eget enim sed, commodo efficitur arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce justo ipsum, placerat vitae erat ac, porttitor tincidunt lacus. In fermentum nulla nec fermentum tempus.",
      time: "10m",
      likeCount: 3,
      replyCount: 8
    }
  ];
  return (
    <div className={styles.CommentList}>
      {comments.map((comment, index) => {
        return (
          <Comment
            username={comment.username}
            avatar={comment.avatar}
            comment={comment.comment}
            time={comment.time}
            likeCount={comment.likeCount}
            replyCount={comment.replyCount}
            key={comment.username + index}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
