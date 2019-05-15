import React, { Component } from "react";
import styles from "./SharedItems.module.css";
import crossIcon from "../../../../images/cross.svg";
import img1 from "../../../../images/alice-donovan-rouse-171566.png";
import img2 from "../../../../images/chaz-mcgregor-51043.png";
import img3 from "../../../../images/philipp-kammerer-346387.png";
import StarRatingComponent from "react-star-rating-component";
import moreIcon from "../../../../images/more.svg";

class SharedItems extends Component {
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className={styles.SharedItems}>
        <div className={styles.header}>
          <img src={crossIcon} alt="close" onClick={this.goBack} />
          <h3>Shared Items</h3>
        </div>
        <div className={styles.contents}>
          <div className={styles.image}>
            <img src={moreIcon} alt="more" className={styles.more} />
            <img src={img1} alt="" />
          </div>
          <div className={styles.file}>
            <img src={moreIcon} alt="more" className={styles.more} />
            <div>
              <p>Temple Run Version 2.0.APK</p>
              <small>APK file, 32.03MB</small>
            </div>
          </div>
          <div className={styles.link}>
            <img src={moreIcon} alt="more" className={styles.more} />
            <img src={img2} alt="" />
            <small>https://m.youtube.com/watch/UGFi7v8</small>
          </div>
          <div className={styles.contact}>
            <img src={moreIcon} alt="more" className={styles.more} />
            <img src={img3} alt="" />
            <div>
              <div className={styles.top}>
                <h4>Kehinde John Omotoso</h4>
                <StarRatingComponent
                  name="rate"
                  editing={false}
                  starCount={5}
                  value={3}
                  starColor="#000000"
                  emptyStarColor="#707070"
                />
              </div>
              <div className={styles.bottom}>
                <button>VIEW PROFILE</button>
                <button>FOLLOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SharedItems;
