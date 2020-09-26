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
      <div>
        <h1>Menu</h1>
        <Link to="/" onClick={this.handleScroll}>
          Shawarma
        </Link>
        <Link to="/" onClick={this.handleScroll}>
          Fried Chicken
        </Link>
        <Link to="/" onClick={this.handleScroll}>
          Rolls
        </Link>
        <Link to="/" onClick={this.handleScroll}>
          Sandwiches
        </Link>
        <Link to="/" onClick={this.handleScroll}>
          Burgers
        </Link>
        <Link to="/" onClick={this.handleScroll}>
          Grill Chicken
        </Link>
        <Link to="/" onClick={this.handleScroll}>
          Milkshakes
        </Link>
        <Link to="/" onClick={this.handleScroll}>
          Mojitos
        </Link>
        <Link to="/" onClick={this.handleScroll}>
          Beverages
        </Link>
      </div>
    );
  }
}
