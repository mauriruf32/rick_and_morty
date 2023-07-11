
import React from "react";
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { ROUTES } from "../../helpers/RoutesPath";

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div className={styles.nav}>
      <div className={styles.botones}>
      <Link to={ROUTES.HOME}>
        <button className={styles.botones}>Home</button>
        </Link>
      <Link to={ROUTES.ABOUT}>
        <button className={styles.botones}>About</button>
      </Link>
      <Link to={"/favorites"}>
       <button className={styles.botones}>Favorites</button> 
        </Link>
      <SearchBar onSearch={onSearch} />
      </div>
    </div>

  );
};

export default Nav;

