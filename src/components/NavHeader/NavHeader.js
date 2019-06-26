import React, { Component, Fragment } from "react";
import styles from "./NavHeader.module.css";
import backIcon from "../../images/arrow-back.svg";
import menuIcon from "../../images/menu.svg";
import { Link } from "react-router-dom";

import alarmIcon from "../../images/alarm2.svg";

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

import StarRatingComponent from "react-star-rating-component";


class NavHeader extends Component {
  state = {
    openMenu: false
  };

  handleMenu = () => {
    this.setState(prevState => {
      return { openMenu: !prevState.openMenu }
    })
  }

  render() {
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
      <div className={styles.NavHeader} >

        {this.state.openMenu ? (
          <img src={Logo} alt="logo" className={styles.Logo} />
        ) : (
            <Fragment>
              <div>
                {this.props.click ? (
                  <img src={backIcon} alt="go-back" onClick={this.props.click} />
                ) : (
                    <Link to="/">
                      <img src={backIcon} alt="go-home" />
                    </Link>
                  )}
              </div>
              <h2><img src={alarmIcon} alt="" />{this.props.heading}</h2>
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
      </div >
    );
  }

};

export default NavHeader;
