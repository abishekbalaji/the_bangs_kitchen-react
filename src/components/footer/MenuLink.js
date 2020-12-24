//For mobile

import React from "react";
import { Link } from "react-router-dom";

import scrollToElem from "../../scrollToElem";

export default class MenuLink extends React.Component {
  handleScroll = () => {
    const elem = document.getElementById("menu");
    scrollToElem(elem);
  };
  render() {
    return (
      <Link to="/" onClick={this.handleScroll} className="footer__content-link">
        Menu
      </Link>
    );
  }
}
