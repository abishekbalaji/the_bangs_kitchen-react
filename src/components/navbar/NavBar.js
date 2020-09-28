import React from "react";
import { NavLink } from "react-router-dom";

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
        <img
          className="brand-logo-web"
          src="/images/logo.png"
          width="45"
          height="45"
        />
        <NavLink to="/" exact={true} className="nav__item">
          Home
        </NavLink>
        <NavLink to="/" onClick={this.handleScroll} className="nav__item">
          Menu
        </NavLink>
        <NavLink to="/" onClick={this.handleScroll} className="nav__item">
          Combos
        </NavLink>
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
    );
  }
}
