import React, { Component } from "react";
import styles from "./SharedItems.module.css";
import crossIcon from "../../../../images/cross.svg";
import img1 from "../../../../images/alice-donovan-rouse-171566.png";
import img2 from "../../../../images/chaz-mcgregor-51043.png";
import img3 from "../../../../images/philipp-kammerer-346387.png";
import StarRatingComponent from "react-star-rating-component";
import moreIcon from "../../../../images/more.svg";
import linkIcon from "../../../../images/link.svg";
import downloadIcon from "../../../../images/download.svg";
import copyIcon from "../../../../images/select.svg";
import trashIcon from "../../../../images/trash.svg";
import shareIcon from "../../../../images/share.svg";
import OptionsOverlay from "../../../../components/OptionsOverlay/OptionsOverlay";
import ShareList from "../../../../components/ShareList/ShareList";

class SharedItems extends Component {
  state = {
    openMoreOverlay: false,
    openShareOverlay: false
  };

  goBack = () => {
    this.props.history.goBack();
  };

  handleMoreOverlay = e => {
    e.stopPropagation();
    this.setState((state, props) => {
      return {
        openMoreOverlay: !this.state.openMoreOverlay
      };
    });
  };

  stopEventPropagation = e => {
    e.stopPropagation();
  };

  openShareOverlay = () => {
    this.setState({ openShareOverlay: true, openMoreOverlay: false })
  }

  closeShareOverlay = () => {
    this.setState({ openShareOverlay: false })
  }


  render() {
    let moreOptions = [
      { icon: linkIcon, name: "Open Link" },
      { icon: downloadIcon, name: "Download" },
      { icon: copyIcon, name: "Copy Link" },
      { icon: trashIcon, name: "Delete just for me" },
      { icon: trashIcon, name: "Delete for All" },
      { icon: shareIcon, name: "Share" }
    ];

    let moreOverlay = this.state.openMoreOverlay ? (
      <OptionsOverlay
        heading="Options"
        options={moreOptions}
        click={this.handleMoreOverlay}
        stopPropagation={this.stopEventPropagation}
        openShareOverlay={this.openShareOverlay}
      />
    ) : null;

    let contacts = [
      {
        name: "Chas Mccawley",
        avatar: "http://i.pravatar.cc/101",
        shared: true
      },
      {
        name: "Karyl Philpott",
        avatar: "http://i.pravatar.cc/102",
        shared: false
      },
      {
        name: "Eugene Rosen",
        avatar: "http://i.pravatar.cc/103",
        shared: false
      },
      {
        name: "Chas Mccawley",
        avatar: "http://i.pravatar.cc/101",
        shared: false
      },
      {
        name: "Karyl Philpott",
        avatar: "http://i.pravatar.cc/102",
        shared: false
      },
      {
        name: "Eugene Rosen",
        avatar: "http://i.pravatar.cc/103",
        added: false
      }
    ]

    let shareOverlay = this.state.openShareOverlay ? (
      <ShareList contacts={contacts} shareType="item" closeShareOverlay={this.closeShareOverlay} />
    ) : null;

    return (
      <div className={styles.SharedItems}>
        <div className={styles.header}>
          <img src={crossIcon} alt="close" onClick={this.goBack} />
          <h3>Shared Items</h3>
        </div>
        <div className={styles.contents}>
          <div className={styles.image}>
            <img
              src={moreIcon}
              alt="more"
              className={styles.more}
              onClick={this.handleMoreOverlay}
            />
            <img src={img1} alt="" />
          </div>
          <div className={styles.file}>
            <img
              src={moreIcon}
              alt="more"
              className={styles.more}
              onClick={this.handleMoreOverlay}
            />
            <div>
              <p>Temple Run Version 2.0.APK</p>
              <small>APK file, 32.03MB</small>
            </div>
          </div>
          <div className={styles.link}>
            <img
              src={moreIcon}
              alt="more"
              className={styles.more}
              onClick={this.handleMoreOverlay}
            />
            <img src={img2} alt="" />
            <small>https://m.youtube.com/watch/UGFi7v8</small>
          </div>
          <div className={styles.contact}>
            <img
              src={moreIcon}
              alt="more"
              className={styles.more}
              onClick={this.handleMoreOverlay}
            />
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
        {moreOverlay}
        {shareOverlay}
      </div>
    );
  }
}

export default SharedItems;
