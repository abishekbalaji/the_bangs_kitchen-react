import React from "react";
import { Link } from "react-router-dom";

import scrollToElem from "../../scrollToElem";
import clean from "../../cleanUpText";

export default class MenuLinks extends React.Component {
  handleScroll = (e) => {
    const idRaw = e.target.textContent;
    const id = clean(idRaw);
    const elem = document.getElementById(id);
    scrollToElem(elem);
  };
  render() {
    return (
      <div className="footer__menu-links">
        <h1 className="footer__menu-main-title">Menu</h1>
        <div className="footer__menu-links__container">
          <Link className="footer__menus" to="/" onClick={this.handleScroll}>
            Shawarma
          </Link>
          <Link className="footer__menus" to="/" onClick={this.handleScroll}>
            Fried Chicken
          </Link>
          <Link className="footer__menus" to="/" onClick={this.handleScroll}>
            Rolls
          </Link>
          <Link className="footer__menus" to="/" onClick={this.handleScroll}>
            Sandwiches
          </Link>
          <Link className="footer__menus" to="/" onClick={this.handleScroll}>
            Burgers
          </Link>
          <Link className="footer__menus" to="/" onClick={this.handleScroll}>
            Grill Chicken
          </Link>
          <Link className="footer__menus" to="/" onClick={this.handleScroll}>
            Milkshakes
          </Link>
          <Link className="footer__menus" to="/" onClick={this.handleScroll}>
            Mojitos
          </Link>
          <Link className="footer__menus" to="/" onClick={this.handleScroll}>
            Beverages
          </Link>
        </div>
      </div>
    );
  }
}
