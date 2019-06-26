import React, { Component, Fragment } from 'react';
import styles from './MyPosts.module.css';

import arrowBackIcon from '../../images/arrow-back.svg';
import menuIcon from "../../images/menu.svg";

import Logo from "../../images/Wedeyy@2x.png"
import homeIcon from "../../images/home.svg";
import userIcon from "../../images/users.svg";
import earthIcon from "../../images/earth.svg";
import bubbleIcon from "../../images/bubble.svg";
import apartmentIcon from "../../images/apartment.svg";
import questionIcon from "../../images/question-circle.svg";
import bullhornIcon from "../../images/bullhorn.svg";
import bookIcon from "../../images/book.svg";
import cogwheelIcon from "../../images/cog.svg";
import lockIcon from "../../images/lock.svg";
import crossIcon from "../../images/cross.svg";

import editIcon from "../../images/pencil.svg";
import trashIcon from "../../images/trash.svg";
import linkIcon from "../../images/link.svg";
import downloadIcon from "../../images/download.svg";

import StarRatingComponent from "react-star-rating-component";

import PostList from "../../components/PostList/PostList";
import OptionsOverlay from '../../components/OptionsOverlay/OptionsOverlay';

class MyPosts extends Component {
  state = {
    openMenu: false,
    optionsOverlayOpen: false,
    posts: [
      { image: "https://i.pravatar.cc/200", avatar: "https://i.pravatar.cc/50", title: "Diamler is beating Tesla in making autonomo…...", helped: "2k", comments: 25 },
      { image: "https://i.pravatar.cc/201", avatar: "https://i.pravatar.cc/50", title: "Diamler is beating Tesla in making autonomo…...", helped: "2k", comments: 25 },
      { image: "https://i.pravatar.cc/202", avatar: "https://i.pravatar.cc/50", title: "Diamler is beating Tesla in making autonomo…...", helped: "2k", comments: 25 },
      { avatar: "https://i.pravatar.cc/50", title: "Diamler is beating Tesla in making autonomo…...", helped: "2k", comments: 25 },
      { image: "https://i.pravatar.cc/203", avatar: "https://i.pravatar.cc/50", title: "Diamler is beating Tesla in making autonomo…...", helped: "2k", comments: 25 },
      { image: "https://i.pravatar.cc/204", avatar: "https://i.pravatar.cc/50", title: "Diamler is beating Tesla in making autonomo…...", helped: "2k", comments: 25 }
    ]
  };

  handleMenu = () => {
    this.setState(prevState => {
      return { openMenu: !prevState.openMenu }
    })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  handleOptionsOverlay = () => {
    this.setState(prevState => {
      return { optionsOverlayOpen: !prevState.optionsOverlayOpen };
    });
  };

  stopPropagation = e => {
    e.stopPropagation();
  };

  render() {
    let options = [
      { icon: editIcon, text: "Edit Post" },
      { icon: trashIcon, text: "Delete Post" },
      { icon: linkIcon, text: "Copy Post Link" },
      { icon: downloadIcon, text: "Save Post" },
    ]

    let optionsOverlay = this.state.optionsOverlayOpen ? (
      <OptionsOverlay options={options} click={this.handleOptionsOverlay} stopPropagation={this.stopPropagation} />
    ) : null;

    let menu = this.state.openMenu ? (
      <div className={styles.menu}>
        <div className={styles.profileCard}>
          <img src="http://i.pravatar.cc/100" alt="avatar" />
          <div>
            <h3>Kehinde John Omotoso</h3>
            <StarRatingComponent
              name="rate"
              editing={false}
              starCount={5}
              value={3}
              starColor="#000000"
              emptyStarColor="#707070"
            />
            <div className={styles.stats}>
              <div>
                <p>FOLLOWERS</p>
                <p>23K</p>
              </div>
              <div className={styles.divider} />
              <div>
                <p>LIKES</p>
                <p>5K</p>
              </div>
              <div className={styles.divider} />
              <div>
                <p>FOLLOWING</p>
                <p>23K</p>
              </div>
            </div>
          </div>
        </div>
        <ul className={styles.navlist}>
          <li>
            <img src={homeIcon} alt="Homepage" />
            Homepage
          </li>
          <li>
            <img src={userIcon} alt="Heritage" />
            Heritage
          </li>
          <li>
            <img src={earthIcon} alt="Diaspora" />
            Diaspora
          </li>
          <li>
            <img src={bubbleIcon} alt="Connect" />
            Connect
          </li>
          <li>
            <img src={bullhornIcon} alt="Bloggie" />
            Bloggie
          </li>
          <li>
            <img src={apartmentIcon} alt="Commerce Center" />
            Commerce Center
          </li>
          <li>
            <img src={questionIcon} alt="Help Center" />
            Help Center
          </li>
          <li>
            <img src={bookIcon} alt="Terms and Policy" />
            Terms and Policy
          </li>
          <li>
            <img src={cogwheelIcon} alt="Settings" />
            Settings
          </li>
          <li>
            <img src={lockIcon} alt="Log Out" />
            Log Out
          </li>
        </ul>
      </div>
    ) : null;

    return (
      <div className={styles.MyPosts}>
        <div className={styles.Header}>
          {this.state.openMenu ? (
            <img src={Logo} alt="logo" className={styles.Logo} />
          ) : (
              <Fragment>
                <img onClick={this.goBack} src={arrowBackIcon} alt="" />
                <div className={styles.left}>
                  <img src="https://i.pravatar.cc/100" alt="" />
                  <div>
                    <h4>My Posts</h4>
                    <p>23 Posts</p>
                  </div>
                </div>
              </Fragment>
            )}

          {this.state.openMenu ? (
            <img
              src={crossIcon}
              alt="close"
              className={styles.closeIcon}
              onClick={this.handleMenu}
            />
          ) : (
              <img
                src={menuIcon}
                alt="menu"
                className={styles.menuIcon}
                onClick={this.handleMenu}
              />
            )}
          {menu}
        </div>
        <div className={styles.Content}>
          <PostList posts={this.state.posts} click={this.handleOptionsOverlay} moreIcons />
        </div>
        {optionsOverlay}
      </div>
    )
  }
}

export default MyPosts;