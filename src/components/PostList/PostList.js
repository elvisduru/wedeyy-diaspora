import React from 'react'
import styles from './PostList.module.css';

import PostCard from './PostCard/PostCard';

const PostList = props => (
  <div className={styles.PostList}>
    {props.posts.map((post, index) => <PostCard
      avatar={post.avatar}
      title={post.title}
      helped={post.helped}
      comments={post.comments}
      image={post.image}
      click={props.click}
      moreIcon={props.moreIcons}
    />)}
  </div>
)

export default PostList;