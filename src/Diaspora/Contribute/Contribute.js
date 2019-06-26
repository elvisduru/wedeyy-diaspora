import React, { Component } from 'react';
import styles from './Contribute.module.css';

import arrowBackIcon from '../../images/arrow-back.svg';
import downIcon from '../../images/down.svg';
import cameraIcon from '../../images/camera_enhance.svg';
import chartIcon from '../../images/insert_chart.svg';
import addIcon from '../../images/add.svg';

class Contribute extends Component {

  state = {
    options: 2,
    openPoolBox: false
  }

  handleMoreOptions = () => {
    this.setState(prevState => {
      return { options: prevState.options + 1 }
    })
  }

  handleDropDown = () => {
    const dropdownIcon = this.refs.dropdown.children[1];
    dropdownIcon.classList.toggle('flip');

    const dropdown = this.refs.dropdown.nextSibling;
    dropdown.classList.toggle('show');
  }

  handleDropDown2 = () => {
    const dropdownIcon = this.refs.dropdown2.children[1];
    dropdownIcon.classList.toggle('flip');

    const dropdown = this.refs.dropdown2.nextSibling;
    dropdown.classList.toggle('show');
  }


  handleCheckbox = (e) => {
    e.target.classList.toggle(styles.checked)
  }

  openPoolBox = () => {
    this.setState({ openPoolBox: true })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    let poolBox = this.state.openPoolBox ? (
      <div className={styles.PoolBox}>
        <textarea placeholder="Ask Something" />
        <div className={styles.options}>
          {[...Array(this.state.options)].map((_, index) => (
            <div className={styles.option} key={index}>
              <button>
                <img src={cameraIcon} alt="" />
              </button>
              <input type="text" placeholder={`Option ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className={styles.Controls}>
          <div onClick={this.handleMoreOptions}>
            <button>
              <img src={addIcon} alt="" />
            </button>
            <p>Add more options</p>
          </div>
          <button onClick={this.goBack}>Post</button>
        </div>
      </div>
    ) : null;

    return (
      <div className={styles.Contribute}>
        <div className={styles.Header}>
          <img src={arrowBackIcon} alt="back" onClick={this.goBack} />
          <h2>Contribute</h2>
        </div>
        <div className={styles.Body}>
          <div className={styles.dropdownBox}>
            <div ref="dropdown" onClick={this.handleDropDown}>
              <h4>Select Category</h4>
              <img src={downIcon} alt="" />
            </div>
            <div>
              <ul>
                <li>
                  <div ref="dropdown2" onClick={this.handleDropDown2}>
                    <p>Business</p>
                    <img src={downIcon} alt="" />
                  </div>
                  <ul>
                    <li>Design</li>
                    <li>Technology</li>
                    <li>News</li>
                  </ul>
                </li>
                <li>Design</li>
                <li>Technology</li>
                <li>News</li>
                <li>Music</li>
                <li>Food</li>
                <li>Religion</li>
                <li>Others</li>
              </ul>
            </div>
          </div>
          <div className={styles.PostBox}>
            <input type="text" placeholder="Title" />
            <textarea placeholder="Write Something" />
            <div className={styles.Controls}>
              <button>
                <img src={cameraIcon} alt="" />
              </button>
              <button>
                <img src={chartIcon} onClick={this.openPoolBox} alt="" />
              </button>
              <div>
                <button>
                  <img src={addIcon} alt="" />
                </button>
                <p>Add related post</p>
              </div>
              <button onClick={this.goBack}>Post</button>
            </div>
            {poolBox}
          </div>
          <div className={styles.Footer}>
            <div>
              <div className={styles.checkbox} onClick={(e) => this.handleCheckbox(e)} />
              <p>Disable Comments</p>
            </div>
            <div>
              <div className={styles.checkbox} onClick={(e) => this.handleCheckbox(e)} />
              <p>Disable Sharing</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contribute;