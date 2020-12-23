import React from "react";
import "./Header.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import Ind from "../../assets/ind_flag.svg";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  //console.log(state);
  return (
    <div className="header">
      <Link to="/">
        <input
          type="image"
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>
      <LocationOnOutlinedIcon />
      <div className="header__option">
        <span className="header__option2">Deliver to</span>
        <span className="header__option1">Chennai - 600041</span>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <button className="header__searchButton">
          <SearchIcon className="header__searchIcon" />
        </button>
      </div>
      <div className="header__nav">
        <button className="header__option button ind">
          <span className="header__option1">
            <b>IND</b>
          </span>
          <span className="header__option2">
            <input type="image" src={Ind} />
          </span>
        </button>
        <button className="header__option button">
          <span className="header__option1">Hello, Guest</span>
          <span className="header__option2">Sign In</span>
        </button>
        <button className="header__option button">
          <span className="header__option1">Returns</span>
          <span className="header__option2">& Orders</span>
        </button>
        <button className="header__option button">
          <span className="header__option1">Your</span>
          <span className="header__option2">Prime</span>
        </button>
        <Link to="/checkout">
          <button className="header__optionBasket button">
            <span className="header__option2 header__basketCount">
              <ShoppingCartOutlinedIcon />{" "}
              <span className="header__spanCounter">{basket?.length}</span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
