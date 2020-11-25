import React from "react";
import "./Header.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import Selecter from "./Selecter";

function Header() {
  const [{ basket }] = useStateValue();
  // console.log(basket);
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/640px-EBay_logo.svg.png"
          alt="Ebay Logo"
        />
      </Link>
      <div className="header_category">
        <p>Shop by category</p>
        <ExpandMoreIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search for anything" type="text" />
        <Selecter />
      </div>
      <button>Search</button>
      <Link to="/basket">
        <div className="header__basket">
          <ShoppingBasketIcon />
          <p>{basket?.length}</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
