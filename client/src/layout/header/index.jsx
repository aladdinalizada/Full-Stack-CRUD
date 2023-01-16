import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <h2>
            <Link to="/">Logo</Link>
          </h2>
        </div>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
        </div>
        <div className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
                <Link to="products">Products</Link>
            </li>
            <li className="navigation__item">
                <Link to="card">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
