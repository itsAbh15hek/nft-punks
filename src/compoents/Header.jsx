import React from "react";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import "./header.css";
import searchIcon from "../assets/header/search.png";
import themeSwitch from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={punkLogo} alt="punk logo" className="punk-logo" />
      </div>
      <div className="search-container">
        <div className="search-icon-container">
          <img src={searchIcon} alt="search icon" className="search-icon" />
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Collection, Item, User..."
        />
      </div>
      <div className="header-items">
        <ul>
          <li>Drops</li>
          <li>Marketplace</li>
          <li>Create</li>
        </ul>
      </div>
      <div className="header-actions">
        <div className="theme-switch-container">
          <img
            src={themeSwitch}
            alt="theme switch icon"
            className="theme-switch-icon"
          />
        </div>
        <button className="login-button">Get In</button>
      </div>
    </header>
  );
};

export default Header;
