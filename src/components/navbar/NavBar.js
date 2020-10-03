import React from "react";
import { Link, NavLink } from "react-router-dom";

import clean from "../../cleanUpText";
import scrollToElem from "../../scrollToElem";

export default class NavBar extends React.Component {
  handleScrollContact = () => {
    const contact = document.getElementById("footer");
    scrollToElem(contact);
  };
  handleScroll = (e) => {
    const idRaw = e.target.textContent;
    const id = clean(idRaw);
    const elem = document.getElementById(id);
    scrollToElem(elem);
  };
  handleNavClose = () => {
    document.getElementById("nav").classList.remove("navbar-visible");
    document.getElementById("nav").classList.add("navbar-invisible");
    document.getElementById("back-drop").style.display = "none";
  };
  render() {
    return (
      <div id="nav" className="navbar-invisible navbar">
        <button
          id="nav__exit-btn"
          className="navbar__close-btn"
          onClick={this.handleNavClose}
        >
          X
        </button>
        <div className="navbar__container__desk">
          <img
            className="brand-logo-web"
            src="/images/logo.png"
            width="45"
            height="45"
          />
          <div className="nav__items-div">
            <NavLink to="/" exact={true} className="nav__item">
              Home
            </NavLink>
            <NavLink to="/" onClick={this.handleScroll} className="nav__item">
              Combos
            </NavLink>
            <div className="nav__item">
              <div className="dropdown">
                <Link className="dropbtn" to="/" onClick={this.handleScroll}>
                  Menu
                </Link>
                <div className="dropdown-content">
                  <Link
                    className="navbar__dropdown__links"
                    to="/"
                    onClick={this.handleScroll}
                  >
                    <span className="navbar__icon">
                      <i className="fas fa-angle-double-right"></i>
                    </span>
                    <span> Shawarma</span>
                  </Link>
                  <Link
                    className="navbar__dropdown__links"
                    to="/"
                    onClick={this.handleScroll}
                  >
                    <span className="navbar__icon">
                      <i className="fas fa-angle-double-right"></i>
                    </span>
                    <span> Fried Chicken</span>
                  </Link>
                  <Link
                    className="navbar__dropdown__links"
                    to="/"
                    onClick={this.handleScroll}
                  >
                    <span className="navbar__icon">
                      <i className="fas fa-angle-double-right"></i>
                    </span>
                    <span> Rolls</span>
                  </Link>
                  <Link
                    className="navbar__dropdown__links"
                    to="/"
                    onClick={this.handleScroll}
                  >
                    <span className="navbar__icon">
                      <i className="fas fa-angle-double-right"></i>
                    </span>
                    <span> Sandwiches</span>
                  </Link>
                  <Link
                    className="navbar__dropdown__links"
                    to="/"
                    onClick={this.handleScroll}
                  >
                    <span className="navbar__icon">
                      <i className="fas fa-angle-double-right"></i>
                    </span>
                    <span> Burgers</span>
                  </Link>
                  <Link
                    className="navbar__dropdown__links"
                    to="/"
                    onClick={this.handleScroll}
                  >
                    <span className="navbar__icon">
                      <i className="fas fa-angle-double-right"></i>
                    </span>
                    <span> Grill Chicken</span>
                  </Link>
                  <Link
                    className="navbar__dropdown__links"
                    to="/"
                    onClick={this.handleScroll}
                  >
                    <span className="navbar__icon">
                      <i className="fas fa-angle-double-right"></i>
                    </span>
                    <span> Milkshakes</span>
                  </Link>
                  <Link
                    className="navbar__dropdown__links"
                    to="/"
                    onClick={this.handleScroll}
                  >
                    <span className="navbar__icon">
                      <i className="fas fa-angle-double-right"></i>
                    </span>
                    <span> Mojitos</span>
                  </Link>
                  <Link
                    className="navbar__dropdown__links"
                    to="/"
                    onClick={this.handleScroll}
                  >
                    <span className="navbar__icon">
                      <i className="fas fa-angle-double-right"></i>
                    </span>
                    <span> Beverages</span>
                  </Link>
                </div>
              </div>
            </div>
            <NavLink to="/about" className="nav__item">
              About
            </NavLink>
            <NavLink
              to="/"
              onClick={this.handleScrollContact}
              className="nav__item"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
