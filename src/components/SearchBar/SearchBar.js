import React from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../images/search.svg";

const SearchBar = props => {
  return (
    <form action="#" className={styles.SearchBar}>
      <img src={searchIcon} alt="" />
      <input type="text" placeholder={props.placeholder} />
    </form>
  );
};

export default SearchBar;
