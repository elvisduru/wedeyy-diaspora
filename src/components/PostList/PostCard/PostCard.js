import React from 'react';
import styles from './PostCard.module.css';

import moreIcon from '../../../images/more.svg';

const PostCard = props => {
  let postCard;

  if (props.image) {
    postCard = (
      <div className={styles.PostCard} style={{ backgroundImage: `url(${props.image})`, backgroundSize: 'cover' }}>
        {props.moreIcon ? <img src={moreIcon} alt="more" onClick={props.click} /> : null}
        <div className={styles.description}>
          <img src={props.avatar} alt="" />
          <div>
            <h5>{props.title}</h5>
            <p>{props.helped} helped, {props.comments} comments</p>
          </div>
        </div>
      </div>
    )
  } else {
    postCard = (
      <div className={styles.PostCard} style={{ backgroundColor: 'rgba(249, 249, 249, 1)' }}>
        {props.moreIcon ? <img src={moreIcon} alt="more" onClick={props.click} /> : null}
        <h2>{props.title}</h2>
        <div className={styles.description}>
          <img src={props.avatar} alt="" />
          <p className={styles.darkText}>{props.helped} helped, {props.comments} comments</p>
        </div>
      </div>
    )
  }

  return postCard;
}

export default PostCard;
