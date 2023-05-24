import React from "react";
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { ROUTES } from "../../helpers/RoutesPath";

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div className={styles.nav}>
      <SearchBar onSearch={onSearch} />
      <Link to={ROUTES.HOME}>
        <button>Home</button>
        </Link>
      <Link to={ROUTES.ABOUT}>
        <button>About</button>
      </Link>
      
    </div>
  );
};


export default Nav;