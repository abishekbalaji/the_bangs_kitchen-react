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
  render() {
    return (
      <div>
        <NavLink to="/" exact={true}>
          Home
        </NavLink>
        <NavLink to="/" onClick={this.handleScroll}>
          Menu
        </NavLink>
        <NavLink to="/" onClick={this.handleScroll}>
          Combos
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/" onClick={this.handleScrollContact}>
          Contact Us
        </NavLink>
      </div>
    );
  }
}
