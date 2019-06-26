import React from 'react';
import styles from './OptionsOverlay.module.css';

import crossIcon from "../../images/cross.svg";

const OptionsOverlay = props => (
  <div className={styles.OptionsOverlay} onClick={props.click}>
    <div className={styles.options} onClick={props.stopEventPropagation}>
      <div className={styles.option} onClick={props.click}>
        <img
          src={crossIcon}
          alt="cancel"
          onClick={props.click}
        />
        <span>Post Options</span>
      </div>
      {props.options.map((option, index) => (
        <div className={styles.option} key={index}>
          <img src={option.icon} alt="cancel" />
          <span>{option.text}</span>
        </div>
      ))}
    </div>
  </div>
)

export default OptionsOverlay;