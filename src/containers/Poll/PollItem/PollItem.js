import React from 'react';
import styles from './PollItem.module.css';

const PollItem = props => {
  return (
    <div className={styles.PollItem} onClick={() => props.click(props.question.id)}>
      <div className={styles.left}>
        {props.question.image ? <img src={props.question.image} alt="" /> : null}
        <div className={styles.question}>
          <h2>{props.question.text}</h2>
          <p>{props.question.amount}%</p>
        </div>
      </div>
      {props.selected ? <div className={styles.radioBtnChecked} /> : <div className={styles.radioBtn} />}
    </div>
  )
}

export default PollItem;
