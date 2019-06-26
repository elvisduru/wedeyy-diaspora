import React, { Component } from 'react'
import styles from './CategoriesOverlay.module.css';

import ideaIcon from "../../images/idea.svg";
import paletteIcon from "../../images/paint-palette.svg";
import chipIcon from "../../images/chip.svg";
import newspaperIcon from "../../images/newspaper.svg";
import headphonesIcon from "../../images/headphones.svg";
import dinnerIcon from "../../images/dinner.svg";
import bookIcon from "../../images/book.svg";
import arrowBackIcon from "../../images/arrow-back.svg";
import chevronDownIcon from "../../images/chevron-down.svg";

class CategoriesOverlay extends Component {

  handleDropDown = () => {
    const dropdown = this.refs.dropdown.lastChild;
    dropdown.classList.toggle("show")

    const dropdownArrow = this.refs.dropdown.firstChild.lastChild;
    dropdownArrow.classList.toggle("flip")
  }

  render() {
    return (
      <div className={styles.CategoriesOverlay}>
        <div className={styles.Header}>
          <img src={arrowBackIcon} onClick={this.props.click} alt="" />
          <h2>Categories</h2>
        </div>
        <div className={styles.Body}>
          <h2>All Categories</h2>
          <div className={styles.Categories}>
            <div className={styles.Category}>
              <div className={styles.icon}>
                <img src={ideaIcon} alt="" />
              </div>
              <div ref="dropdown" onClick={this.handleDropDown}>
                <div>
                  <h2>Business</h2>
                  <p>2k Posts</p>
                  <img src={chevronDownIcon} alt="" />
                </div>
                <div className={styles.dropdown}>
                  <div>
                    <h3>Small-Scale Business</h3>
                    <p>2k Posts</p>
                  </div>
                  <div>
                    <h3>Starting Own Business</h3>
                    <p>2k Posts</p>
                  </div>
                  <div>
                    <h3>Product Marketing</h3>
                    <p>2k Posts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.Category}>
              <div className={styles.icon}>
                <img src={paletteIcon} alt="" />
              </div>
              <div>
                <div>
                  <h2>Design</h2>
                  <p>2k Posts</p>
                </div>
              </div>
            </div>
            <div className={styles.Category}>
              <div className={styles.icon}>
                <img src={chipIcon} alt="" />
              </div>
              <div>
                <div>
                  <h2>Technology</h2>
                  <p>2k Posts</p>
                </div>
              </div>
            </div>
            <div className={styles.Category}>
              <div className={styles.icon}>
                <img src={newspaperIcon} alt="" />
              </div>
              <div>
                <div>
                  <h2>News</h2>
                  <p>2k Posts</p>
                </div>
              </div>
            </div>
            <div className={styles.Category}>
              <div className={styles.icon}>
                <img src={headphonesIcon} alt="" />
              </div>
              <div>
                <div>
                  <h2>Music</h2>
                  <p>2k Posts</p>
                </div>
              </div>
            </div>
            <div className={styles.Category}>
              <div className={styles.icon}>
                <img src={dinnerIcon} alt="" />
              </div>
              <div>
                <div>
                  <h2>Food</h2>
                  <p>2k Posts</p>
                </div>
              </div>
            </div>
            <div className={styles.Category}>
              <div className={styles.icon}>
                <img src={bookIcon} alt="" />
              </div>
              <div>
                <div>
                  <h2>Religion</h2>
                  <p>2k Posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoriesOverlay;