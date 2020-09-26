import React from "react";
import { NavLink } from "react-router-dom";

import scrollToElem from "../../scrollToElem";

export default class NavBar extends React.Component {
  main = React.createRef();
  handleScrollMenu = () => {
    const menu = document.getElementById("menu");
    scrollToElem(menu);
  };
  handleScrollCombos = () => {
    const combos = document.getElementById("combos");
    scrollToElem(combos);
  };
  handleScrollContact = () => {
    const contact = document.getElementById("footer");
    scrollToElem(contact);
  };
  handleScrollShawarma = () => {
    const shawar = document.getElementById("shawarma");
    scrollToElem(shawar);
  };
  render() {
    return (
      <div>
        <NavLink to="/" exact={true}>
          Home
        </NavLink>
        <NavLink to="/" onClick={this.handleScrollMenu}>
          Menu
        </NavLink>
        <NavLink to="/" onClick={this.handleScrollCombos}>
          Combos
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/" onClick={this.handleScrollContact}>
          Contact Us
        </NavLink>
        <NavLink to="/" onClick={this.handleScrollShawarma}>
          Shawarma
        </NavLink>
      </div>
    );
  }
}
