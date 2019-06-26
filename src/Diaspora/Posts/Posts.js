import React, { Component } from 'react'
import styles from "./Posts.module.css";
import designIcon from "../../images/design.svg";
import businessIcon from "../../images/business.svg";
import technologyIcon from "../../images/technology.svg";
import newsIcon from "../../images/news.svg";
import musicIcon from "../../images/music.svg";
import FeedList from '../../containers/FeedList/FeedList';
import CategoriesOverlay from '../../components/CategoriesOverlay/CategoriesOverlay';

class Posts extends Component {
  state = {
    categoriesOverlayOpen: false
  };

  handleCategoriesOverlay = () => {
    this.setState(prevState => {
      return { categoriesOverlayOpen: !prevState.categoriesOverlayOpen }
    })
  }

  render() {
    let categoriesOverlay = this.state.categoriesOverlayOpen ? (
      <CategoriesOverlay click={this.handleCategoriesOverlay} />
    ) : null;

    return (
      <div className={styles.Posts}>
        <div className={styles.Categories}>
          <div className={styles.top}>
            <h4>Top Categories</h4>
            <button onClick={this.handleCategoriesOverlay}>All Categories</button>
          </div>
          <div className={styles.bottom}>
            <div><img src={designIcon} alt="" /><span>Design</span></div>
            <div><img src={businessIcon} alt="" /><span>Business</span></div>
            <div><img src={technologyIcon} alt="" /><span>Technology</span></div>
            <div><img src={newsIcon} alt="" /><span>News</span></div>
            <div><img src={musicIcon} alt="" /><span>Music</span></div>
          </div>
        </div>
        <FeedList />
        {categoriesOverlay}
      </div>
    )
  }

}

export default Posts;