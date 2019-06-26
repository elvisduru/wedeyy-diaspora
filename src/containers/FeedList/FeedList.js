import React, { Component } from 'react';
import styles from "./FeedList.module.css";
import Feed from './Feed/Feed';

class FeedList extends Component {
  state = {
    feeds: [
      {
        username: "Karyl Philpott",
        time: "12 January 2019, 08:29pm",
        avatar: "https://i.pravatar.cc/100",
        description: "The Algorithm browses Wikipedia to auto-generate textbooks - MIT Technology.",
        image: "https://i.pravatar.cc/400",
        happy: 25,
        sad: 10,
        comments: 15,
        type: "image",
      },
      {
        username: "Karyl Philpott",
        time: "12 January 2019, 08:29pm",
        avatar: "https://i.pravatar.cc/100",
        description: "Which of the Businesses below is more profitable in your area?",
        questions: [
          { image: "https://i.pravatar.cc/100", text: "Fashion Designer", amount: 30, id: "1" },
          { image: "", text: "Food Canteen", amount: 10, id: "2" },
          { image: "", text: "Car Wash (Hand Wash)", amount: 60, id: "3" }
        ],
        happy: 25,
        sad: 10,
        comments: 15,
        type: "poll",
      },
      {
        username: "Karyl Philpott",
        time: "12 January 2019, 08:29pm",
        avatar: "https://i.pravatar.cc/100",
        text: "Cardiologist-level arrhythmia detection and classification in ambulatory electrocardiogram.",
        happy: 25,
        sad: 10,
        comments: 15,
        type: "text",
      },
      {
        username: "Ashly Arteaga",
        time: "12 January 2019, 08:29pm",
        avatar: "https://i.pravatar.cc/100",
        description: "How To Make Beet Salad With Vegetables with Megan Hoffman.",
        image: "https://i.pravatar.cc/401",
        happy: 25,
        sad: 10,
        comments: 15,
        type: "image",
      },
    ]
  }

  render() {
    let feeds;

    feeds = this.state.feeds.map((feed, index) => {
      if (feed.type === "image") {
        return <Feed
          type={feed.type}
          username={feed.username}
          time={feed.time}
          avatar={feed.avatar}
          description={feed.description}
          image={feed.image}
          key={index}
          happy={feed.happy}
          sad={feed.sad}
          comments={feed.comments}
        />
      } else if (feed.type === "poll") {
        return <Feed
          type={feed.type}
          username={feed.username}
          time={feed.time}
          avatar={feed.avatar}
          description={feed.description}
          questions={feed.questions}
          key={index}
          happy={feed.happy}
          sad={feed.sad}
          comments={feed.comments}
        />
      } else if (feed.type === "text") {
        return <Feed
          type={feed.type}
          username={feed.username}
          time={feed.time}
          avatar={feed.avatar}
          text={feed.text}
          key={index}
          happy={feed.happy}
          sad={feed.sad}
          comments={feed.comments}
        />
      } else {
        return null
      }
    })

    return (
      <div className={styles.FeedList}>
        {feeds}
      </div>
    );
  }
}

export default FeedList;